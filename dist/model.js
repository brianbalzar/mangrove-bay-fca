import { DATA } from './data.js';
export const defaults = { funding:15.1, inflation:4, start:2027, coral:'undecided', replacement:null, replacementYear:2029, dollars:'constant' };
export function normalize(input={}) {
  const number=(v,d,min,max)=>Number.isFinite(Number(v))&&v!==''&&v!==null ? Math.min(max,Math.max(min,Number(v))):d;
  return {funding:number(input.funding,15.1,0,60),inflation:number(input.inflation,4,0,10),start:input.start==2028?2028:2027,coral:['undecided','renovate','replace'].includes(input.coral)?input.coral:'undecided',replacement:number(input.replacement,null,.1,150),replacementYear:Math.round(number(input.replacementYear,2029,2028,2031)),dollars:input.dollars==='nominal'?'nominal':'constant'};
}
export function model(input={}) {
  const s=normalize(input), replacementActive=s.coral==='replace'&&s.replacement!==null;
  if(s.coral==='replace'&&!replacementActive) return {valid:false,scenario:s,error:'Enter a replacement allowance to calculate this scenario. The report does not price a new school.'};
  const base=DATA.annual.map((v,i)=>replacementActive ? Math.max(0,v-DATA.coralAnnual[i])+(i===0?1.5:0)+(2027+i===s.replacementYear?s.replacement:0):v);
  let backlog=0,reserve=0,totalFunding=0;
  const rows=base.map((need,i)=>{
    const year=2027+i,factor=(1+s.inflation/100)**(i+1),due=need*factor;
    const inflationOnBacklog=backlog*s.inflation/100;
    const availableNeed=backlog+inflationOnBacklog+due;
    const allocation=year>=s.start?s.funding:0;
    const availableCash=reserve+allocation,spent=Math.min(availableNeed,availableCash);
    backlog=Math.max(0,availableNeed-spent);reserve=Math.max(0,availableCash-spent);totalFunding+=allocation;
    return {year,label:DATA.years[i],base:need,factor,due,allocation,spent,backlog,reserve,inflationOnBacklog,ratio:100*backlog/(DATA.portfolio.crv*factor)};
  });
  const clearIndex=rows.findIndex((r,i)=>r.backlog<.000001&&rows.slice(i).every(x=>x.backlog<.000001));
  return {valid:true,scenario:s,rows,replacementActive,totalBase:base.reduce((a,b)=>a+b,0),totalNominal:rows.reduce((a,b)=>a+b.due,0),totalFunding,endBacklog:backlog,endReserve:reserve,ratio:rows.at(-1).ratio,clearYear:clearIndex<0?null:rows[clearIndex].label,peakBacklog:Math.max(...rows.map(x=>x.backlog)),deferralCost:rows.reduce((a,b)=>a+b.inflationOnBacklog,0)};
}
export function scenarioQuery(s) {
  const p=new URLSearchParams();
  for(const key of Object.keys(defaults)) if(s[key]!==null&&s[key]!==undefined) p.set(key,String(s[key]));
  return p.toString();
}
