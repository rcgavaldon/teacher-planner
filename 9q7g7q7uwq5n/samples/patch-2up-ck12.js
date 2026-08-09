const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let src=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=src.split(from).length-1;
  if(c===0&&src.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  src=src.split(from).join(to);n++;console.log("ok:",label);};

/* 1. HONOR THE 2-UP TOGGLE — scale whatever it takes (floor 0.55), never silently flip to 1-up */
rep(`    if(p.comp.key==='notes'&&dd.guidedNotes){
      node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr}));
      mathRender(node); // KaTeX BEFORE measuring & printing — printNodes' iframe has no KaTeX JS
      // measure at half-sheet width; auto-shrink to fit; 1-up if it would need <0.8
      try{
        const meas=document.createElement("div");
        meas.style.cssText="position:fixed;left:-9999px;top:0;width:4.55in;background:#fff";
        meas.appendChild(node.cloneNode(true)); document.body.appendChild(meas);
        const hIn=meas.getBoundingClientRect().height/96; meas.remove();
        const budget=7.35; // in — margin for KaTeX growing text a bit
        if(hIn>budget){
          const f=budget/hIn;
          if(f>=0.75){ const wrap=el('<div style="transform:scale('+f.toFixed(3)+');transform-origin:top left;width:'+(100/f).toFixed(1)+'%"></div>'); wrap.appendChild(node); node=wrap; }
          else twoUpThis=false; // too dense even shrunk — print full page
        }
      }catch(e){}
    }`,
`    if(p.comp.key==='notes'&&dd.guidedNotes){
      node=el(guidedNotesHtml(co,dd.guidedNotes,{key:false,dateStr,ck12:dd.ck12||dd.fallbackKhan}));
      mathRender(node); // KaTeX BEFORE measuring & printing — printNodes' iframe has no KaTeX JS
      // the 2-up toggle is a PROMISE: measure and shrink however much it takes (floor 0.55)
      if(twoUpThis) try{
        const meas=document.createElement("div");
        meas.style.cssText="position:fixed;left:-9999px;top:0;width:4.55in;background:#fff";
        meas.appendChild(node.cloneNode(true)); document.body.appendChild(meas);
        const hIn=meas.getBoundingClientRect().height/96; meas.remove();
        const budget=7.35; // usable half-sheet height (in)
        if(hIn>budget){
          const f=Math.max(0.55,budget/hIn);
          const wrap=el('<div style="transform:scale('+f.toFixed(3)+');transform-origin:top left;width:'+(100/f).toFixed(1)+'%"></div>');
          wrap.appendChild(node); node=wrap;
          if(f<0.78) setTimeout(()=>toast("Notes are dense — shrunk to "+Math.round(f*100)+"% to keep the ½-sheet. Trim an example if it reads small."),1200);
        }
      }catch(e){}
    }`,"2-up toggle always honored");

/* 2. CK-12 reference printed ON the notes sheet (footer strip) */
rep(`  if(gn.summary)h+='<div class="gn-sec">Summary</div><div class="gn-v">'+gnLine(gn.summary,key)+'</div>';
  return h+"</div>";
}`,
`  if(gn.summary)h+='<div class="gn-sec">Summary</div><div class="gn-v">'+gnLine(gn.summary,key)+'</div>';
  if(opts.ck12&&(opts.ck12.title||opts.ck12.url)){
    const u=String(opts.ck12.url||"").replace(/^https?:\\/\\//,"").replace(/\\/$/,"");
    h+='<div class="gn-ck">📚 <b>Today\\u2019s lesson'+(opts.ck12.section?" ("+esc(opts.ck12.section)+")":"")+':</b> '+esc(opts.ck12.title||"")+(u?' \\u2014 <span class="gn-cku">'+esc(u)+'</span>':'')+'</div>';
  }
  return h+"</div>";
}`,"CK-12 footer on notes");
rep(`.gn-ans{margin:3px 0 0 18px}";`,
`.gn-ans{margin:3px 0 0 18px}.gn-ck{margin-top:7px;border-top:1px solid #E4E9F5;padding-top:5px;font-size:8.5pt;color:#1B2350}.gn-ck b{color:#383CC1}.gn-cku{font-family:ui-monospace,Consolas,monospace;font-size:7.5pt;color:#5A6382;word-break:break-all}";`,"gn-ck CSS");

/* 3. CK-12 link in the teacher packet header area */
rep(`  const slides=(m.presentation&&m.presentation.slides)||[];
  if(slides.length){ body+=secH('01 · Project',`,
`  const asn=m.ck12||m.fallbackKhan;
  if(asn&&(asn.title||asn.url)) body+='<div class="pkck">📚 <b>Graded online lesson'+(asn.section?' · '+esc(asn.section):'')+':</b> <a href="'+esc(asn.url||"#")+'" target="_blank" rel="noopener">'+esc(asn.title||asn.url||"lesson")+'</a>'+(m.useCk12?' <span class="pkck-tag">replacing the paper worksheet today</span>':'')+'</div>';
  const slides=(m.presentation&&m.presentation.slides)||[];
  if(slides.length){ body+=secH('01 · Project',`,"CK-12 bar in packet");
rep(`".pkhead .pkobj{margin:0;font-size:13px;line-height:1.45;color:#C6CCEA;max-width:56ch}",`,
`".pkhead .pkobj{margin:0;font-size:13px;line-height:1.45;color:#C6CCEA;max-width:56ch}",
".pkck{margin:12px 0 0;background:var(--pine-bg);border:1px solid var(--pine-line);border-radius:11px;padding:10px 14px;font-size:13.5px}.pkck b{color:var(--pine)}.pkck a{color:var(--indigo);font-weight:600}.pkck-tag{font-family:var(--mono);font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:var(--amber);margin-left:6px}",`,"pkck CSS");

fs.writeFileSync(F,src);
console.log("\\n2UP+CK12: "+n+" edits applied");
