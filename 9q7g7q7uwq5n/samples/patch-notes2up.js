const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=src.split(from).length-1;if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}src=src.replace(from,to);n++;console.log("ok:",label);};

/* 1. guided-notes HTML renderer + GN_CSS, placed just before the print section */
rep("/* ---- Clean native print (crisp text + real KaTeX, true page breaks, notes 2-up) ---- */",
`/* ---- guided notes as HTML: cloze blanks (student) or blue key (teacher) ---- */
function gnLine(str,key){
  let out="",last=0;const re=/\\{\\{([^|{}]*)(?:\\|([^{}]*))?\\}\\}/g;let m;str=String(str==null?"":str);
  while((m=re.exec(str))){out+=md(str.slice(last,m.index));
    out+= key? '<span class="czk">'+md(m[1])+'</span>'
             : '<span class="czb" style="min-width:'+esc((m[2]||"2cm").trim())+'"></span>';
    last=m.index+m[0].length;}
  out+=md(str.slice(last));return out;
}
function guidedNotesHtml(co,gn,opts){
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
}
const GN_CSS=".gnotes{font-size:10pt;line-height:1.45;color:#111}.gn-head{display:flex;justify-content:space-between;gap:10px;border-bottom:2px solid #111;padding-bottom:4px;margin-bottom:7px;align-items:baseline;flex-wrap:wrap}.gn-title{font-weight:750;font-size:12pt;font-family:Georgia,'Times New Roman',serif}.gn-name{font-size:9pt;color:#444}.gn-sec{font-family:ui-monospace,Consolas,monospace;font-size:8pt;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#383CC1;border-top:1px solid #E4E9F5;margin:8px 0 4px;padding-top:6px}.gn-v{margin:3px 0}.gn-prompt{font-weight:650;margin:2px 0 3px}.gn-steps{margin:0 0 0 4px;padding-left:18px}.gn-steps li{margin:3px 0}.gn-yt{margin:4px 0}.gn-num{font-weight:800;color:#383CC1;margin-right:4px}.gn-work{height:2.4cm;border-bottom:1px solid #C9CFE8;margin-top:4px;background:repeating-linear-gradient(transparent,transparent 17px,#E7EAF5 17px,#E7EAF5 18px)}.czb{display:inline-block;border-bottom:1.4px solid #333;height:.95em;vertical-align:baseline;min-width:2cm;margin:0 2px}.czk{color:#2B4FD8;font-weight:650}.gn-ans{margin:3px 0 0 18px}";
/* ---- Clean native print (crisp text + real KaTeX, true page breaks, notes 2-up) ---- */`,"gnLine+guidedNotesHtml+GN_CSS");

/* 2. PRINT_CSS gets GN_CSS */
rep("const PRINT_CSS=`\n*{box-sizing:border-box}","const PRINT_CSS=GN_CSS+`\n*{box-sizing:border-box}","PRINT_CSS includes GN_CSS");

/* 3. 2-up CSS: flowed columns -> two identical copies */
rep(`/* 2-up — LANDSCAPE letter: content flows in two half-sheet columns, NEVER stretched full-width */
.pp.twoup{page:landscape}
.twoup-flow{column-count:2;column-gap:0.5in;column-rule:1px dashed #b9c0d6}
.twoup-flow>*:first-child{margin-top:0}
.pp.twoup .doc{font-size:11.5pt;line-height:1.5}
.pp.twoup .ws-cols{column-count:1}                 /* worksheet's own 2-col collapses — the page is already 2-up */
.pp.twoup .wsheet .ws-title{font-size:13.5pt}
.pp.twoup .docmeta,.pp.twoup .ws-name{font-size:9.5pt}
.pp.twoup .ws-sec{break-inside:auto}
.pp.twoup .worked,.pp.twoup .prob,.pp.twoup .ws-q,.pp.twoup .ws-ex,.pp.twoup table,.pp.twoup .ws-scantron{break-inside:avoid}`,
`/* 2-up — LANDSCAPE letter: TWO IDENTICAL half-sheet copies, dashed cut line (cut the stack in half) */
.pp.twoup{page:landscape}
.duo{display:flex}
.duo .half2{width:5.05in;height:7.55in;overflow:hidden;padding-right:.24in}
.duo .half2+.half2{border-left:1px dashed #b9c0d6;padding-left:.24in;padding-right:0}
.duo .doc{font-size:10pt;line-height:1.45}`,"2-up duplicate CSS");

