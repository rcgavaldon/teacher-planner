const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label,count)=>{const c=src.split(from).length-1;if(c!==(count||1)){console.log("ASSERT FAIL ("+c+"x, wanted "+(count||1)+"): "+label);process.exit(1);}src=src.split(from).join(to);n++;console.log("ok:",label);};

/* ============ 1. AUTO-LOCK past days (once each; manual unlock sticks) ============ */
rep(`window.addEventListener("DOMContentLoaded",()=>{ const added=seedCourses(); if(added) tab="courses"; else if(!S.settings.apiKey) tab="setup"; render(); });`,
`function autoLockPastDays(){
  let locked=0; const today=iso(new Date()); let wk;
  try{wk=schoolWeeks();}catch(e){return 0;}
  for(const co of S.courses){ const plans=S.plans[co.id]||{};
    for(const w of wk){ const p=plans[w.key]; if(!p||!p.days) continue;
      for(const d of (w.days||[])){ const dd=p.days[d.day];
        if(dd&&dd.objective&&dd.objective!=="No School for Students"&&d.iso<today&&!dd.locked&&!dd.autoLocked){ dd.locked=true; dd.autoLocked=true; locked++; } } } }
  if(locked) save(); return locked;
}
window.addEventListener("DOMContentLoaded",()=>{ const added=seedCourses(); const al=autoLockPastDays(); if(added) tab="courses"; else if(!S.settings.apiKey) tab="setup"; render(); if(al) setTimeout(()=>toast("🔒 Auto-locked "+al+" past day"+(al>1?"s":"")+" — history is safe from regeneration"),600); });`,
"auto-lock past days");

/* ============ 2. CLASS TIMER (design-standard fullscreen countdown) ============ */
rep("/* ---- guided notes as HTML: cloze blanks (student) or blue key (teacher) ---- */",
`/* ---- fullscreen class timer (tests, quizzes, exit tickets) ---- */
function showTimer(minutes,label){
  minutes=Math.max(1,Math.round(+minutes||10));
  let total=minutes*60, left=total, running=false, iv=null;
  const ov=el('<div class="deckshow" id="classTimer"><div class="deckbar"><div class="f" style="width:100%"></div></div>'
    +'<div class="deckstage" style="flex-direction:column;gap:10px">'
    +'<div style="font-family:var(--dk-mono,ui-monospace);font-size:14px;letter-spacing:.18em;text-transform:uppercase;color:#A9B0FF">'+esc(label||"Class timer")+'</div>'
    +'<div id="tmDigits" style="font-family:ui-monospace,Consolas,monospace;font-weight:700;font-size:min(26vw,240px);line-height:1;color:#fff;font-variant-numeric:tabular-nums"></div>'
    +'<div style="font-family:ui-monospace,Consolas,monospace;font-size:13px;color:#8E96C4" id="tmSub"></div></div>'
    +'<div class="deckfoot"><span class="dtitle">'+minutes+' min</span><span class="decknav">'
    +'<button class="deckbtn" id="tmMinus">−1 min</button><button class="deckbtn" id="tmPlus">+1 min</button>'
    +'<button class="deckbtn primary" id="tmGo">▶ Start</button><button class="deckbtn" id="tmReset">Reset</button>'
    +'<button class="deckbtn" id="tmClose">Close ✕</button></span></div></div>');
  document.body.appendChild(ov);
  const beep=()=>{try{const ac=new (window.AudioContext||window.webkitAudioContext)();[0,.35,.7].forEach(t=>{const o=ac.createOscillator(),g=ac.createGain();o.type="sine";o.frequency.value=880;o.connect(g);g.connect(ac.destination);g.gain.setValueAtTime(.001,ac.currentTime+t);g.gain.exponentialRampToValueAtTime(.4,ac.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+t+.3);o.start(ac.currentTime+t);o.stop(ac.currentTime+t+.32);});}catch(e){}};
  const draw=()=>{const m=Math.floor(left/60),s=left%60;
    const dg=ov.querySelector("#tmDigits"); dg.textContent=m+":"+String(s).padStart(2,"0");
    dg.style.color = left<=0? "#FF8FA6" : left<=60? "#E7B449" : "#fff";
    ov.querySelector(".deckbar .f").style.width=Math.max(0,left/total*100)+"%";
    ov.querySelector(".deckbar .f").style.background = left<=60? "linear-gradient(90deg,#E7B449,#AF1235)" : "linear-gradient(90deg,var(--dk-indigo,#383CC1),var(--dk-gold,#E7B449))";
    ov.querySelector("#tmSub").textContent = left<=0? "TIME — pencils down" : running? "" : "paused";};
  const tick=()=>{left--; if(left<=0){left=0;clearInterval(iv);iv=null;running=false;beep();ov.querySelector("#tmGo").textContent="▶ Start";} draw();};
  const go=ov.querySelector("#tmGo");
  go.onclick=()=>{ if(running){clearInterval(iv);iv=null;running=false;go.textContent="▶ Resume";} else {if(left<=0)left=total;running=true;go.textContent="⏸ Pause";iv=setInterval(tick,1000);} draw(); };
  ov.querySelector("#tmPlus").onclick=()=>{left+=60;total=Math.max(total,left);draw();};
  ov.querySelector("#tmMinus").onclick=()=>{left=Math.max(0,left-60);draw();};
  ov.querySelector("#tmReset").onclick=()=>{left=total=minutes*60;draw();};
  const close=()=>{if(iv)clearInterval(iv);document.removeEventListener("keydown",key);ov.remove();};
  const key=e=>{if(e.key==="Escape")close();else if(e.key===" "){e.preventDefault();go.click();}};
  document.addEventListener("keydown",key);
  ov.querySelector("#tmClose").onclick=close;
  draw();
}
function suggestedTestMinutes(t){const items=(t.items||[]).length||10;const fr=(t.items||[]).filter(i=>i.type&&i.type!=="MC").length;return Math.min(45,Math.max(8,Math.round(items*2+fr*2)));}
/* ---- guided notes as HTML: cloze blanks (student) or blue key (teacher) ---- */`,
"class timer + suggested minutes");

