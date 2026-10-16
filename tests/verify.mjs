import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DATA as D } from '../dist/data.js';
import { model, normalize, scenarioQuery } from '../dist/model.js';
import * as views from '../dist/app.js';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const near=(actual,expected,tolerance=1e-7)=>assert.ok(Math.abs(actual-expected)<tolerance,`${actual} differs from ${expected}`);
const sum=a=>a.reduce((x,y)=>x+y,0);
let groups=0;

// Reconcile source coverage and headline totals rather than recomputing published FCI from rounded costs.
assert.equal(D.sites.length,8);
near(sum(D.sites.map(s=>s.area)),1197800);
near(sum(D.sites.map(s=>s.enrollment||0)),8628);
near(sum(D.sites.map(s=>s.current)),53.3);
near(sum(D.sites.map(s=>s.crv)),560.9);
near(sum(D.sites.map(s=>s.renewal)),209.1);
near(sum(D.annual),209.1);
near(sum(D.coralAnnual),14.72);
assert.equal(D.sites.filter(s=>s.rating==='Poor').length,4);
assert.equal(D.sites.filter(s=>s.shelter).length,3);
assert.equal(D.findings.length,24);
assert.equal(new Set(D.findings.map(f=>f.id)).size,24);
assert.equal(D.findings.filter(f=>f.priority===1).length,8);
assert.equal(D.findings.filter(f=>f.priority===2).length,14);
near(sum(D.findings.filter(f=>f.priority===1).map(f=>f.cost)),7242000);
near(sum(D.findings.filter(f=>f.priority===2).map(f=>f.cost)),19653000);
D.findings.forEach(f=>{assert.ok(D.sites.some(s=>s.id===f.site));assert.ok(f.page>=1&&f.page<=62);assert.ok(f.cost>0);});
near(sum(D.savings.map(s=>s[1])),503);
groups++;

// Independently verifiable boundary conditions detect duplicate backlog, dropped need and false clear years.
const unfunded=model({funding:0,inflation:0});
near(unfunded.endBacklog,209.1);assert.equal(unfunded.clearYear,null);
const flat=model({funding:15.1,inflation:0});
near(flat.endBacklog,209.1-15.1*10);near(flat.totalFunding,151);
const delayed=model({funding:15.1,inflation:0,start:2028});
near(delayed.endBacklog,209.1-15.1*9);near(delayed.rows[0].spent,0);
const fullyFunded=model({funding:60,inflation:0});
near(fullyFunded.endBacklog,0);near(fullyFunded.endReserve,600-209.1);assert.equal(fullyFunded.clearYear,'FY27');
const escalatedUnfunded=model({funding:0,inflation:4});
near(escalatedUnfunded.endBacklog,209.1*1.04**10);
near(escalatedUnfunded.ratio,209.1/560.9*100);
const baseline=model();
assert.equal(baseline.totalBase.toFixed(1),'209.1');assert.equal(baseline.totalNominal.toFixed(1),'243.6');
near(baseline.rows[0].due,53.26*1.04);near(baseline.rows[0].backlog,53.26*1.04-15.1);
for(const funding of [0,5,15.1,20,40,60])for(const inflation of [0,4,10]){
  const r=model({funding,inflation});
  for(const row of r.rows){assert.ok(row.backlog>=0&&row.reserve>=0);near(Math.min(row.backlog,row.reserve),0);}
  near(sum(r.rows.map(x=>x.spent))+r.endReserve,r.totalFunding);
  near(r.totalNominal+r.deferralCost-sum(r.rows.map(x=>x.spent)),r.endBacklog);
}
assert.ok(model({funding:20}).endBacklog<model({funding:15.1}).endBacklog);
groups++;

// Replacement cannot silently use CRV as a priced construction project or omit its entered allowance.
assert.equal(model({coral:'replace'}).valid,false);
const replacement=model({coral:'replace',replacement:30,replacementYear:2029,inflation:0,funding:0});
near(replacement.totalBase,209.1-14.72+1.5+30);
near(replacement.rows[0].base,53.26-7.347+1.5);
near(replacement.rows[2].base,28.56-1.377+30);
const roundedYear=model({coral:'replace',replacement:30,replacementYear:2028.5,inflation:0});
near(roundedYear.totalBase,replacement.totalBase);
assert.equal(normalize({funding:-12,inflation:90}).funding,0);
assert.equal(normalize({funding:900,inflation:90}).inflation,10);
assert.equal(normalize({funding:'bad',coral:'unknown'}).funding,15.1);
const shared=normalize({funding:22.5,inflation:3.5,start:2028,coral:'replace',replacement:37.7,replacementYear:2030,dollars:'constant'});
assert.deepEqual(normalize(Object.fromEntries(new URLSearchParams(scenarioQuery(shared)))),shared);
groups++;

// Render every route without a browser. Catch missing data, bad assets, broken PDF pages and unexpected markup values.
const routes={};
for(const name of ['overview','capital','sites','energy','action','funding','about'])routes[name]=views[name]();
for(const site of D.sites)routes['sites/'+site.id]=views.siteDetail(site.id);
const allHtml=Object.values(routes).join('\n');
for(const [route,html] of Object.entries(routes)){
  assert.ok(html.includes('<h1>'),route+' has no main heading');
  assert.ok(!/\b(?:undefined|NaN|Infinity)\b/.test(html),route+' has an invalid value');
  assert.ok(!html.includes('${'),route+' has an unexpanded expression');
  for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    const target=match[1].replaceAll('&amp;','&');
    if(target.startsWith('#/')){
      const routePath=target.slice(2).split('?')[0];assert.ok(routePath in routes||D.sites.some(s=>'sites/'+s.id===routePath),`Unknown route ${target}`);
    }else if(target.startsWith('assets/')){
      assert.ok(fs.existsSync(path.join(root,'dist',target.split('#')[0])),`Missing asset ${target}`);
      if(target.includes('#page=')){const page=Number(target.split('#page=')[1]);assert.ok(page>=1&&page<=62);}
    }
  }
}
assert.ok(allHtml.includes('Not by FY36'));
assert.ok(routes.action.includes('24</strong> published findings'));
assert.ok(routes['sites/coral-key'].includes('$14.720M'));
assert.ok(routes['sites/tarpon-ridge'].includes('not included in the supplied PDF'));
assert.equal(views.esc('<script>"&'),'&lt;script&gt;&quot;&amp;');
groups++;

// Save renderings only as scratch QA input, never as a second deliverable or deployment asset.
const out=process.env.MANGROVE_QA_DIR;
if(out){fs.mkdirSync(out,{recursive:true});for(const [route,html]of Object.entries(routes))fs.writeFileSync(path.join(out,route.replaceAll('/','-')+'.html'),html);}
console.log(`PASS: ${groups} verification groups; report totals, model boundaries and ${Object.keys(routes).length} rendered routes.`);
