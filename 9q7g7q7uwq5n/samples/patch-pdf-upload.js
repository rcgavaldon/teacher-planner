const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let s=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=s.split(from).length-1;
  if(c===0&&s.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  s=s.split(from).join(to);n++;console.log("ok:",label);};

/* 1. modal: add a PDF/image drop + keep the paste box (either one works) */
rep(`  const ov=el('<div class="overlay"><div class="modal"><h3>📄 Use my worksheet — '+esc(day)+'</h3>'
    +'<p class="sub">Paste your LaTeX (or a plain problem list). It becomes the SOURCE OF TRUTH for this day: your PDF is what prints, and one click rebuilds the notes, slides, worked examples, and answer key around it.</p>'
    +'<label>Title</label><input id="cwTitle" value="'+esc((dd.customWorksheet&&dd.customWorksheet.title)||(dd.worksheet&&dd.worksheet.title)||"")+'">'
    +'<label>Your LaTeX / problems</label><textarea id="cwTex" rows="14" placeholder="\\\\documentclass... or just a numbered problem list">'+esc((dd.customWorksheet&&dd.customWorksheet.tex)||"")+'</textarea>'
    +'<div class="btnbar" style="margin-top:10px"><button class="btn" id="cwSave">Save & rebuild the day around it</button><button class="btn ghost" id="cwSaveOnly">Save only</button><button class="btn ghost" id="cwCancel">Cancel</button></div></div></div>');
  document.body.appendChild(ov);`,
`  const cw=dd.customWorksheet||{};
  const ov=el('<div class="overlay"><div class="modal"><h3>📄 Use my worksheet — '+esc(day)+'</h3>'
    +'<p class="sub">Drop in your worksheet as a <b>PDF/image</b> OR paste LaTeX / a problem list — either becomes the SOURCE OF TRUTH for this day. Your file is what prints; one click rebuilds the notes, slides, examples, and recomputed answer key around it.</p>'
    +'<label>Title</label><input id="cwTitle" value="'+esc(cw.title||(dd.worksheet&&dd.worksheet.title)||"")+'">'
    +'<label>Upload a PDF or image of your worksheet</label>'
    +'<label class="btn ghost sm" style="display:inline-block;width:auto;margin:2px 0 0">📎 Choose file<input id="cwFile" type="file" accept="application/pdf,image/png,image/jpeg" style="display:none"></label>'
    +'<span id="cwFileName" class="sub" style="margin-left:8px">'+(cw.file?esc(cw.file.name)+" ✓ (kept — this prints)":"no file yet")+'</span>'
    +'<label style="margin-top:12px">…or paste LaTeX / problems</label><textarea id="cwTex" rows="9" placeholder="\\\\documentclass... or just a numbered problem list">'+esc(cw.tex||"")+'</textarea>'
    +'<div class="btnbar" style="margin-top:10px"><button class="btn" id="cwSave">Save & rebuild the day around it</button><button class="btn ghost" id="cwSaveOnly">Save only</button><button class="btn ghost" id="cwCancel">Cancel</button></div></div></div>');
  document.body.appendChild(ov);
  let pendingFile=cw.file||null;
  ov.querySelector("#cwFile").onchange=e=>{const f=e.target.files&&e.target.files[0]; if(!f)return;
    if(f.size>18*1024*1024){toast("File too big — keep it under 18 MB");return;}
    const rd=new FileReader(); rd.onload=()=>{ pendingFile={name:f.name,mediaType:f.type||"application/pdf",data:String(rd.result).split(",")[1]};
      ov.querySelector("#cwFileName").textContent=f.name+" ✓ (kept — this prints)";
      if(!ov.querySelector("#cwTitle").value.trim()) ov.querySelector("#cwTitle").value=f.name.replace(/\\.[^.]+$/,"");
    }; rd.readAsDataURL(f); };`,
"modal PDF/image input");

/* 2. grab(): accept file OR tex */
rep(`  ov.querySelector("#cwCancel").onclick=()=>ov.remove();
  const grab=()=>{const tex=ov.querySelector("#cwTex").value.trim(); if(!tex){toast("Paste the worksheet first");return null;}
    dd.customWorksheet={title:ov.querySelector("#cwTitle").value.trim()||"My worksheet",tex,addedAt:iso(new Date())}; dd.worksheetSource="custom"; save(); return true;};`,
`  ov.querySelector("#cwCancel").onclick=()=>ov.remove();
  const grab=()=>{const tex=ov.querySelector("#cwTex").value.trim();
    if(!tex&&!pendingFile){toast("Upload a PDF/image or paste the worksheet first");return null;}
    dd.customWorksheet={title:ov.querySelector("#cwTitle").value.trim()||(pendingFile?pendingFile.name.replace(/\\.[^.]+$/,""):"My worksheet"),tex,file:pendingFile||null,addedAt:iso(new Date())}; dd.worksheetSource="custom"; save(); return true;};`,
"grab accepts file");

