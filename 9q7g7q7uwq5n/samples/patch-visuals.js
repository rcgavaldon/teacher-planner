const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let s=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label)=>{const c=s.split(from).length-1;
  if(c===0&&s.includes(to)){console.log("skip:",label);return;}
  if(c!==1){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  s=s.split(from).join(to);n++;console.log("ok:",label);};

/* diagram spec -> drawn SVG (adapts the worksheet diagram shape to plotSvg) */
rep("function figHTML(fig){",
`function diagramHtml(d){
  if(!d||!(d.plots||[]).length&&!(d.points||[]).length) return "";
  try{
    const p0=(d.plots||[])[0]||{}, p1=(d.plots||[])[1];
    const spec={kind:"curve",expr:p0.expr||"",domain:[d.xmin!=null?d.xmin:(p0.domain&&p0.domain[0]),d.xmax!=null?d.xmax:(p0.domain&&p0.domain[1])]};
    if(d.ymin!=null&&d.ymax!=null) spec.yrange=[d.ymin,d.ymax];
    if(p1&&p1.expr) spec.expr2=p1.expr;
    spec.marks=(d.points||[]).map(pt=>({x:+pt[0],y:+pt[1],label:String(pt[2]||"")})).filter(m=>isFinite(m.x)&&isFinite(m.y));
    const svg=plotSvg(spec); if(!svg) return "";
    return '<div class="ws-fig">'+svg+(d.caption?'<div class="ws-figcap">'+esc(d.caption)+'</div>':"")+'</div>';
  }catch(e){ return ""; }
}
function figHTML(fig){`,"diagramHtml adapter");

/* draw it on the on-screen + printed worksheet (right after the worked example) */
rep("        ${exp}${figHTML(s.figure)}",
    "        ${exp}${figHTML(s.figure)}${diagramHtml(s.diagram)}","worksheet render draws diagram");

/* draw it in the teacher packet worksheet section */
rep("      const ex=s.workedExample?'<div class=\"dpanel ex\" style=\"margin:0 0 10px\"><div class=\"plab\">Example</div><div class=\"pbody\">'+md(stripExampleLabel(s.workedExample))+'</div></div>':'';",
"      const ex=(s.workedExample?'<div class=\"dpanel ex\" style=\"margin:0 0 10px\"><div class=\"plab\">Example</div><div class=\"pbody\">'+md(stripExampleLabel(s.workedExample))+'</div></div>':'')+diagramHtml(s.diagram);","packet draws diagram");

/* screen CSS */
rep("/* ---- slide cards + presentation — flat Claude-design aesthetic (one restrained accent, no gradients) ---- */",
`.ws-fig{max-width:3in;margin:6px auto 10px;border:1px solid var(--line);border-radius:9px;padding:4px;background:#fff}
.ws-fig svg{display:block;width:100%;height:auto}
.ws-figcap{font-size:11px;color:var(--muted);text-align:center;margin-top:3px;font-family:ui-monospace,Consolas,monospace}
/* ---- slide cards + presentation — flat Claude-design aesthetic (one restrained accent, no gradients) ---- */`,"ws-fig screen CSS");

/* print CSS */
rep(".figsvg{text-align:center;margin:8px 0}.figsvg svg{max-width:100%;height:auto}",
".figsvg{text-align:center;margin:8px 0}.figsvg svg{max-width:100%;height:auto}\n.ws-fig{max-width:2.9in;margin:6px auto 9px;border:1px solid #D9DDF3;border-radius:8px;padding:4px;background:#fff;break-inside:avoid}.ws-fig svg{display:block;width:100%;height:auto}.ws-figcap{font-size:8.5pt;color:#5A6382;text-align:center;margin-top:2px;font-family:ui-monospace,Consolas,monospace}","ws-fig print CSS");

/* stronger visual-aids rule in the figures clause */
rep("Favor figures for graphs, geometry, and science diagrams. \"+",
"Favor figures for graphs, geometry, and science diagrams. VISUAL AIDS: whenever a section's topic is graphable (parent functions, transformations, vertex/intercepts, intervals, asymptotes, inequalities), STRONGLY prefer giving that section a drawn 'diagram' (the plots spec) — a labeled graph students reference while working; aim for at least ONE drawn diagram per worksheet on graphable topics. Use 'figure' svg only for non-function pictures. \"+","visual-aids rule");

fs.writeFileSync(F,s);
console.log("VISUALS: "+n+" edits");
