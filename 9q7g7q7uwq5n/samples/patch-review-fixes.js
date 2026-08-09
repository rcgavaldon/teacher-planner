const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label,count)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==(count||1)){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* #1 TDZ — move GN_CSS app injection to AFTER the const */
rep(`(function(){try{var s=document.createElement("style");s.id="gncssApp";s.textContent=GN_CSS;document.head.appendChild(s);}catch(e){}})();
/* ---- fullscreen class timer (tests, quizzes, exit tickets) ---- */`,
`/* ---- fullscreen class timer (tests, quizzes, exit tickets) ---- */`,"remove TDZ-broken IIFE");
rep(`.gn-ans{margin:3px 0 0 18px}";`,
`.gn-ans{margin:3px 0 0 18px}";
(function(){try{var s=document.createElement("style");s.id="gncssApp";s.textContent=GN_CSS;document.head.appendChild(s);}catch(e){}})();`,"inject GN_CSS after declaration");

/* #2 KaTeX-render the fresh notes node before measuring/printing */
rep(`    if(p.comp.key==='notes'&&dd.guidedNotes){
      node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
      // measure at half-sheet width; auto-shrink to fit; 1-up if it would need <0.8`,
`    if(p.comp.key==='notes'&&dd.guidedNotes){
      node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
      mathRender(node); // KaTeX BEFORE measuring & printing — printNodes' iframe has no KaTeX JS
      // measure at half-sheet width; auto-shrink to fit; 1-up if it would need <0.8`,"mathRender printed notes");

/* #3 cloze regexes — balanced braces, last-pipe width split */
rep("str=str.replace(/\\{\\{([^|{}]*)(?:\\|([^{}]*))?\\}\\}/g,function(m,ans,w){",
    "str=str.replace(/\\{\\{((?:[^{}]|\\{[^{}]*\\})*?)(?:\\|([^{}|]*))?\\}\\}/g,function(m,ans,w){","gnLine balanced-brace cloze");
{const S1=String.fromCharCode(1);
 rep('str=str.replace(/\\{\\{([^}|]*)(?:\\|([^}]*))?\\}\\}/g,(m,a,w)=>{toks.push({a:a,w:w||"2cm"});return "'+S1+'"+(toks.length-1)+"'+S1+'";});',
     'str=str.replace(/\\{\\{((?:[^{}]|\\{[^{}]*\\})*?)(?:\\|([^{}|]*))?\\}\\}/g,(m,a,w)=>{toks.push({a:a,w:w||"2cm"});return "'+S1+'"+(toks.length-1)+"'+S1+'";});',"clozeToLatex balanced-brace cloze");}

/* #4 video verify — inconclusive on transient failure, keep original url */
rep(`  try{ const ctl=new AbortController(); const to=setTimeout(()=>ctl.abort(),8000);
    const r=await fetch("https://noembed.com/embed?url="+encodeURIComponent(url),{signal:ctl.signal});
    clearTimeout(to); if(!r.ok) return {ok:false};
    const j=await r.json(); if(j&&j.title&&!j.error) return {ok:true,title:j.title};
    return {ok:false};
  }catch(e){ return {ok:false,offline:true}; }`,
`  try{ const ctl=new AbortController(); const to=setTimeout(()=>ctl.abort(),8000);
    const r=await fetch("https://noembed.com/embed?url="+encodeURIComponent(url),{signal:ctl.signal});
    clearTimeout(to); if(!r.ok) return {offline:true};              // 429/5xx = inconclusive, never destructive
    const j=await r.json(); if(j&&j.title&&!j.error) return {ok:true,title:j.title};
    if(j&&j.error) return {ok:false,dead:true};                     // noembed asserts the link is bad
    return {offline:true};
  }catch(e){ return {offline:true}; }`,"verifyVideoUrl inconclusive-safe");
rep(`async function verifyDayVideos(co,dd,btn){
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
}`,
`let _vvBusy=false;
async function verifyDayVideos(co,dd,btn){
  if(_vvBusy)return; _vvBusy=true;
  const v=dd.video||{}; const targets=[["short",v.short],["long",v.long]].filter(x=>x[1]&&x[1].url);
  if(!targets.length){toast("No videos on this day");_vvBusy=false;return;}
  if(btn){btn.textContent="checking…";btn.disabled=true;}
  let good=0,fixed=0,offline=false;
  for(const [k,item] of targets){
    const r=await verifyVideoUrl(item.url);
    if(r.ok){ item.verified=true; item.realTitle=r.title; good++; }
    else if(r.search){ item.verified=false; }        // already a search link — teacher picks
    else if(r.dead){ item.verified=false; item.origUrl=item.url; item.url="https://www.youtube.com/results?search_query="+encodeURIComponent((item.title||co.name)+" "+co.name); item.note=((item.note||"").replace(/ · link died.*$/,""))+" · link died — swapped to a search"; fixed++; }
    else { offline=true; }                            // inconclusive — touch nothing
  }
  _vvBusy=false; save(); render();
  toast(offline?"Verifier unreachable for some links — nothing was changed for those":("Videos: "+good+" verified ✓"+(fixed?", "+fixed+" dead link"+(fixed>1?"s":"")+" swapped to search":"")));
}`,"verifyDayVideos safe + in-flight guard");

/* #5 guidedNotesLatex v2 — formula bank + examples[] */
rep(`  if(gn.worked){
    o.push("\\\\textbf{We do together.}\\\\quad "+mdToLatex(gn.worked.prompt||"")+"\\\\\\\\[6pt]");
    o.push("\\\\begin{enumerate}[label=\\\\textbf{Step \\\\arabic*.},leftmargin=3.1em,itemsep=9pt]");
    (gn.worked.steps||[]).forEach(st=>o.push("  \\\\item "+clozeToLatex(st)));
    o.push("\\\\end{enumerate}\\\\vspace{8pt}");
  }`,
`  if((gn.formulas||[]).length){
    o.push("\\\\fbox{\\\\parbox{\\\\dimexpr\\\\linewidth-2\\\\fboxsep}{\\\\textbf{Formula bank:}\\\\ "+gn.formulas.map(f=>"\\\\textbf{"+E(f.name||"")+":} "+mdToLatex(f.formula||"")).join("\\\\quad ")+"}}\\\\\\\\[9pt]");
  }
  {const exsL=(gn.examples&&gn.examples.length)?gn.examples:((gn.worked&&gn.worked.prompt)?[gn.worked]:[]);
   exsL.forEach((ex,ei)=>{
    o.push("\\\\textbf{"+(exsL.length>1?("Example "+(ei+1)+(ex.label?" --- "+E(ex.label):"")):"We do together.")+"}\\\\quad "+mdToLatex(ex.prompt||"")+"\\\\\\\\[6pt]");
    o.push("\\\\begin{enumerate}[label=\\\\textbf{Step \\\\arabic*.},leftmargin=3.1em,itemsep=9pt]");
    (ex.steps||[]).forEach(st=>o.push("  \\\\item "+clozeToLatex(st)));
    o.push("\\\\end{enumerate}\\\\vspace{8pt}");
   });}`,"guidedNotesLatex v2");

/* #6 Opus pricing */
rep('"claude-opus-4-8":[15,75]','"claude-opus-4-8":[5,25]',"Opus pricing 5/25");

/* #7 assessed: credit every expectation under a strand-level tag */
rep(`Object.values(S.tests[co.id]||{}).forEach(t=>(t.items||[]).forEach(it=>{ const k=Object.keys(L).find(k=>teksMatch(k,it.teks));
    if(k){const nm=t.title||t.label||"test"; if(!L[k].assessed.includes(nm))L[k].assessed.push(nm);} }));`,
`Object.values(S.tests[co.id]||{}).forEach(t=>(t.items||[]).forEach(it=>{ const nm=t.title||t.label||"test";
    Object.keys(L).filter(k=>teksMatch(k,it.teks)).forEach(k=>{ if(!L[k].assessed.includes(nm))L[k].assessed.push(nm); }); }));`,"assessed filter not find");

/* #8 manual unlock sticks — apply to whichever toggle wording exists */
{const variants=[
  [`card.querySelector("#tglock").onclick=()=>{dd.locked=!dd.locked;save();render();toast(dd.locked?day+" locked — weekly changes won't touch it":day+" unlocked");};`,
   `card.querySelector("#tglock").onclick=()=>{dd.locked=!dd.locked;if(!dd.locked)dd.autoLocked=true;save();render();toast(dd.locked?day+" locked — weekly changes won't touch it":day+" unlocked — it will stay unlocked");};`],
  [`card.querySelector("#tglock").onclick=()=>{dd.locked=!dd.locked;save();render();toast(dd.locked?day+" locked — weekly regen will keep it":day+" unlocked");};`,
   `card.querySelector("#tglock").onclick=()=>{dd.locked=!dd.locked;if(!dd.locked)dd.autoLocked=true;save();render();toast(dd.locked?day+" locked — weekly regen will keep it":day+" unlocked — it will stay unlocked");};`]];
 let hit=0; for(const [a,b] of variants){ if(src.includes(a)){src=src.split(a).join(b);hit++;} else if(src.includes(b)) hit++; }
 if(!hit){console.log("ASSERT FAIL: manual unlock sticks — no toggle variant found");process.exit(1);}
 n++;console.log("ok: manual unlock sticks ("+hit+" variant)");}

/* #9 rebuild: validate reply + clear stale variants */
rep(`    const data=parseJSON(txt);
    data.worksheetSource="custom"; // keep his sheet authoritative
    plan.days[day]=Object.assign(plan.days[day],data);
    plan.days[day].customWorksheet=dd.customWorksheet;`,
`    const data=parseJSON(txt);
    if(!data.worksheet||!data.answerKey||!data.guidedNotes) throw new Error("Model reply incomplete — nothing changed; try again");
    data.worksheetSource="custom"; // keep his sheet authoritative
    plan.days[day]=Object.assign(plan.days[day],data);
    delete plan.days[day].modified; delete plan.days[day].spanish; delete plan.days[day].enrichment; // built from the OLD sheet — stale
    plan.days[day].customWorksheet=dd.customWorksheet;`,"rebuild validates + clears stale variants");

/* #10 lock gate on day-level regeneration */
rep(`async function genMaterials(co,wk,plan,day,dd,st,extra=""){
  st.innerHTML='<span class="spinner"></span> writing notes, video, worked examples & worksheet…';`,
`async function genMaterials(co,wk,plan,day,dd,st,extra=""){
  if(dd&&dd.locked&&!confirm(day+" is locked. Regenerate its materials anyway?")){st.textContent="";return;}
  st.innerHTML='<span class="spinner"></span> writing notes, video, worked examples & worksheet…';`,"lock gate in genMaterials");

/* #11 esc() escapes quotes */
rep(`const esc=(s="")=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");`,
`const esc=(s="")=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");`,"esc escapes quotes");

/* #12 gnLine re-inserts math ESCAPED (KaTeX reads text content, so &lt; round-trips) */
rep(`str=str.replace(new RegExp(String.fromCharCode(2)+"(\\\\d+)"+String.fromCharCode(2),"g"),function(_,i){return math[+i];});`,
`str=str.replace(new RegExp(String.fromCharCode(2)+"(\\\\d+)"+String.fromCharCode(2),"g"),function(_,i){return esc(math[+i]);});`,"gnLine escapes math");

/* #13 timer edges */
rep(`ov.querySelector("#tmMinus").onclick=()=>{left=Math.max(0,left-60);draw();};`,
`ov.querySelector("#tmMinus").onclick=()=>{left=Math.max(0,left-60);if(left===0&&running){clearInterval(iv);iv=null;running=false;go.textContent="▶ Start";beep();}draw();};`,"timer minus-to-zero stops");
rep(`ov.querySelector("#tmReset").onclick=()=>{left=total=minutes*60;draw();};`,
`ov.querySelector("#tmReset").onclick=()=>{if(iv){clearInterval(iv);iv=null;}running=false;go.textContent="▶ Start";left=total=minutes*60;draw();};`,"timer reset stops");

/* #14 clause (s) — teach the v2 shape */
rep("Shape: {title, vocab:[{term, def}], worked:{prompt, steps:[...]}, diagram (optional, see (t)), youTry:[{prompt, answer}], summary}. NESTING (get this exactly right): 'worked' holds ONLY prompt and steps; diagram, youTry, and summary are SIBLINGS of 'worked' inside guidedNotes — NOT inside 'worked'.",
"Shape: {title, formulas:[{name, formula}], vocab:[{term, def}], examples:[{label:'Type n — matches that worksheet section', prompt, steps:[...], graph (optional, same spec as slide graphs), answer}], diagram (optional, see (t)), youTry:[{prompt, answer}], summary}. NESTING (get this exactly right): each example holds ONLY label/prompt/steps/graph/answer; formulas, vocab, diagram, youTry, and summary are SIBLINGS of 'examples' inside guidedNotes — never nested inside an example.",
"clause (s) v2 shape");
/* #14b custom title safely into the rebuild prompt's JSON example */
rep('{"worksheet":{"title":"${dd.customWorksheet.title}",',
'{"worksheet":{"title":${JSON.stringify(dd.customWorksheet.title||"My worksheet")},',"rebuild title JSON-safe");

fs.writeFileSync(F,src);
console.log("\\nREVIEW FIXES: "+n+" edits applied");

/* deck-plot mdLite: same escaped-reinsert fix */
const DP=path.join(__dirname,"..","deck-plot.js");
let dp=fs.readFileSync(DP,"utf8");
if(dp.includes("s=s.replace(/ (\\d+) /g,(_,i)=>keep[+i]);")){
  dp=dp.replace("s=s.replace(/ (\\d+) /g,(_,i)=>keep[+i]);",
    "s=s.replace(/ (\\d+) /g,(_,i)=>String(keep[+i]).replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"));");
  fs.writeFileSync(DP,dp);console.log("ok: mdLite escapes math (deck-plot.js)");
}else console.log("mdLite pattern not found — check manually");
