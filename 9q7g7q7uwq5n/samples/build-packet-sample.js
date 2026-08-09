const fs=require("fs"),path=require("path"),vm=require("vm");
const ROOT=path.join(__dirname,"..");
const idx=fs.readFileSync(path.join(ROOT,"index.html"),"utf8");

// window sandbox with deck engine loaded
const W={};
vm.runInNewContext(fs.readFileSync(path.join(ROOT,"deck-plot.js"),"utf8"),{window:W,globalThis:W,document:undefined});

const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const slice=(from,to)=>{const a=idx.indexOf(from);const b=idx.indexOf(to,a);if(a<0||b<0)throw new Error("slice fail: "+from);return idx.slice(a,b);};

const mdSrc=slice("function md(src=\"\"){","\n/* ---- Clean native print");
const stripSrc=slice("function stripExampleLabel(","\nfunction ");
const pkSrc=slice("const PACKET_CSS=","function openTeacherPacket");

const sandbox={window:W,esc,console,plotSvg:W.plotSvg};
vm.createContext(sandbox);
vm.runInContext(mdSrc,sandbox);
vm.runInContext(stripSrc,sandbox);
sandbox.md=sandbox.md; sandbox.slideEl=W.slideEl;
vm.runInContext(pkSrc+"; this.teacherPacketDoc=teacherPacketDoc;",sandbox);

// day data from upgraded prebake
const data=eval("("+fs.readFileSync(path.join(ROOT,"prebaked-weeks.js"),"utf8").match(/window\.PREBAKED\s*=\s*([\s\S]*?);?\s*$/)[1]+")");
const html=sandbox.teacherPacketDoc({name:"Pre-Calculus"},data.precal.days.Mon,"Mon","Aug 10");
fs.writeFileSync(path.join(__dirname,"packet-app.html"),html);
console.log("packet sample built:",Math.round(html.length/1024),"KB");
