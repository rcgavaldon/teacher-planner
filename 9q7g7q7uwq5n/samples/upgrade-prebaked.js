const fs=require("fs"),path=require("path");
const ROOT=path.join(__dirname,"..");
const decks=JSON.parse(fs.readFileSync(path.join(__dirname,"decks-upgrade.json"),"utf8"));
const src=fs.readFileSync(path.join(ROOT,"prebaked-weeks.js"),"utf8");
const data=eval("("+src.match(/window\.PREBAKED\s*=\s*([\s\S]*?);?\s*$/)[1]+")");

/* ---- 1. numeric self-check: every mark must sit on its curve ---- */
const F={parabola:s=>x=>s.a*x*x+(s.b||0)*x+(s.c||0),
  cubic:s=>x=>s.a*x*x*x+(s.b||0)*x*x+(s.c||0)*x+(s.d||0),
  abs:s=>x=>(s.a||1)*Math.abs(x-(s.h||0))+(s.k||0),
  sqrt:s=>x=>(x-(s.h||0))>=0?(s.a||1)*Math.sqrt(x-(s.h||0))+(s.k||0):NaN};
let bad=0,checked=0;
for(const ck of Object.keys(decks)) for(const day of Object.keys(decks[ck]))
  for(const s of decks[ck][day].slides){
    const g=s.graph; if(!g||!g.marks) continue;
    const f=F[g.kind]; if(!f) continue;
    for(const mk of g.marks){ checked++;
      const y=f(g)(mk.x);
      if(!(Math.abs(y-mk.y)<1e-6)){bad++;console.log("MARK OFF-CURVE",ck,day,s.heading,JSON.stringify(mk),"curve gives",y);} }
  }
console.log("mark checks:",checked,"bad:",bad);
if(bad){console.log("ABORT — fix marks first");process.exit(1);}

/* ---- 2. merge decks; strip meme fields everywhere ---- */
let replaced=0;
for(const ck of Object.keys(decks)) for(const day of Object.keys(decks[ck])){
  const m=data[ck]&&data[ck].days&&data[ck].days[day];
  if(!m){console.log("MISSING DAY",ck,day);process.exit(1);}
  const old=m.presentation||{};
  m.presentation={kind:decks[ck][day].kind,title:old.title||"",slides:decks[ck][day].slides};
  replaced++;
}
const strip=o=>{if(Array.isArray(o))o.forEach(strip);else if(o&&typeof o==="object"){delete o.meme;Object.values(o).forEach(strip);}};
strip(data);
console.log("decks replaced:",replaced,"| memes stripped:",!JSON.stringify(data).includes('"meme"'));

/* ---- 3. write prebaked-weeks.js ---- */
fs.writeFileSync(path.join(ROOT,"prebaked-weeks.js"),
  "/* Prebaked Week-1 content — Pre-Calculus + Algebra II. Typed slide decks + drawn-graph specs (design standard). */\n"
  +"window.PREBAKED="+JSON.stringify(data,null,1)+";\n");
console.log("prebaked-weeks.js written:",fs.statSync(path.join(ROOT,"prebaked-weeks.js")).size,"bytes");

/* ---- 4. bump seed flag so the app force-loads the upgraded week ---- */
let idx=fs.readFileSync(path.join(ROOT,"index.html"),"utf8");
const n=idx.split("_prebaked2").length-1;
if(n){idx=idx.split("_prebaked2").join("_prebaked3");fs.writeFileSync(path.join(ROOT,"index.html"),idx);}
console.log("seed flag bumped (_prebaked2→_prebaked3):",n,"occurrence(s)");
