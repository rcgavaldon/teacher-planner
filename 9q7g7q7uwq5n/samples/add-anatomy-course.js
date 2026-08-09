const fs=require("fs"),path=require("path");
const ROOT=path.join(__dirname,"..");

/* A&P body-systems scope — 13 units across the 6 six-weeks (~36 wk) */
const UNITS=[
 {unit:"Intro to A&P: organization, homeostasis & anatomical terms",weeks:2,sixWeeks:1,teks:"AP.1"},
 {unit:"Biochemistry, cells & tissues",weeks:3,sixWeeks:1,teks:"AP.2"},
 {unit:"Integumentary system (skin)",weeks:2,sixWeeks:2,teks:"AP.3"},
 {unit:"Skeletal system & joints",weeks:3,sixWeeks:2,teks:"AP.4"},
 {unit:"Muscular system",weeks:3,sixWeeks:3,teks:"AP.5"},
 {unit:"Nervous system & the special senses",weeks:4,sixWeeks:3,teks:"AP.6"},
 {unit:"Endocrine system",weeks:2,sixWeeks:4,teks:"AP.7"},
 {unit:"Cardiovascular system: blood & the heart",weeks:4,sixWeeks:4,teks:"AP.8"},
 {unit:"Lymphatic & immune system",weeks:2,sixWeeks:5,teks:"AP.9"},
 {unit:"Respiratory system",weeks:3,sixWeeks:5,teks:"AP.10"},
 {unit:"Digestive system & nutrition",weeks:3,sixWeeks:6,teks:"AP.11"},
 {unit:"Urinary system & fluid/electrolyte balance",weeks:2,sixWeeks:6,teks:"AP.12"},
 {unit:"Reproductive system & capstone project",weeks:3,sixWeeks:6,teks:"AP.13"}
];
const STRANDS=[
 ["AP.1","Body organization, homeostasis & anatomical terminology"],
 ["AP.2","Biochemistry, cells, and tissues"],
 ["AP.3","Integumentary system: structure and function"],
 ["AP.4","Skeletal system and joints"],
 ["AP.5","Muscular system"],
 ["AP.6","Nervous system and special senses"],
 ["AP.7","Endocrine system"],
 ["AP.8","Cardiovascular system: blood, heart, and vessels"],
 ["AP.9","Lymphatic and immune system"],
 ["AP.10","Respiratory system"],
 ["AP.11","Digestive system and nutrition"],
 ["AP.12","Urinary system and fluid/electrolyte balance"],
 ["AP.13","Reproductive system"]
];

/* 1. inject the course into teks-data.js (picker + coverage strands + PACING via sequence) */
let tk=fs.readFileSync(path.join(ROOT,"teks-data.js"),"utf8");
if(tk.indexOf('"course":"Anatomy & Physiology"')<0){
  const course={course:"Anatomy & Physiology",hasStaarEOC:false,
    completeness:"Body-systems scope/sequence for a full-year Anatomy & Physiology course (no state A&P TEKS in this dataset; strands are the 13 body systems).",
    strands:STRANDS.map(s=>({code:s[0],statement:s[1]})),
    sequence:UNITS.map(u=>({unit:u.unit,weeks:u.weeks}))};
  const anchor='"courses":[';
  const i=tk.indexOf(anchor);
  if(i<0){console.log("TEKS anchor missing");process.exit(1);}
  tk=tk.slice(0,i+anchor.length)+JSON.stringify(course)+","+tk.slice(i+anchor.length);
  fs.writeFileSync(path.join(ROOT,"teks-data.js"),tk);
  console.log("teks-data.js: A&P course injected");
}else console.log("teks-data.js: A&P already present");

/* 2. add PACING_LOCAL entry (clean six-weeks roadmap + syllabus + coverage-planned) */
let pd=fs.readFileSync(path.join(ROOT,"pacing-data.js"),"utf8");
const pl=JSON.parse(pd.match(/=\s*(\{[\s\S]*\})\s*;?\s*$/)[1]);
if(!pl["Anatomy & Physiology"]){
  pl["Anatomy & Physiology"]={notes:"Full-year A&P body-systems sequence",pacing:UNITS};
  fs.writeFileSync(path.join(ROOT,"pacing-data.js"),"window.PACING_LOCAL="+JSON.stringify(pl,null,1)+";\n");
  console.log("pacing-data.js: A&P PACING_LOCAL added");
}else console.log("pacing-data.js: A&P already present");

/* 3. verify the app would build it (mirror the override loop) */
const vm=require("vm");
const W={};vm.runInNewContext(fs.readFileSync(path.join(ROOT,"teks-data.js"),"utf8"),{window:W});
vm.runInNewContext(fs.readFileSync(path.join(ROOT,"pacing-data.js"),"utf8"),{window:W});
const ap=(W.TEKS_FULL.courses||[]).find(c=>c.course==="Anatomy & Physiology");
console.log("\nverify — TEKS_FULL has A&P:",!!ap,"| strands:",ap.strands.length,"| sequence units:",ap.sequence.length);
console.log("verify — PACING_LOCAL A&P units:",W.PACING_LOCAL["Anatomy & Physiology"].pacing.length,"| total weeks:",UNITS.reduce((a,u)=>a+u.weeks,0));