/* wire timer into tests list rows */
rep(`  tests.forEach(t=>{const it=el(\`<div class="item"><div class="grow"><div class="t">\${esc(t.title||t.label)}</div><div class="m">\${(t.items||[]).length} items · TEKS \${esc((t.teks||[]).join(", "))}</div></div>
    <button class="btn ghost sm" data-open>Open</button><button class="btn ghost sm" data-del>✕</button></div>\`);
    it.querySelector('[data-open]').onclick=()=>{cur.testId=t.id;render();};`,
`  tests.forEach(t=>{const it=el(\`<div class="item"><div class="grow"><div class="t">\${esc(t.title||t.label)}</div><div class="m">\${(t.items||[]).length} items · TEKS \${esc((t.teks||[]).join(", "))} · ~\${suggestedTestMinutes(t)} min</div></div>
    <button class="btn ghost sm" data-time>⏱ \${suggestedTestMinutes(t)}m</button><button class="btn ghost sm" data-open>Open</button><button class="btn ghost sm" data-del>✕</button></div>\`);
    it.querySelector('[data-time]').onclick=()=>showTimer(suggestedTestMinutes(t),t.title||t.label);
    it.querySelector('[data-open]').onclick=()=>{cur.testId=t.id;render();};`,
"timer button on test rows");

/* ============ 3. VIDEO VERIFICATION (noembed, CORS-friendly) ============ */
rep("async function genPresentation(co,day){",
`async function verifyVideoUrl(url){
  if(!/youtube\\.com\\/watch|youtu\\.be\\//i.test(String(url||""))) return {ok:false,search:true};
  try{ const ctl=new AbortController(); const to=setTimeout(()=>ctl.abort(),8000);
    const r=await fetch("https://noembed.com/embed?url="+encodeURIComponent(url),{signal:ctl.signal});
    clearTimeout(to); if(!r.ok) return {ok:false};
    const j=await r.json(); if(j&&j.title&&!j.error) return {ok:true,title:j.title};
    return {ok:false};
  }catch(e){ return {ok:false,offline:true}; }
}
async function verifyDayVideos(co,dd,btn){
  const v=dd.video||{}; const targets=[["short",v.short],["long",v.long]].filter(x=>x[1]&&x[1].url);
  if(!targets.length){toast("No videos on this day");return;}
  if(btn)btn.textContent="checking…";
  let good=0,fixed=0,offline=false;
  for(const [k,item] of targets){
    const r=await verifyVideoUrl(item.url);
    if(r.ok){ item.verified=true; item.realTitle=r.title; good++; }
    else if(r.search){ item.verified=false; } // already a search link — teacher picks
    else if(r.offline){ offline=true; }
    else { item.verified=false; item.url="https://www.youtube.com/results?search_query="+encodeURIComponent((item.title||co.name)+" "+co.name); item.note=((item.note||"").replace(/ · link died.*$/,""))+" · link died — swapped to a search"; fixed++; }
  }
  save(); render();
  toast(offline?"Couldn't reach the verifier — try again online":("Videos: "+good+" verified ✓"+(fixed?", "+fixed+" dead link"+(fixed>1?"s":"")+" swapped to search":"")));
}
async function genPresentation(co,day){`,
"verifyVideoUrl + verifyDayVideos");