/* 4. printNodes duplicates the node */
rep(`    if(p.twoUp){const flow=doc.createElement("div");flow.className="twoup-flow";flow.appendChild(imported);sec.appendChild(flow);}
    else sec.appendChild(imported);`,
`    if(p.twoUp){const duo=doc.createElement("div");duo.className="duo";
      const h1=doc.createElement("div");h1.className="half2";h1.appendChild(imported);
      const h2=doc.createElement("div");h2.className="half2";h2.appendChild(imported.cloneNode(true));
      duo.appendChild(h1);duo.appendChild(h2);sec.appendChild(duo);}
    else sec.appendChild(imported);`,"printNodes duplicates");

/* 5. printPacket: notes-only 2-up + guided sheet swap */
rep(`  const twoUp=dd.packet&&dd.packet.notes2up!==false;
  printNodes(parts.map(p=>({node:p.node,twoUp:twoUp&&(p.comp.key==='notes'||p.comp.key==='worksheet'),label:co.name+' · '+day+' · '+p.comp.label})), co.name+' — '+day+' packet');`,
`  const twoUp=dd.packet&&dd.packet.notes2up!==false;
  const di=(cur.weekKey?schoolWeeks().find(w=>w.key===cur.weekKey):null);
  const dateStr=fmt(pdate((di&&di.days.find(x=>x.day===day)?.iso)||S.calendar.firstDay));
  printNodes(parts.map(p=>{
    let node=p.node;
    if(p.comp.key==='notes'&&dd.guidedNotes) node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
    return {node,twoUp:twoUp&&p.comp.key==='notes',label:co.name+' · '+day+' · '+p.comp.label};
  }), co.name+' — '+day+' packet');`,"printPacket notes-only 2up + guided");

/* 6. chip label */
rep(" 🗒 2-up ½-sheets <span class=\"psum\">notes + worksheet, save paper</span></label>",
    " 🗒 Notes 2-up <span class=\"psum\">two copies per sheet, cut line</span></label>","chip label");

/* 7. teacher packet section 03: guided key */
rep("  if(m.notes){ body+=secH('03 · Handout','Student notes'); body+='<div class=\"pkdoc\">'+md(m.notes)+'</div>'; }",
`  if(m.guidedNotes){ body+=secH('03 · Handout','Guided notes — teacher key (students get blanks, printed 2-up)'); body+='<div class="pkdoc">'+guidedNotesHtml(co,m.guidedNotes,{key:true,dateStr:dateStr})+'</div>'; }
  else if(m.notes){ body+=secH('03 · Handout','Student notes'); body+='<div class="pkdoc">'+md(m.notes)+'</div>'; }`,"packet guided key");

/* 8. PACKET_CSS gets GN_CSS */
rep('].join("\\n");\nfunction teacherPacketDoc','].join("\\n")+GN_CSS;\nfunction teacherPacketDoc',"PACKET_CSS includes GN_CSS");

/* 9. validateDay: warn when the script under-fills the period */
rep("  opts=opts||{}; const issues=[], warn=[]; const ws=d.worksheet||{};",
`  opts=opts||{}; const issues=[], warn=[]; const ws=d.worksheet||{};
  {const mins=(d.script||[]).reduce((a,s)=>a+(+s.min||0),0);
   if(mins&&mins<45&&d.objective!=="No School for Students") warn.push("script only covers "+mins+" min — under a 45-min period; add or lengthen a block");}`,"validateDay time warning");

fs.writeFileSync(F,src);
console.log("\nall "+n+" edits applied");
