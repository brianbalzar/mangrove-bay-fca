// Report snapshot. Dollar amounts use millions unless a field explicitly states dollars.
// Retain published, rounded values; do not back-calculate reported FCI from rounded costs.
export const DATA = {
  district: 'Mangrove Bay School District',
  revision: 'Rev. 3 · October 2026',
  cutoff: 'September 30, 2026',
  assessment: 'August–September 2026',
  report: 'assets/mangrove-bay-fca-report.pdf',
  portfolio: {assessed:8, facilities:41, area:1197800, districtArea:4150000, students:8628, crv:560.9, current:53.3, fci:9.5, renewal:209.1, escalated:243.6, eui:50.5, energyCost:1.70, utilityCost:2.04, savings:503000, annualCapacity:15.1},
  years: ['FY27','FY28','FY29','FY30','FY31','FY32','FY33','FY34','FY35','FY36'],
  annual: [53.26,35.62,28.56,18.97,19.47,11.25,18.23,14.34,1.88,7.52],
  // Derived by grouping the budget years of Coral Key inventory, plus two repair findings (pp. 46–47).
  coralAnnual: [7.347,1.544,1.377,1.469,.717,.996,.125,1.145,0,0],
  systems: [
    {name:'HVAC',total:56.6,color:'#0879d5',years:[21.3,12.6,6.7,1.9,2.0,12.1]},
    {name:'Envelope & roofing',total:56.1,color:'#4f9b9a',years:[17.5,10.6,9.4,6.7,3.4,8.4]},
    {name:'Interiors',total:31.8,color:'#aabccd',years:[2.0,5.7,2.9,5.7,2.9,12.6]},
    {name:'Electrical',total:26.7,color:'#6b72b1',years:[4.6,1.7,4.7,3.6,6.6,5.6]},
    {name:'Plumbing',total:19.9,color:'#78b7cd',years:[4.5,.7,4.4,.1,.4,9.9]},
    {name:'Site & equipment',total:16.2,color:'#c4ae80',years:[2.8,3.9,.5,1.0,3.7,4.4]},
    {name:'Fire / life safety & conveying',total:1.7,color:'#bf8685',years:[.5,.5,0,0,.5,.3]}
  ],
  sites: [
    {id:'coral-key',code:'CKE',name:'Coral Key Elementary',short:'Coral Key ES',type:'Elementary',grades:'PK–5',built:1962,renovation:'1998',area:68400,enrollment:612,flood:'AE',shelter:false,crv:29.1,current:7.3,fci:25.3,rating:'Poor',renewal:14.7,renewalRatio:51,eui:58.9,kwh:16.1,utilityCost:2.35,energyCost:1.95,quadrant:'Renew & retrofit',path:'Stabilize now. Study replacement versus renovation.',summary:'A 1962 finger-plan campus with aging building fabric, roof leaks, failed rooftop units and humidity concerns. Stabilize essential systems, then compare renovation and replacement over the same 30-year horizon.',map:[185,125],source:43},
    {id:'pelican-point',code:'PPE',name:'Pelican Point Elementary',short:'Pelican Point ES',type:'Elementary',grades:'K–5',built:1987,renovation:'2009',area:84200,enrollment:744,flood:'X',shelter:true,crv:35.8,current:3.3,fci:9.2,rating:'Fair',renewal:12.0,renewalRatio:34,eui:44.5,kwh:13.0,utilityCost:1.94,quadrant:'Capital renewal',path:'Restore cooling reliability and shelter capacity.',summary:'An EHPA hurricane shelter with failing coastal rooftop units and an undersized generator. Prioritize equipment reliability and the ability to carry HVAC loads in the shelter area.',map:[340,95],source:51},
    {id:'heron-creek',code:'HCE',name:'Heron Creek Elementary',short:'Heron Creek ES',type:'Elementary',grades:'K–5',built:2006,renovation:'—',area:96500,enrollment:868,flood:'X',shelter:true,crv:41.0,current:1.1,fci:2.7,rating:'Good',renewal:13.4,renewalRatio:33,eui:35.5,kwh:10.4,utilityCost:1.62,quadrant:'Maintain',path:'Maintain performance; plan the first renewal cycle.',summary:'Good condition today, with 2006 chillers and other original systems approaching their first major renewal cycle. A low current FCI does not remove the need for planned capital investment.',map:[420,170],source:51},
    {id:'bayside',code:'BMS',name:'Bayside Middle School',short:'Bayside MS',type:'Middle',grades:'6–8',built:1971,renovation:'1998',area:142800,enrollment:1104,flood:'AE',shelter:false,crv:63.5,current:7.1,fci:11.1,rating:'Poor',renewal:29.3,renewalRatio:46,eui:53.1,kwh:14.5,utilityCost:2.11,quadrant:'Renew & retrofit',path:'Restore chiller redundancy; renew the envelope.',summary:'One chiller is out of service, leaving the school without cooling redundancy. Original 1971 non-impact windows and drainage problems add resilience and water-intrusion priorities.',map:[225,218],source:51},
    {id:'tarpon-ridge',code:'TRM',name:'Tarpon Ridge Middle School',short:'Tarpon Ridge MS',type:'Middle',grades:'6–8',built:1998,renovation:'2016',area:158300,enrollment:1260,flood:'X',shelter:true,crv:70.4,current:.1,fci:.2,rating:'Good',renewal:20.9,renewalRatio:30,eui:56.7,kwh:16.6,utilityCost:2.31,quadrant:'Optimize',path:'Retro-commission now; renew equipment on schedule.',summary:'The best condition in the portfolio, but elevated energy use. The report identifies controls overrides and extended operating hours. A $124,000 retro-commissioning scope has estimated savings of $35,000 a year.',map:[392,285],source:51},
    {id:'mangrove-bay-high',code:'MBH',name:'Mangrove Bay High School',short:'Mangrove Bay HS',type:'High',grades:'9–12',built:1958,renovation:'1994',area:312600,enrollment:2150,flood:'AE',shelter:false,crv:159.4,current:22.6,fci:14.2,rating:'Poor',renewal:61.7,renewalRatio:39,eui:60.6,kwh:16.5,utilityCost:2.33,quadrant:'Renew & retrofit',path:'Coordinate major plant, piping and envelope renewals.',summary:'The largest current backlog in the assessed portfolio. Central plant equipment, original 1958 piping, elevators and roofs require a coordinated capital program with efficiency built into the renewal scope.',map:[220,345],source:51},
    {id:'westshore',code:'WSH',name:'Westshore High School',short:'Westshore HS',type:'High',grades:'9–12',built:1979,renovation:'2003',area:286400,enrollment:1890,flood:'VE / AE',shelter:false,crv:146.1,current:9.9,fci:6.8,rating:'Fair',renewal:49.5,renewalRatio:34,eui:42.6,kwh:11.6,utilityCost:1.71,quadrant:'Capital renewal',path:'Address flood exposure alongside envelope renewal.',summary:'Fair FCI understates the flood risk. The report calls for electrical relocation or elevation out of the Zone VE portion of the site, together with repairs to the weather-exposed building envelope.',map:[115,285],source:51},
    {id:'operations-center',code:'DOC',name:'District Operations & Transportation Center',short:'Operations Center',type:'Support',grades:'—',built:1984,renovation:'—',area:48600,enrollment:null,flood:'X',shelter:false,crv:15.6,current:1.9,fci:12.0,rating:'Poor',renewal:7.6,renewalRatio:49,eui:32.5,kwh:9.5,utilityCost:1.54,quadrant:'Capital renewal',path:'Protect support operations; plan concentrated renewals.',summary:'A support facility with substantial renewals ahead. Corroded metal-roof fasteners and uplift at the eaves create a near-term priority. Its ten-year renewal need approaches half of replacement value.',map:[332,390],source:51}
  ],
  decisions: [
    {title:'Fund immediate stabilization',amount:'$7.2M',description:'Approve the eight Priority 1 findings, including failed cooling equipment, elevator work and safety corrections.',owner:'Board · CFO recommendation',target:'Next regular meeting',route:'action?priority=1'},
    {title:'Stabilize Coral Key. Then decide.',amount:'$1.2M',description:'Authorize the replace-versus-renovate study. Hold $6.2M of renewal scope until the study is complete; study fee is not priced.',owner:'Board',target:'Within 30 days',route:'sites/coral-key'},
    {title:'Validate the efficiency opportunity',amount:'$600K + $124K',description:'Authorize the investment-grade audit and fund Tarpon Ridge retro-commissioning. Audit cost is rolled into an executed contract; otherwise it is owed separately.',owner:'Board · Facilities',target:'Within 30 days',route:'funding'},
    {title:'Bring back a district-wide funding plan',amount:'FY27–FY28',description:'Return with the funding package and a Phase 2 assessment scope for the remaining 33 facilities.',owner:'Superintendent · CFO',target:'Within 90 days',route:'capital'}
  ],
  takeaways: [
    ['The average hides a concentrated problem.','Four of eight facilities rate Poor. Mangrove Bay High School, Westshore High School and Coral Key Elementary carry approximately 75% of current needs.'],
    ['The near-term load is front-loaded.','FY27 and FY28 account for $88.9M, or 43% of the ten-year need. Renewals average $17.3M a year after FY27 for these eight sites alone.'],
    ['About half of current needs are deficiency-driven.','Priority 1 and 2 findings total $26.9M. The remaining current needs are age-based renewals; do not add the findings total to the capital forecast.'],
    ['HVAC and envelope drive 54% of renewal need.','These systems account for $112.7M and also influence humidity control, occupant comfort and hurricane performance.'],
    ['Coral Key needs a deliberate decision.','Its 25.3% FCI, 1962 layout and flood exposure justify a study, not an automatic replacement decision. Compare both paths over 30 years.'],
    ['Condition and energy tell different stories.','Tarpon Ridge has a 0.2% FCI but a 56.7 site EUI. Investigate controls, scheduling and operation before replacing sound equipment.'],
    ['A performance contract is a delivery tool, not a funding source.','The $19.8M package still requires $16.3M of capital. Savings support about $3.5M of financing, rather than paying for the district’s underlying renewal need.']
  ],
  // Every item below is explicitly included in the supplied PDF. No missing workbook findings are invented.
  findings: [
    ['CKE-01','coral-key',1,'HVAC','Three rooftop units failing from coil corrosion','Replace 3 of 14 rooftop units, approximately 33 of 155 tons.',189000,'FY27',38,false],
    ['CKE-02','coral-key',1,'HVAC','Excess classroom temperature and humidity','Add approximately 3,000 cfm of dedicated outdoor-air dehumidification to the 100-wing.',151000,'FY27',38,false],
    ['CKE-07','coral-key',1,'Accessibility','Accessible route requires correction','Regrade and replace the affected sidewalk segment; provide detectable warnings.',49000,'FY27',38,false],
    ['CKE-08','coral-key',1,'Fire protection','Painted sprinkler heads and overdue inspection','Replace painted heads and complete the internal pipe inspection.',16000,'FY27',38,false],
    ['PPE-01','pelican-point',1,'HVAC','Nine rooftop units with corrosion and refrigerant leaks','Replace 9 of 22 rooftop units.',529000,'FY27',38,false],
    ['BMS-01','bayside',1,'HVAC','School operating without chiller redundancy','Renew the failed chiller component.',1828000,'FY27',38,false],
    ['MBH-01','mangrove-bay-high',1,'HVAC','Central plant near failure; tower basin leaking','Renew the central plant component.',3999000,'FY27',38,false],
    ['MBH-03','mangrove-bay-high',1,'Conveying','Repeated elevator outages and hydraulic leak','Modernize the elevator component.',481000,'FY27',38,false],
    ['CKE-03','coral-key',2,'Envelope','Original windows with failed seals and water intrusion','Replace the 100/200-wing glazing; approximately 75% of the site glazing.',859000,'FY27–FY28',39,true],
    ['CKE-04','coral-key',2,'Roofing','End-of-life roof with ponding and recurring leaks','Full roof renewal, subject to the Coral Key study.',2367000,'FY27–FY28',39,true],
    ['CKE-05','coral-key',2,'Plumbing','Low pressure and discolored domestic water','Replace galvanized domestic-water distribution.',598000,'FY27–FY28',39,false],
    ['PPE-02','pelican-point',2,'Electrical','Shelter generator cannot carry full shelter HVAC','Upsize the shelter generator.',525000,'FY27–FY28',39,false],
    ['HCE-01','heron-creek',2,'HVAC','Aging air-cooled chillers with coil corrosion','Renew the air-cooled chiller component.',1101000,'FY27–FY28',39,false],
    ['BMS-02','bayside',2,'Envelope','Original non-impact windows','Renew the exterior window component.',2870000,'FY27–FY28',39,false],
    ['BMS-03','bayside',2,'Sitework','Courtyard drainage backs up during tides and rain','Repair storm drainage and clear storm-surge debris from inlets.',189000,'FY27–FY28',39,false],
    ['TRM-01','tarpon-ridge',2,'HVAC','Controls overrides and excessive after-hours runtime','Retro-commission the system, including failed economizer-damper repairs.',124000,'FY27',39,false],
    ['MBH-02','mangrove-bay-high',2,'Plumbing','Original galvanized piping in A-building','Renew domestic-water piping.',2731000,'FY27–FY28',39,false],
    ['MBH-04','mangrove-bay-high',2,'Roofing','Campus roofs beyond service life with active leaks','Renew roof coverings; coordinate with gym deck repair.',3604000,'FY27–FY28',39,false],
    ['MBH-05','mangrove-bay-high',2,'Roofing','Gymnasium roof deck corrosion at drains','Repair affected deck, approximately 15% of the 18,000 sf gym roof.',70000,'FY27–FY28',40,false],
    ['WSH-01','westshore',2,'Envelope','Stucco cracking, sealant failure and salt-air spalling','Repair weather-exposed elevations and balconies.',897000,'FY27–FY28',40,false],
    ['WSH-02','westshore',2,'Resilience','Electrical infrastructure exposed to storm surge','Relocate or elevate critical electrical infrastructure out of the flood exposure.',2080000,'FY27–FY28',40,false],
    ['DOC-01','operations-center',2,'Roofing','Metal-roof fastener corrosion and uplift','Renew the metal roof component.',1638000,'FY27–FY28',40,false],
    ['CKE-06','coral-key',3,'Electrical','Obsolete switchboard and missing arc-flash labeling','Replace the switchboard and panelboards; complete an arc-flash study.',979000,'FY29',50,false],
    ['CKE-09','coral-key',4,'Electrical','LED tubes on aging fixtures without occupancy controls','Replace fixtures with networked controls at renewal or under the study outcome.',846000,'FY34',50,false]
  ].map(([id,site,priority,system,title,scope,cost,year,page,hold])=>({id,site,priority,system,title,scope,cost,year,page,hold,visibility:'internal'})),
  trends: {years:['FY22','FY23','FY24','FY25'],electricity:[17398300,17212700,16969300,16845300],electricCost:[1809420,2134360,2019360,1987750],gas:[31520,30970,30190,29920],gasCost:[51080,55130,44670,43390],water:[35130,35034,35210,34884],waterCost:[365350,378380,397870,411620],utility:[2225850,2567870,2461900,2442760],eui:[52.2,51.6,50.9,50.5]},
  savings: [['Mechanical',164,'#0879d5'],['Controls',113,'#6b72b1'],['Lighting',102,'#d397b8'],['Water',74,'#4f9b9a'],['Electrical',41,'#264b70'],['Envelope',9,'#a5abb3']],
  measures: [
    ['F1','Coastal-coated rooftop units',2.2,.3,21,'14.0','Included'],
    ['F2','Chiller plant replacement & optimization',10.6,1.4,143,'9.7','Included'],
    ['F3','Building automation with commissioning',4.3,.6,53,'10.6','Included'],
    ['F4','Retro-commissioning',.4,.4,54,'7.4','Partial'],
    ['F5','LED fixtures with networked controls',1.7,1.7,102,'16.9','Included'],
    ['F6','Roof replacement & insulation upgrade',16.8,2.2,4,'>50','Outside package'],
    ['F7','Impact-rated window replacement',9.4,1.2,6,'>50','Outside package'],
    ['F8','Water conservation',.9,.9,74,'12.6','Outside package'],
    ['F9','Rooftop solar at shelter sites',1.1,1.1,41,'26.6','Outside package'],
    ['F10','Monitoring-based commissioning',.1,.1,6,'12.3','Included']
  ],
  phases: [
    {name:'Stabilize & retrofit',years:'FY27–FY28',cost:88.9,detail:'Immediate findings, Tarpon Ridge commissioning, HVAC and controls renewals, critical roofs and flood-resilience work. Includes Coral Key renewal scope on hold.'},
    {name:'Complete the envelope',years:'FY29–FY31',cost:67.0,detail:'Remaining roofs and impact windows, electrical renewals and Tarpon Ridge air-handler replacement.'},
    {name:'Sustain',years:'FY32–FY36',cost:53.2,detail:'Interiors, plumbing, site work and subsequent HVAC renewals. Extend the planning horizon before the next cycle.'}
  ],
  publication: {overview:'public_candidate',capital:'public_candidate',sites:'public_candidate',energy:'public_candidate',action:'internal',funding:'review_required',about:'public_candidate'},
  sourceNotes: [
    'This is a fictional sample district and a fixed September 30, 2026 assessment snapshot.',
    'The website transcribes the supplied Rev. 3 PDF. The report’s companion workbook was not supplied; only Coral Key has a complete published site inventory.',
    'Published totals and FCI values are preserved. Displayed costs are rounded, so individual rows can differ slightly from totals.',
    'The 24 published findings include all eight Priority 1 findings, all fourteen Priority 2 findings and two additional Coral Key findings. They are not a complete district asset or deficiency register.',
    'Energy cost includes electricity and natural gas. Total utility cost also includes water and sewer. Per-site utility costs must be compared with $2.04/sf, not $1.70/sf.',
    'The annual model uses the two-decimal totals in Figure 12. Coral Key’s annual profile is derived from the published component inventory and repair items.',
    'The full report contains additional illustrative operational material. That material is not reproduced as a dashboard section.'
  ]
};