/* verify button + verified pill in the video block */
rep(`    const vrow=(label,item)=>{if(!item)return"";const L=ytLink(item,topic);return \`<div>\${label}\${item.note?\` (\${esc(item.note)})\`:""}: <a href="\${esc(L.url)}" target="_blank" rel="noopener">\${esc(item.title||'video')}</a> \${L.search?'<span class="pill gold">search — pick a video</span>':''}</div>\`;};
    out.appendChild(el(\`<div class="doc vidblock" id="videoDoc"><h3 style="margin-top:0">▶ Watch</h3>`,
`    const vrow=(label,item)=>{if(!item)return"";const L=ytLink(item,topic);return \`<div>\${label}\${item.note?\` (\${esc(item.note)})\`:""}: <a href="\${esc(L.url)}" target="_blank" rel="noopener">\${esc(item.title||'video')}</a> \${item.verified?'<span class="pill green">✓ verified</span>':(L.search?'<span class="pill gold">search — pick a video</span>':'<span class="pill">unverified</span>')}</div>\`;};
    out.appendChild(el(\`<div class="doc vidblock" id="videoDoc"><h3 style="margin-top:0">▶ Watch <button class="btn ghost sm no-print" id="vverify" style="float:right">Verify links</button></h3>`,
"video verify UI");
rep("  // NOTES\n  if(m.notes){out.appendChild(el(`<h3>Student notes</h3>`));",
`  {const vv=out.querySelector("#vverify"); if(vv) vv.onclick=()=>verifyDayVideos(co,m,vv);}
  // NOTES
  if(m.notes){out.appendChild(el(\`<h3>Student notes</h3>\`));`,"wire verify button");

/* ============ 4. COST ESTIMATES card (Setup, reacts to model select) ============ */
rep(`  $("#model").value=S.settings.model||"claude-sonnet-4-6";`,
`  $("#model").value=S.settings.model||"claude-sonnet-4-6";
  {const box=el('<div class="note" id="costNote" style="margin-top:8px"></div>');
   const sel=$("#model"); sel.parentElement.appendChild(box);
   const paint=()=>{box.innerHTML=costEstimateHtml(sel.value);};
   sel.addEventListener("change",paint); paint();}`,
"cost card mount");
rep("/* ---- fullscreen class timer (tests, quizzes, exit tickets) ---- */",
`/* ---- API cost estimates (per operation + typical year) ---- */
const PRICING={"claude-sonnet-4-6":[3,15],"claude-opus-4-8":[15,75],"claude-haiku-4-5":[1,5]};
const OP_TOKENS=[["Generate a week (plan + all 5 days)",14,8],["Regenerate one day's materials",8,5],["Presentation deck for a day",6,4.8],["Rebuild a day around YOUR worksheet",9,6.5],["Test / quiz (A + B versions)",8,6],["Independent answer-key check",4,3]];
function costEstimateHtml(model){
  const p=PRICING[model]||PRICING["claude-sonnet-4-6"];
  const rows=OP_TOKENS.map(o=>{const c=(o[1]*p[0]+o[2]*p[1])/1000;return "<tr><td>"+o[0]+"</td><td style='text-align:right'><b>$"+c.toFixed(2)+"</b></td></tr>";}).join("");
  const week=(14*p[0]+8*p[1])/1000, day=(8*p[0]+5*p[1])/1000, test=(8*p[0]+6*p[1])/1000, reb=(9*p[0]+6.5*p[1])/1000;
  const yr=36*week+60*day+48*test+25*reb;
  return "<b>💳 What generation costs ("+model.replace("claude-","")+")</b><table style='width:100%;font-size:12px;margin-top:4px'>"+rows+"</table>"
    +"<div style='margin-top:5px'>Typical full year (36 weeks + ~60 day tweaks + ~48 quizzes/tests + ~25 rebuilds): <b>≈ $"+Math.round(yr)+"</b>. Heavy use, double it.</div>";
}
/* ---- fullscreen class timer (tests, quizzes, exit tickets) ---- */`,
"cost estimator");