/* 3. rebuildFromWorksheet: send the PDF/image via callClaude's document reader when present; bigger tex cap */
rep(`  try{
    const txt=await callClaude({max_tokens:9000,
      system:\`You are a Texas HS math teacher. The teacher wrote their OWN worksheet (below) — it is the SOURCE OF TRUTH.`,
`  const cwf=dd.customWorksheet.file;
  try{
    const txt=await callClaude({max_tokens:9000, pdf:(cwf&&cwf.mediaType==="application/pdf")?cwf.data:null, image:(cwf&&/^image\\//.test(cwf.mediaType||""))?cwf:null,
      system:\`You are a Texas HS math teacher. The teacher's OWN worksheet is the SOURCE OF TRUTH — it is ${'$'}{cwf?"the ATTACHED "+(cwf.mediaType==="application/pdf"?"PDF":"image")+" (read EVERY problem from it, in order)":"pasted below"}.`,
"rebuild uses attached file");

rep("TEACHER'S WORKSHEET (source of truth):\n${String(dd.customWorksheet.tex).slice(0,9000)}",
"TEACHER'S WORKSHEET (source of truth):\n${cwf?\"(see the attached file above — transcribe every problem from it)\":String(dd.customWorksheet.tex).slice(0,60000)}",
"rebuild tex cap 9k->60k + file note");

/* 4. callClaude: support an image document too (pdf param already exists) */
rep(`async function callClaude({system,messages,max_tokens=4096,pdf=null}){`,
`async function callClaude({system,messages,max_tokens=4096,pdf=null,image=null}){`,
"callClaude image param");
rep(`  if(pdf){msgs=[{role:"user",content:[
    {type:"document",source:{type:"base64",media_type:"application/pdf",data:pdf}},
    {type:"text",text:messages[0].content}]}];}`,
`  if(pdf){msgs=[{role:"user",content:[
    {type:"document",source:{type:"base64",media_type:"application/pdf",data:pdf}},
    {type:"text",text:messages[0].content}]}];}
  else if(image&&image.data){msgs=[{role:"user",content:[
    {type:"image",source:{type:"base64",media_type:image.mediaType||"image/png",data:image.data}},
    {type:"text",text:messages[0].content}]}];}`,
"callClaude image branch");

/* 5. worksheet header buttons: "My PDF" opens the stored file when it's a file (not tex) */
rep(`   const b3=out.querySelector("#wsTex"); if(b3)b3.onclick=()=>texModal(m.customWorksheet.tex,fname(co.name+"-"+day+"-my-worksheet"));`,
`   const b3=out.querySelector("#wsTex"); if(b3)b3.onclick=()=>{const cwf=m.customWorksheet.file;
     if(cwf&&cwf.data){const w=window.open("");if(w)w.document.write('<iframe src="data:'+(cwf.mediaType||"application/pdf")+';base64,'+cwf.data+'" style="border:0;width:100%;height:100vh"></iframe>');}
     else texModal(m.customWorksheet.tex||"(no LaTeX — this day uses an uploaded file)",fname(co.name+"-"+day+"-my-worksheet"));};`,
"My-file viewer button");
rep(`m.customWorksheet?'<button class="btn sm" id="wsRebuild">🔁 Rebuild day around it</button><button class="btn ghost sm" id="wsTex">👁 LaTeX</button>`,
`m.customWorksheet?'<button class="btn sm" id="wsRebuild">🔁 Rebuild day around it</button><button class="btn ghost sm" id="wsTex">👁 '+(m.customWorksheet.file?'My file':'LaTeX')+'</button>`,
"button label file vs latex");

/* 6. genMaterials context: don't dump 4k of tex if it's a file */
rep(`\${dd.customWorksheet?\"TEACHER'S OWN WORKSHEET (source of truth — align notes/slides/examples to it):\\n\"+String(dd.customWorksheet.tex).slice(0,4000)+\"\\n\":\"\"}`,
`\${dd.customWorksheet?(dd.customWorksheet.file?\"NOTE: this day has the teacher's OWN uploaded worksheet as the source of truth; align notes/slides/examples to the same skills.\\n\":\"TEACHER'S OWN WORKSHEET (source of truth — align notes/slides/examples to it):\\n\"+String(dd.customWorksheet.tex||\"\").slice(0,8000)+\"\\n\"):\"\"}`,
"genMaterials file-aware context");

fs.writeFileSync(F,s);
console.log("\\nPDF-UPLOAD: "+n+" edits");
