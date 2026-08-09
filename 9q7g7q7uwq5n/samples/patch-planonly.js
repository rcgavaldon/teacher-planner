const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label,count)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==(count||1)){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* 1. mode flag at core start */
rep(`async function _genWeekCore(co,wk,statusEl,extra=""){
  statusEl.innerHTML='<span class="spinner"></span> building the week in your template…';`,
`async function _genWeekCore(co,wk,statusEl,extra=""){
  const planOnly=!(S.settings&&S.settings.fullWeekGen);
  statusEl.innerHTML='<span class="spinner"></span> building the '+(planOnly?'week plan (fast)':'full week')+' in your template…';`,
"planOnly flag");

/* 2. prompt: plan-only instruction */
rep("Rules: Let a complex topic span several days.",
`\${planOnly?"MODE — PLAN-ONLY SKELETON (default): this pass writes ONLY the weekly lesson plan. For each day fill type, objective, bellRinger, agenda, assessment, and the minute-by-minute script — and set notes, guidedNotes, video, videoPlacement, presentation, procedureExamples, worksheet, vocab, exitTicket, answerKey, extension, and drawing to null. Keep the exact same JSON shape. The teacher generates each day's materials one day at a time afterward. ":""}Rules: Let a complex topic span several days.`,
"plan-only prompt line");

/* 3. token budget by mode */
rep("const txt=await callClaude({max_tokens:16000,","const txt=await callClaude({max_tokens:planOnly?8000:16000,","budget by mode");

/* 4. plan-only merge — never wipe existing materials on unlocked days */
rep(`      const kept=[];WD.forEach(d=>{if(prev.days&&prev.days[d]&&prev.days[d].locked){data.days[d]=prev.days[d];kept.push(d);}});
      if(kept.length)setTimeout(()=>toast("Kept locked day(s): "+kept.join(", ")),600);`,
`      const kept=[];WD.forEach(d=>{if(prev.days&&prev.days[d]&&prev.days[d].locked){data.days[d]=prev.days[d];kept.push(d);}});
      if(planOnly){ // re-planning must not destroy materials you already have — overlay plan fields only
        const PLANF=["type","objective","bellRinger","agenda","assessment","script","hook"];
        WD.forEach(d=>{const od=prev.days&&prev.days[d],nd=data.days[d];
          if(od&&nd&&!od.locked&&(od.worksheet||od.notes||od.guidedNotes)){
            const merged=JSON.parse(JSON.stringify(od));
            PLANF.forEach(k=>{if(nd[k]!==undefined&&nd[k]!==null)merged[k]=nd[k];});
            data.days[d]=merged;
          }});
      }
      if(kept.length)setTimeout(()=>toast("Kept locked day(s): "+kept.join(", ")),600);`,
"plan-only preserves materials");

/* 5. finish toast by mode */
rep(`S.plans[co.id][wk.key]=data;save();render();toast("Week generated — plan + all 5 days");`,
`S.plans[co.id][wk.key]=data;save();render();toast(planOnly?"Week plan ready — open each day and hit ✨ Generate materials":"Week generated — plan + all 5 days");`,
"finish toast");

/* 6. Week tab: checkbox + button label */
rep('<button class="btn" id="gen">${S.plans[co.id]?.[wk.key]?"Regenerate week":"Generate week"}</button>',
`<label class="pchip \${S.settings.fullWeekGen?'on':''}" style="margin:0"><input type="checkbox" id="fullwk" \${S.settings.fullWeekGen?"checked":""}> full week + materials <span class="psum">slow · 3–6 min</span></label>
    <button class="btn" id="gen">\${S.plans[co.id]?.[wk.key]?"Regenerate":"Generate"} \${S.settings.fullWeekGen?"full week":"week plan"}</button>`,
"week tab checkbox");
rep(`$("#wsel",sel).onchange=e=>{cur.weekKey=e.target.value;render();};`,
`$("#wsel",sel).onchange=e=>{cur.weekKey=e.target.value;render();};
  {const fw=$("#fullwk",sel); if(fw)fw.onchange=e=>{S.settings.fullWeekGen=e.target.checked;save();render();};}`,
"wire checkbox");

/* 7. cost card reflects the new default flow */
rep('const OP_TOKENS=[["Generate a week (plan + all 5 days)",14,8],',
    'const OP_TOKENS=[["Week PLAN only (default — no materials)",7,4],["Full week + all materials (checkbox)",14,10],',"cost rows");
rep("  const week=(14*p[0]+8*p[1])/1000, day=(8*p[0]+5*p[1])/1000, test=(8*p[0]+6*p[1])/1000, reb=(9*p[0]+6.5*p[1])/1000;\n  const yr=36*week+60*day+48*test+25*reb;",
"  const wkp=(7*p[0]+4*p[1])/1000, day=(8*p[0]+5*p[1])/1000, test=(8*p[0]+6*p[1])/1000, reb=(9*p[0]+6.5*p[1])/1000;\n  const yr=36*wkp+190*day+48*test+25*reb;","cost year calc");
rep("Typical full year (36 weeks + ~60 day tweaks + ~48 quizzes/tests + ~25 rebuilds):",
    "Typical full year (36 week plans + ~190 day generations + ~48 quizzes/tests + ~25 rebuilds):","cost year label");

fs.writeFileSync(F,src);
console.log("\\nPLAN-ONLY: "+n+" edits applied");
