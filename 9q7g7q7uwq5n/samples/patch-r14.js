const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* ============ A. Week 1 = Core Values; prebaked CONTENT week moves to Week 2 ============ */
rep(`  // one-time: put the real content week into Week 1, REPLACING any beginning-of-year placeholder, and land on it
  let landed="";
  if(!S._prebaked4 && window.PREBAKED && (window.PREBAKED.precal||window.PREBAKED.alg2)){
    try{
      const wk1=(typeof schoolWeeks==="function"&&schoolWeeks()[0])?schoolWeeks()[0].key:null;
      const pc=find("Pre-Calculus","Precalculus"), a2=find("Algebra II","Algebra II");
      const put=(co,wkData)=>{ if(!co||!wkData||!wkData.days||!wk1)return; S.plans[co.id]=S.plans[co.id]||{}; S.plans[co.id][wk1]={teks:wkData.teks||[],sped:wkData.sped||"",ell:wkData.ell||"",days:JSON.parse(JSON.stringify(wkData.days))}; };
      put(pc,window.PREBAKED.precal); put(a2,window.PREBAKED.alg2);
      if(pc&&wk1){ cur.courseId=pc.id; cur.weekKey=wk1; cur.day="Mon"; landed="day"; }
      S._prebaked4=1;
    }catch(e){}
  }`,
`  // one-time: Week 1 stays the CORE VALUES soft-start (generate it); the prebaked CONTENT week lives in Week 2
  let landed="";
  if(!S._prebaked5 && window.PREBAKED && (window.PREBAKED.precal||window.PREBAKED.alg2)){
    try{
      const wks=(typeof schoolWeeks==="function")?schoolWeeks():[];
      const wk1=wks[0]&&wks[0].key, wk2=wks[1]&&wks[1].key;
      const pc=find("Pre-Calculus","Precalculus"), a2=find("Algebra II","Algebra II");
      // migrate: clear the earlier seed's content week out of Week 1 (only if it IS that seeded content)
      const clr=(co,probe)=>{ if(!co||!wk1)return; const p=S.plans[co.id]&&S.plans[co.id][wk1];
        if(p&&p.days&&p.days.Mon&&String(p.days.Mon.objective||"").toLowerCase().includes(probe)) delete S.plans[co.id][wk1]; };
      clr(pc,"parent functions"); clr(a2,"vertex");
      const put=(co,wkData)=>{ if(!co||!wkData||!wkData.days||!wk2)return; S.plans[co.id]=S.plans[co.id]||{};
        if(!S.plans[co.id][wk2]) S.plans[co.id][wk2]={teks:wkData.teks||[],sped:wkData.sped||"",ell:wkData.ell||"",days:JSON.parse(JSON.stringify(wkData.days))}; };
      put(pc,window.PREBAKED.precal); put(a2,window.PREBAKED.alg2);
      if(pc&&wk1){ cur.courseId=pc.id; cur.weekKey=wk1; landed="week"; }
      S._prebaked5=1;
    }catch(e){}
  }`,"prebake -> Week 2; Week 1 core values");

/* ============ B. R9 — review day before tests + mid-week quiz check ============ */
rep(`Rules: Let a complex topic span several days. For NO SCHOOL days set objective to "No School for Students" and leave other fields empty/null.`,
`Rules: Let a complex topic span several days. REVIEW-BEFORE-TEST: if any day is marked 'School + <test/benchmark>' or this is the LAST week of the six-weeks, make the day before it a REVIEW day — no new content; the worksheet becomes spiral STATIONS over this grading period's TEKS (one section per major skill), and the exit ticket is 2 quiz-style items. MID-WEEK CHECK: on a normal content week, put one 8–10 min quiz-style check (3–4 problems, graded for mastery) in Wednesday's or Thursday's script and name it in that day's assessment. For NO SCHOOL days set objective to "No School for Students" and leave other fields empty/null.`,"R9 genWeek rules");

/* per-day "make review day" action (More ▾ menu) */
rep(`<button class="btn ghost sm" id="verify">Verify answer key</button><button class="btn ghost sm" id="lost">⚡ Lost time / drill</button></div></details>'`,
`<button class="btn ghost sm" id="verify">Verify answer key</button><button class="btn ghost sm" id="revday">📋 Make review day</button><button class="btn ghost sm" id="lost">⚡ Lost time / drill</button></div></details>'`,"review-day button");

fs.writeFileSync(F,src);
console.log("PATCH R14 part1: "+n+" edits");