/* ============ 5. TEKS COVERAGE LEDGER (Year tab) ============ */
rep("function vYear(v){",
`function coverageLedger(co){
  const full=TEKS[co.teks]&&TEKS[co.teks].full;
  const codes = full ? (full.strands||[]).flatMap(s=>(s.expectations||[]).map(e=>({code:e.code,text:e.text,staar:e.staar})))
                     : ((TEKS[co.teks]&&TEKS[co.teks].strands)||[]).map(s=>({code:s[0],text:s[1]}));
  const L={}; codes.forEach(c=>L[c.code]={info:c,taught:[],practiced:[],assessed:[]});
  let wkList=[]; try{wkList=schoolWeeks();}catch(e){}
  const plans=S.plans[co.id]||{};
  for(const w of wkList){ const p=plans[w.key]; if(!p) continue; const wTeks=p.teks||[]; if(!wTeks.length) continue;
    const days=p.days||{}; const active=WD.filter(d=>days[d]&&days[d].objective&&days[d].objective!=="No School for Students");
    if(!active.length) continue;
    const match=code=>wTeks.some(t=>code===t||code.startsWith(t)||String(t).startsWith(code));
    for(const c of codes){ if(!match(c.code)) continue;
      L[c.code].taught.push(w.key);
      for(const d of active){ const m=days[d];
        const how = (m.useCk12&&m.ck12)?"CK-12":(m.customWorksheet?"your worksheet":((m.worksheet&&(m.worksheet.sections||[]).length)?"worksheet":null));
        if(how) L[c.code].practiced.push({week:w.key,day:d,how}); } } }
  Object.values(S.tests[co.id]||{}).forEach(t=>(t.items||[]).forEach(it=>{ const k=Object.keys(L).find(k=>k===it.teks||k.startsWith(it.teks||"~")||String(it.teks||"").startsWith(k));
    if(k){const nm=t.title||t.label||"test"; if(!L[k].assessed.includes(nm))L[k].assessed.push(nm);} }));
  // pacing = "planned later"
  const planned=new Set();
  const P=(window.PACING_LOCAL||{})[co.teks];
  if(P&&P.pacing) P.pacing.forEach(u=>String(u.teks||"").split(/[,;]\\s*/).forEach(t=>{if(t.trim())planned.add(t.trim());}));
  return {codes,L,planned};
}
function coverageCard(co){
  const {codes,L,planned}=coverageLedger(co);
  const N=codes.length||1;
  const taught=codes.filter(c=>L[c.code].taught.length);
  const practiced=codes.filter(c=>L[c.code].practiced.length);
  const assessed=codes.filter(c=>L[c.code].assessed.length);
  const gapNotScheduled=codes.filter(c=>!L[c.code].taught.length);
  const gapNoPractice=taught.filter(c=>!L[c.code].practiced.length);
  const gapNoAssess=practiced.filter(c=>!L[c.code].assessed.length);
  const bar=(lab,n,color)=>'<div style="margin:5px 0"><div style="display:flex;justify-content:space-between;font-size:12px"><b>'+lab+'</b><span>'+n+' / '+N+'</span></div><div style="height:8px;background:var(--clay-soft);border-radius:99px;overflow:hidden"><div style="height:100%;width:'+Math.round(n/N*100)+'%;background:'+color+'"></div></div></div>';
  const chips=arr=>arr.slice(0,40).map(c=>'<span class="pill" title="'+esc((c.info.text||"").slice(0,140))+'">'+esc(c.code)+(planned.has(c.code.split(".")[0])||planned.has(c.code)?" 🗓":"")+'</span>').join(" ")+(arr.length>40?" +"+(arr.length-40)+" more":"");
  const card=el('<div class="card"><h2>📋 TEKS coverage — live ledger</h2>'
    +'<p class="sub">Recomputed from the actual planned weeks every time you change anything — move a day, swap a worksheet, use CK-12, and this updates. Practice counts your worksheet OR the CK-12 lesson. 🗓 = sits in the pacing plan for later.</p>'
    +bar("Taught (scheduled in a week)",taught.length,"var(--clay)")
    +bar("Practiced (worksheet / CK-12 / yours)",practiced.length,"var(--green)")
    +bar("Assessed (on a quiz or test)",assessed.length,"var(--gold)")
    +(gapNotScheduled.length?'<details style="margin-top:8px"><summary style="cursor:pointer;font-weight:600;font-size:13px">❌ Not scheduled yet ('+gapNotScheduled.length+')</summary><div style="margin-top:6px;line-height:2">'+chips(gapNotScheduled)+'</div></details>':'<p class="sub" style="margin-top:8px">✅ Every expectation is scheduled.</p>')
    +(gapNoPractice.length?'<details><summary style="cursor:pointer;font-weight:600;font-size:13px">🟡 Taught but never practiced ('+gapNoPractice.length+')</summary><div style="margin-top:6px;line-height:2">'+chips(gapNoPractice)+'</div></details>':"")
    +(gapNoAssess.length?'<details><summary style="cursor:pointer;font-weight:600;font-size:13px">🟠 Practiced but never assessed ('+gapNoAssess.length+')</summary><div style="margin-top:6px;line-height:2">'+chips(gapNoAssess)+'</div></details>':"")
    +'</div>');
  return card;
}
function vYear(v){
  {const co0=S.courses.find(x=>x.id===cur.courseId); if(co0&&(Object.keys(S.plans[co0.id]||{}).length)) v.appendChild(coverageCard(co0));}`,
"coverage ledger + Year card");

fs.writeFileSync(F,src);
console.log("\\nPATCH A: "+n+" edits applied");
