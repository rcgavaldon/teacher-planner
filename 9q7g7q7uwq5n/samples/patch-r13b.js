const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label,count)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip (already applied):",label);return;}
  if(c!==(count||1)){console.log("ASSERT FAIL ("+c+"x, wanted "+(count||1)+"): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* ============ 1. guidedNotesHtml v2 — formula bank, multiple examples, mini graphs, doodle look ============ */
const OLD_GN=`function guidedNotesHtml(co,gn,opts){
  opts=opts||{};const key=!!opts.key;gn=gn||{};
  let h='<div class="gnotes">';
  h+='<div class="gn-head"><span class="gn-title">'+esc(gn.title||co.name+" — Notes")+'</span><span class="gn-name">'+(key?'<b class="czk">TEACHER KEY</b>':"Name ______________________")+(opts.dateStr?" · "+esc(opts.dateStr):"")+'</span></div>';
  if((gn.vocab||[]).length){h+='<div class="gn-sec">Vocabulary</div>';
    gn.vocab.forEach(v=>{h+='<div class="gn-v"><b>'+esc(v.term||"")+'</b> — '+gnLine(v.def||"",key)+'</div>';});}
  const w=gn.worked||{};
  if(w.prompt){h+='<div class="gn-sec">Worked example</div><div class="gn-prompt">'+md(w.prompt)+'</div>'
    +'<ol class="gn-steps">'+(w.steps||[]).map(s=>'<li>'+gnLine(s,key)+'</li>').join("")+'</ol>';}
  const yt=gn.youTry||[];
  if(yt.length){h+='<div class="gn-sec">You try</div>';
    yt.forEach((y,i)=>{h+='<div class="gn-yt"><span class="gn-num">'+(i+1)+'.</span> '+md(y.prompt||"")+(key&&y.answer?'<div class="gn-ans czk">'+md(y.answer)+'</div>':'<div class="gn-work"></div>')+'</div>';});}
  if(gn.summary)h+='<div class="gn-sec">Summary</div><div class="gn-v">'+gnLine(gn.summary,key)+'</div>';
  return h+"</div>";
}`;
const NEW_GN=`function guidedNotesHtml(co,gn,opts){
  opts=opts||{};const key=!!opts.key;gn=gn||{};
  let h='<div class="gnotes">';
  h+='<div class="gn-head"><span class="gn-title">'+esc(gn.title||co.name+" — Notes")+'</span><span class="gn-name">'+(key?'<b class="czk">TEACHER KEY</b>':"Name ______________________")+(opts.dateStr?" · "+esc(opts.dateStr):"")+'</span></div>';
  if((gn.formulas||[]).length){h+='<div class="gn-box gn-formulas"><span class="gn-flab">Formula bank</span>'
    +gn.formulas.map(f=>'<span class="gn-f"><b>'+esc(f.name||"")+':</b> '+gnLine(f.formula||"",true)+'</span>').join("")+'</div>';}
  if((gn.vocab||[]).length){h+='<div class="gn-sec">Vocabulary</div>';
    gn.vocab.forEach(v=>{h+='<div class="gn-v"><b>'+esc(v.term||"")+'</b> — '+gnLine(v.def||"",key)+'</div>';});}
  const exs=(gn.examples&&gn.examples.length)?gn.examples:(gn.worked&&gn.worked.prompt?[gn.worked]:[]);
  exs.forEach((w,i)=>{
    h+='<div class="gn-sec">Example '+(exs.length>1?(i+1):"")+(w.label?' · '+esc(w.label):"")+'</div>';
    h+='<div class="gn-ex">'+(w.graph?'<span class="gn-fig">'+plotSvg(w.graph)+'</span>':"")
      +'<div class="gn-prompt">'+md(w.prompt||"")+'</div>'
      +'<ol class="gn-steps">'+(w.steps||[]).map(s=>'<li>'+gnLine(s,key)+'</li>').join("")+'</ol>'
      +(key&&w.answer?'<div class="gn-ans czk">'+md(w.answer)+'</div>':"")
      +'<div style="clear:both"></div></div>';
  });
  const yt=gn.youTry||[];
  if(yt.length){h+='<div class="gn-sec">You try</div>';
    yt.forEach((y,i)=>{h+='<div class="gn-yt"><span class="gn-num">'+(i+1)+'.</span> '+md(y.prompt||"")+(key&&y.answer?'<div class="gn-ans czk">'+md(y.answer)+'</div>':'<div class="gn-work"></div>')+'</div>';});}
  if(gn.summary)h+='<div class="gn-sec">Summary</div><div class="gn-v">'+gnLine(gn.summary,key)+'</div>';
  return h+"</div>";
}`;
rep(OLD_GN,NEW_GN,"guidedNotesHtml v2");

/* doodle CSS additions */
rep('const GN_CSS=".gnotes{font-size:10pt;line-height:1.45;color:#111}',
'const GN_CSS=".gn-box{border:1.6px solid #1B2350;border-radius:255px 15px 225px 15px/15px 225px 15px 255px;padding:7px 11px;margin:6px 0}.gn-formulas{display:flex;flex-wrap:wrap;gap:3px 16px;background:#F4F5FC;align-items:baseline}.gn-flab{font-family:\'Segoe Print\',\'Comic Sans MS\',cursive;font-size:9pt;font-weight:700;color:#383CC1;margin-right:6px;white-space:nowrap}.gn-f{font-size:9.5pt;white-space:nowrap}.gn-f b{color:#1B2350}.gn-ex{margin:2px 0}.gn-fig{float:right;width:1.62in;margin:0 0 4px 10px;border:1.6px solid #1B2350;border-radius:225px 15px 255px 15px/15px 255px 15px 225px;padding:3px;background:#fff}.gn-fig svg{display:block;width:100%;height:auto}'
+'.gnotes{font-size:10pt;line-height:1.45;color:#111}',"doodle CSS");
rep('.gn-sec{font-family:ui-monospace,Consolas,monospace;font-size:8pt;',
    '.gn-sec{font-family:\'Segoe Print\',\'Comic Sans MS\',cursive;font-size:8.5pt;',"gn-sec marker font");

/* ============ 2. generator schemas -> guidedNotes v2 (both weekly prompts) ============ */
rep('"guidedNotes":{"title":"...","vocab":[{"term":"...","def":"short def with a {{blank|2cm}} and math like {{$x\\\\ge 0$|2cm}}"}],"worked":{"prompt":"Solve $...$","steps":["a step with a {{answer|2cm}}","math answer: {{$(x+2)(x+3)$|3.5cm}}"]},"diagram":null,"youTry":[{"prompt":"$...$","answer":"worked answer shown only on the key"}],"summary":"one line with {{blanks|2cm}} for the method"},',
'"guidedNotes":{"title":"...","formulas":[{"name":"Vertex form","formula":"$y=a(x-h)^{2}+k$"}],"vocab":[{"term":"...","def":"short def with a {{blank|2cm}} and math like {{$x\\\\ge 0$|2cm}}"}],"examples":[{"label":"Type 1 — same skill as worksheet section 1","prompt":"Solve $...$","steps":["a step with a {{answer|2cm}}","math answer: {{$(x+2)(x+3)$|3.5cm}}"],"graph":{"kind":"parabola","a":1,"b":0,"c":0,"domain":[-4,4],"marks":[{"x":0,"y":0,"label":""}]},"answer":"one-line final answer (key only)"}],"youTry":[{"prompt":"$...$","answer":"worked answer shown only on the key"}],"summary":"one line with {{blanks|2cm}} for the method"},',
"guidedNotes v2 schema",2);

/* notes rules appended where CONTENT_SPEC is injected (phrasing differs per prompt) */
rep("CONTENT REQUIREMENTS: ${CONTENT_SPEC}",
"CONTENT REQUIREMENTS: ${CONTENT_SPEC} ${NOTES_V2_RULE}","spec rule hook (genMaterials)");
rep("CONTENT FOR EACH DAY: ${CONTENT_SPEC}",
"CONTENT FOR EACH DAY: ${CONTENT_SPEC} ${NOTES_V2_RULE}","spec rule hook (genWeek)");
rep("const EARLY_FINISH = ",
`const NOTES_V2_RULE = "GUIDED NOTES = the on-ramp to the worksheet: include a FORMULA BANK naming every formula needed today (name + formula, no blanks); give ONE worked example PER worksheet question type (label each one 'Type n — ...' to match the section), with cloze {{blanks}} in the steps and steps that reference the formula NAMES; attach a small 'graph' spec to an example when a picture teaches; keep 1-3 examples total and 1-2 youTry problems that mirror the worksheet's hardest common type. The graph spec format matches the presentation slides' graph field.";
const EARLY_FINISH = `,"NOTES_V2_RULE");

/* guidedNotesLatex back-compat with examples[] */
rep("const w=gn.worked||{}; const diagram=gn.diagram||w.diagram;",
    "const w=gn.worked||((gn.examples||[])[0])||{}; const diagram=gn.diagram||w.diagram;","LaTeX notes back-compat");

/* validateDay: too many examples for a half sheet */
rep('   if(mins&&mins<45&&d.objective!=="No School for Students") warn.push("script only covers "+mins+" min — under a 45-min period; add or lengthen a block");}',
`   if(mins&&mins<45&&d.objective!=="No School for Students") warn.push("script only covers "+mins+" min — under a 45-min period; add or lengthen a block");
   const gx=(d.guidedNotes&&d.guidedNotes.examples||[]).length; if(gx>3) warn.push(gx+" notes examples — too many for a half-sheet (keep 1-3)");}`,"validateDay example cap");

/* ============ 3. CUSTOM WORKSHEET — yours becomes the source of truth ============ */
rep("async function verifyVideoUrl(url){",
`function customWsModal(co,dd,day){
  const ov=el('<div class="overlay"><div class="modal"><h3>📄 Use my worksheet — '+esc(day)+'</h3>'
    +'<p class="sub">Paste your LaTeX (or a plain problem list). It becomes the SOURCE OF TRUTH for this day: your PDF is what prints, and one click rebuilds the notes, slides, worked examples, and answer key around it.</p>'
    +'<label>Title</label><input id="cwTitle" value="'+esc((dd.customWorksheet&&dd.customWorksheet.title)||(dd.worksheet&&dd.worksheet.title)||"")+'">'
    +'<label>Your LaTeX / problems</label><textarea id="cwTex" rows="14" placeholder="\\\\documentclass... or just a numbered problem list">'+esc((dd.customWorksheet&&dd.customWorksheet.tex)||"")+'</textarea>'
    +'<div class="btnbar" style="margin-top:10px"><button class="btn" id="cwSave">Save & rebuild the day around it</button><button class="btn ghost" id="cwSaveOnly">Save only</button><button class="btn ghost" id="cwCancel">Cancel</button></div></div></div>');
  document.body.appendChild(ov);
  ov.querySelector("#cwCancel").onclick=()=>ov.remove();
  const grab=()=>{const tex=ov.querySelector("#cwTex").value.trim(); if(!tex){toast("Paste the worksheet first");return null;}
    dd.customWorksheet={title:ov.querySelector("#cwTitle").value.trim()||"My worksheet",tex,addedAt:iso(new Date())}; dd.worksheetSource="custom"; save(); return true;};
  ov.querySelector("#cwSaveOnly").onclick=()=>{if(grab()){ov.remove();render();toast("Saved — your worksheet is now the source of truth");}};
  ov.querySelector("#cwSave").onclick=()=>{if(grab()){ov.remove();render();rebuildFromWorksheet(co,day);}};
}
async function rebuildFromWorksheet(co,day){
  const plan=S.plans[co.id]&&S.plans[co.id][cur.weekKey]; const dd=plan&&plan.days&&plan.days[day];
  if(!dd||!dd.customWorksheet){toast("No custom worksheet on this day");return;}
  if(dd.locked&&!confirm(day+" is locked. Rebuild its materials anyway?"))return;
  const st=$("#mst")||document.createElement("span");
  st.innerHTML='<span class="spinner"></span> rebuilding the whole day around YOUR worksheet…';
  try{
    const txt=await callClaude({max_tokens:7500,
      system:\`You are a Texas HS math teacher. The teacher wrote their OWN worksheet (below) — it is the SOURCE OF TRUTH. Rebuild every other artifact of the day to align EXACTLY to its problems: same skills, same order of question types, nothing taught that the sheet doesn't practice and nothing practiced that the notes don't teach. Solve the teacher's actual problems for the answer key — recompute, don't guess. Clean LaTeX in $...$. Return ONLY JSON.

\${NOTES_V2_RULE}\`,
      messages:[{role:"user",content:\`Course: \${co.name}. TEKS \${(plan.teks||[]).join(", ")}.
TEKS detail: \${teksTextForCodes(co.teks, plan.teks||[])}
Day objective: \${dd.objective||""}

TEACHER'S WORKSHEET (source of truth):
\${String(dd.customWorksheet.tex).slice(0,9000)}

Return JSON:
{"worksheet":{"title":"\${dd.customWorksheet.title}","instructions":"...","sections":[{"type":"...","directions":"...","workedExample":"...","problems":["every problem from the teacher's sheet, in order, as clean $...$ text"]}],"optionalExtra":[]},
 "answerKey":[{"section":"...","answers":["recomputed answer for each problem, in order"]}],
 "guidedNotes":{"title":"...","formulas":[{"name":"...","formula":"$...$"}],"vocab":[{"term":"...","def":"...{{blank|2cm}}..."}],"examples":[{"label":"Type 1 — ...","prompt":"...","steps":["...{{blank|2cm}}..."],"graph":null,"answer":"..."}],"youTry":[{"prompt":"...","answer":"..."}],"summary":"...{{blank|2cm}}..."},
 "presentation":{"kind":"build","title":"...","slides":[{"type":"define|example|mistake|youtry","heading":"...","bullets":["..."],"example":"...","youTry":"...","graph":null}]},
 "procedureExamples":[{"prompt":"...","steps":["..."],"answer":"..."}],
 "vocab":[{"term":"...","definition":"..."}],
 "exitTicket":["one fresh question, same skill, NOT copied from the sheet"]}\`}]});
    const data=parseJSON(txt);
    data.worksheetSource="custom"; // keep his sheet authoritative
    plan.days[day]=Object.assign(plan.days[day],data);
    plan.days[day].customWorksheet=dd.customWorksheet;
    const vr=validateDay(plan.days[day],{});
    save(); render();
    toast(vr.warn&&vr.warn.length?("Rebuilt around your worksheet — ⚠ "+vr.warn[0]):"Day rebuilt around YOUR worksheet — notes, slides, examples, and key all realigned");
  }catch(e){ st.textContent="✗ "+e.message; }
}
async function verifyVideoUrl(url){`,"customWsModal + rebuildFromWorksheet");

/* worksheet header: button + source-of-truth banner */
rep("    out.appendChild(el(`<h3 style=\"margin-top:18px\">Worksheet</h3>`));",
`    out.appendChild(el(\`<div class="btnbar" style="margin-top:18px;align-items:center"><h3 style="margin:0;flex:1">Worksheet\${m.customWorksheet?' <span class="pill green">yours — source of truth</span>':''}</h3><button class="btn ghost sm" id="wsMine">📄 \${m.customWorksheet?'Edit my worksheet':'Use my worksheet'}</button>\${m.customWorksheet?'<button class="btn sm" id="wsRebuild">🔁 Rebuild day around it</button><button class="btn ghost sm" id="wsTex">👁 LaTeX</button><button class="btn ghost sm" id="wsRemove">✕</button>':''}</div>\`));
    if(m.customWorksheet) out.appendChild(el(\`<div class="note" style="margin:0 0 10px">Below is the generated MIRROR of your sheet (it powers the packet, key, and coverage). <b>Print your own compiled PDF</b> — the packet print skips this one automatically.</div>\`));`,
"worksheet header + banner");

/* wire the custom-ws buttons after the worksheet block */
rep("      ${secsHTML}${chal}</div>`));\n  }",
`      \${secsHTML}\${chal}</div>\`));
  }
  {const b1=out.querySelector("#wsMine"); if(b1)b1.onclick=()=>customWsModal(co,m,day);
   const b2=out.querySelector("#wsRebuild"); if(b2)b2.onclick=()=>rebuildFromWorksheet(co,day);
   const b3=out.querySelector("#wsTex"); if(b3)b3.onclick=()=>texModal(m.customWorksheet.tex,fname(co.name+"-"+day+"-my-worksheet"));
   const b4=out.querySelector("#wsRemove"); if(b4)b4.onclick=()=>{if(confirm("Remove your worksheet and go back to the generated one?")){delete m.customWorksheet;delete m.worksheetSource;save();render();}};}`,
"wire custom-ws buttons");

/* genMaterials: custom worksheet is context for any regen */
rep("${ck12Line}\n${co.notes?\"Teacher notes: \"+co.notes:\"\"}",
"${ck12Line}\n${dd.customWorksheet?\"TEACHER'S OWN WORKSHEET (source of truth — align notes/slides/examples to it):\\n\"+String(dd.customWorksheet.tex).slice(0,4000)+\"\\n\":\"\"}${co.notes?\"Teacher notes: \"+co.notes:\"\"}",
"genMaterials custom context");

/* printPacket: skip printing our worksheet when his is authoritative */
rep(`  printNodes(parts.map(p=>{
    let node=p.node;
    if(p.comp.key==='notes'&&dd.guidedNotes) node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
    return {node,twoUp:twoUp&&p.comp.key==='notes',label:co.name+' · '+day+' · '+p.comp.label};
  }), co.name+' — '+day+' packet');`,
`  let skippedCustom=false;
  printNodes(parts.map(p=>{
    if(p.comp.key==='worksheet'&&dd.customWorksheet){skippedCustom=true;return null;}
    let node=p.node;
    if(p.comp.key==='notes'&&dd.guidedNotes) node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
    return {node,twoUp:twoUp&&p.comp.key==='notes',label:co.name+' · '+day+' · '+p.comp.label};
  }).filter(Boolean), co.name+' — '+day+' packet');
  if(skippedCustom) setTimeout(()=>toast("Worksheet skipped — print YOUR compiled PDF for that one"),900);`,
"printPacket custom skip");

/* teacher packet section 04 notes the mirror */
rep("if((ws.sections||[]).length){ body+=secH('04 · Practice','Worksheet — '+(ws.title||''));",
"if((ws.sections||[]).length){ body+=secH('04 · Practice','Worksheet — '+(ws.title||'')+(m.customWorksheet?' · YOURS (mirror)':''));",
"packet mirror label");

fs.writeFileSync(F,src);
console.log("\\nPATCH B: "+n+" edits applied");
