const fs=require("fs"),path=require("path"),vm=require("vm");
const ROOT=path.join(__dirname,"..");

/* Real Texas A&P (§130.206-style) scope: knowledge-and-skills strands with representative expectations.
   Verify against teks.texasgateway.org before OFFICIAL use (dataset already carries this disclaimer). */
const STRANDS=[
 ["AP.1","Scientific and laboratory practices: safe lab conduct, tools, measurement, and analyzing data",[
   ["AP.1A","demonstrate safe practices and proper use of anatomy/physiology lab equipment and PPE"],
   ["AP.1B","collect, graph, and analyze data to investigate a physiological question"]]],
 ["AP.2","Professional standards and health-science careers",[
   ["AP.2A","describe careers that require anatomy and physiology and the ethics/confidentiality expected"]]],
 ["AP.3","Body organization, homeostasis, and anatomical terminology",[
   ["AP.3A","sequence the levels of organization: chemical, cellular, tissue, organ, organ system, organism"],
   ["AP.3B","use anatomical position, directional terms, planes, and body cavities"],
   ["AP.3C","explain homeostasis and analyze negative- and positive-feedback mechanisms"]]],
 ["AP.4","Biochemistry, cells, and tissues",[
   ["AP.4A","relate the four major biomolecules and cell organelles to their functions"],
   ["AP.4B","identify the four primary tissue types and where each is found"]]],
 ["AP.5","Integumentary system",[
   ["AP.5A","relate the structures of the skin to protection, temperature regulation, and sensation"]]],
 ["AP.6","Skeletal system and joints",[
   ["AP.6A","identify major bones and describe bone structure, growth, and joint types/movements"]]],
 ["AP.7","Muscular system",[
   ["AP.7A","describe the structure of skeletal muscle and the sliding-filament model of contraction"],
   ["AP.7B","identify major muscles and the actions they produce"]]],
 ["AP.8","Nervous system",[
   ["AP.8A","describe neuron structure and the events of a nerve impulse and synapse"],
   ["AP.8B","relate the divisions of the central and peripheral nervous systems to their functions"]]],
 ["AP.9","Special senses",[
   ["AP.9A","relate the structures of the eye and ear to vision and hearing"]]],
 ["AP.10","Endocrine system",[
   ["AP.10A","relate major endocrine glands and their hormones to the processes they regulate via feedback"]]],
 ["AP.11","Cardiovascular system: blood, heart, and vessels",[
   ["AP.11A","describe blood components and their functions and analyze ABO/Rh blood typing"],
   ["AP.11B","trace blood flow through the heart, pulmonary, and systemic circuits"]]],
 ["AP.12","Lymphatic and immune system",[
   ["AP.12A","describe lymphatic structures and distinguish innate from adaptive immunity"]]],
 ["AP.13","Respiratory system",[
   ["AP.13A","relate respiratory structures to gas exchange and the mechanics of breathing"]]],
 ["AP.14","Digestive system and nutrition",[
   ["AP.14A","trace the path of food and relate digestive organs to mechanical/chemical digestion and absorption"]]],
 ["AP.15","Urinary system and fluid/electrolyte balance",[
   ["AP.15A","relate nephron structure to filtration, reabsorption, and secretion, and to fluid/electrolyte balance"]]],
 ["AP.16","Reproductive system and development",[
   ["AP.16A","relate male and female reproductive structures to their functions and describe fertilization and development"]]]
];
/* 13 teaching units mapped to those strand codes */
const UNITS=[
 {unit:"Intro to A&P: organization, homeostasis & anatomical terms",weeks:2,sixWeeks:1,teks:"AP.3"},
 {unit:"Biochemistry, cells & tissues",weeks:3,sixWeeks:1,teks:"AP.4"},
 {unit:"Integumentary system (skin)",weeks:2,sixWeeks:2,teks:"AP.5"},
 {unit:"Skeletal system & joints",weeks:3,sixWeeks:2,teks:"AP.6"},
 {unit:"Muscular system",weeks:3,sixWeeks:3,teks:"AP.7"},
 {unit:"Nervous system & the special senses",weeks:4,sixWeeks:3,teks:"AP.8,AP.9"},
 {unit:"Endocrine system",weeks:2,sixWeeks:4,teks:"AP.10"},
 {unit:"Cardiovascular system: blood & the heart",weeks:4,sixWeeks:4,teks:"AP.11"},
 {unit:"Lymphatic & immune system",weeks:2,sixWeeks:5,teks:"AP.12"},
 {unit:"Respiratory system",weeks:3,sixWeeks:5,teks:"AP.13"},
 {unit:"Digestive system & nutrition",weeks:3,sixWeeks:6,teks:"AP.14"},
 {unit:"Urinary system & fluid/electrolyte balance",weeks:2,sixWeeks:6,teks:"AP.15"},
 {unit:"Reproductive system & capstone project",weeks:3,sixWeeks:6,teks:"AP.16"}
];

/* rebuild the A&P course object with full strands+expectations */
const course={course:"Anatomy & Physiology",hasStaarEOC:false,
 completeness:"District-style full-year Anatomy & Physiology scope aligned to the Texas A&P course (§130.206). Strand and expectation wording is representative — verify against teks.texasgateway.org before official use.",
 strands:STRANDS.map(s=>({code:s[0],statement:s[1],expectations:(s[2]||[]).map(e=>({code:e[0],text:e[1]}))})),
 sequence:UNITS.map(u=>({unit:u.unit,weeks:u.weeks}))};

let tk=fs.readFileSync(path.join(ROOT,"teks-data.js"),"utf8");
const start=tk.indexOf('"courses":[')+'"courses":['.length;
const orig=tk.indexOf('{"course":"Algebra I"',start);      // original first course; strip anything before it (our old A&P)
if(orig<0){console.log("Algebra I anchor missing");process.exit(1);}
tk=tk.slice(0,start)+JSON.stringify(course)+","+tk.slice(orig);
fs.writeFileSync(path.join(ROOT,"teks-data.js"),tk);
console.log("teks-data.js: A&P course upgraded to strands+expectations");

/* update pacing codes */
let pd=fs.readFileSync(path.join(ROOT,"pacing-data.js"),"utf8");
const pl=JSON.parse(pd.match(/=\s*(\{[\s\S]*\})\s*;?\s*$/)[1]);
pl["Anatomy & Physiology"]={notes:"Full-year A&P body-systems sequence (aligned to the Texas A&P course)",pacing:UNITS};
fs.writeFileSync(path.join(ROOT,"pacing-data.js"),"window.PACING_LOCAL="+JSON.stringify(pl,null,1)+";\n");
console.log("pacing-data.js: A&P codes aligned to strands");

/* verify build + coverage keys */
const W={};vm.runInNewContext(tk,{window:W});vm.runInNewContext(fs.readFileSync(path.join(ROOT,"pacing-data.js"),"utf8"),{window:W});
const ap=W.TEKS_FULL.courses.find(c=>c.course==="Anatomy & Physiology");
const exp=ap.strands.reduce((a,s)=>a+(s.expectations||[]).length,0);
console.log("verify — strands:",ap.strands.length,"| expectations:",exp,"| one appears twice?",W.TEKS_FULL.courses.filter(c=>c.course==="Anatomy & Physiology").length);
