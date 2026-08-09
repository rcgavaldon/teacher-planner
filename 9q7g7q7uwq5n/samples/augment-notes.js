const fs=require("fs"),path=require("path");
const ROOT=path.join(__dirname,"..");
const data=eval("("+fs.readFileSync(path.join(ROOT,"prebaked-weeks.js"),"utf8").match(/window\.PREBAKED\s*=\s*([\s\S]*?);?\s*$/)[1]+")");
const P=data.precal.days, G=data.alg2.days;

/* per-day: formulas bank + extra typed examples (existing worked becomes examples[0]) */
const AUG={
 precal:{
  Mon:{formulas:[
    {name:"Linear",formula:"$f(x)=x$"},{name:"Quadratic",formula:"$f(x)=x^{2}$"},{name:"Cubic",formula:"$f(x)=x^{3}$"},
    {name:"Absolute value",formula:"$f(x)=|x|$"},{name:"Square root",formula:"$f(x)=\\sqrt{x}$"},{name:"Reciprocal",formula:"$f(x)=\\dfrac{1}{x}$"}],
   label0:"Type 1 — identify family, domain, range",
   extra:[{label:"Type 2 — shifted equation, name the parent",
     prompt:"Name the ORIGINAL parent family of $g(x)=(x-1)^{2}+3$.",
     steps:["The $-1$ and $+3$ only {{shift the graph|3cm}} — they never change the family.","The core operation is {{squaring|2.5cm}}, so the parent is the {{quadratic|2.5cm}} family: $f(x)=x^{2}$."],
     graph:{kind:"parabola",a:1,b:-2,c:4,domain:[-2,4],marks:[{x:1,y:3,label:"(1, 3)"}]},
     answer:"Quadratic — $g$ is $x^{2}$ shifted right 1, up 3."}]},
  Tue:{formulas:[
    {name:"Vertex form",formula:"$y=a(x-h)^{2}+k$ → vertex $(h,k)$"},
    {name:"Opens",formula:"up if $a>0$ (min), down if $a<0$ (max)"},
    {name:"Intervals",formula:"split at $x=h$"}],
   label0:"Type 1 — max/min, vertex, and intervals",
   graph0:{kind:"parabola",a:1,b:-4,c:1,domain:[-1,5],marks:[{x:2,y:-3,label:"(2, −3)"}]}},
  Wed:{formulas:[
    {name:"Denominator rule",formula:"set it $\\neq 0$"},
    {name:"Radicand rule",formula:"set it $\\ge 0$"}],
   label0:"Type 2 — radical restriction",
   graph0:{kind:"sqrt",a:1,h:2,k:0,domain:[0,10],marks:[{x:2,y:0,label:"(2, 0)"}]},
   extra:[{label:"Type 1 — denominator restriction",
     prompt:"Find the domain of $f(x)=\\dfrac{1}{x-5}$.",
     steps:["A denominator can never be zero: set $x-5$ {{$\\neq 0$|2cm}}.","Solve: the domain is $x$ {{$\\neq 5$|2cm}} — every other real number works."],
     answer:"Domain: $x\\neq 5$."}]},
  Thu:{formulas:[
    {name:"Even test",formula:"$f(-x)=f(x)$ (mirror over y-axis)"},
    {name:"Odd test",formula:"$f(-x)=-f(x)$ (180° about origin)"}],
   label0:"Type 1 — even, odd, or neither",
   graph0:{kind:"parabola",a:1,b:0,c:-3,domain:[-4,4]}},
  Fri:{formulas:[
    {name:"1 Family",formula:"match the core operation"},
    {name:"2 Vertex",formula:"$(h,k)$, max/min, intervals"},
    {name:"3 Domain/Range",formula:"denominator $\\neq0$, radicand $\\ge0$"},
    {name:"4 Symmetry",formula:"test $f(-x)$"}],
   label0:"All 4 checks on one function",
   graph0:{kind:"parabola",a:-1,b:2,c:3,domain:[-3,5],marks:[{x:1,y:4,label:"max (1, 4)"}]}}
 },
 alg2:{
  Mon:{formulas:[
    {name:"Vertex form",formula:"$y=a(x-h)^{2}+k$ → vertex $(h,k)$"},
    {name:"Direction",formula:"$a>0$ up (min) · $a<0$ down (max)"},
    {name:"Width",formula:"$|a|>1$ narrow · $0<|a|<1$ wide"}],
   label0:"Identify a, the vertex, and direction",
   graph0:{kind:"parabola",a:2,b:-12,c:19,domain:[0,6],marks:[{x:3,y:1,label:"(3, 1)"}]},
   extra:[{label:"Negative a — vertex is a maximum",
     prompt:"For $y=-(x+2)^{2}+5$: identify $a$, the vertex, and the direction.",
     steps:["$a=$ {{$-1$|1.5cm}}, which is negative → opens {{down|2cm}}.","Inside is $(x+2)$, so $h=$ {{$-2$|1.5cm}}; $k=$ {{$5$|1.5cm}}.","Vertex {{$(-2,5)$|2cm}} — the {{maximum|2.5cm}} point of the graph."],
     graph:{kind:"parabola",a:-1,b:-4,c:1,domain:[-6,2],marks:[{x:-2,y:5,label:"max (−2, 5)"}]},
     answer:"$a=-1$; vertex $(-2,5)$; opens down (maximum)."}]},
  Tue:{formulas:[
    {name:"Vertex",formula:"$(h,k)$ from vertex form"},
    {name:"Axis of symmetry",formula:"$x=h$"},
    {name:"y-intercept",formula:"$f(0)$, then mirror it across the axis"}],
   label0:"Graph with the three anchors",
   graph0:{kind:"parabola",a:1,b:-6,c:7,domain:[-1,7],marks:[{x:3,y:-2,label:"(3, −2)"},{x:0,y:7,label:"(0, 7)"},{x:6,y:7,label:"(6, 7)"}]}},
  Wed:{formulas:[
    {name:"Horizontal",formula:"$(x-h)$ right $h$ · $(x+h)$ left $h$"},
    {name:"Vertical",formula:"$+k$ up · $-k$ down"},
    {name:"Flip / stretch",formula:"$a<0$ reflects; $|a|$ stretches or compresses"}],
   label0:"Describe every transformation",
   graph0:{kind:"parabola",a:-2,b:-4,c:1,domain:[-4,2],marks:[{x:-1,y:3,label:"(−1, 3)"}]}},
  Thu:{formulas:[
    {name:"Vertex x",formula:"$x=-\\dfrac{b}{2a}$ (standard form)"},
    {name:"Max or min",formula:"$a<0$ → max · $a>0$ → min; the VALUE is $k$"}],
   label0:"Max/min from a real-world model",
   graph0:{kind:"parabola",a:-16,b:64,c:5,domain:[0,4.2],marks:[{x:2,y:69,label:"max (2, 69)"}]}},
  Fri:{formulas:[
    {name:"Vertex form",formula:"$y=a(x-h)^{2}+k$"},
    {name:"Anchors",formula:"vertex · axis $x=h$ · $f(0)$ + mirror"},
    {name:"Standard form vertex",formula:"$x=-\\dfrac{b}{2a}$"}],
   label0:"Everything on one function",
   graph0:{kind:"parabola",a:-2,b:4,c:6,domain:[-2,4],marks:[{x:1,y:8,label:"max (1, 8)"},{x:0,y:6,label:"(0, 6)"}]}}
 }
};

/* mark verification for every graph used above */
const FN={parabola:s=>x=>s.a*x*x+(s.b||0)*x+(s.c||0),sqrt:s=>x=>(x-(s.h||0))>=0?(s.a||1)*Math.sqrt(x-(s.h||0))+(s.k||0):NaN};
let checked=0,bad=0;
const checkG=(g,where)=>{if(!g||!g.marks)return;const f=FN[g.kind];if(!f)return;
  for(const mk of g.marks){checked++;const y=f(g)(mk.x);if(!(Math.abs(y-mk.y)<1e-6)){bad++;console.log("OFF-CURVE",where,JSON.stringify(mk),"->",y);}}};

let days=0;
for(const ck of ["precal","alg2"]){
  const D=ck==="precal"?P:G;
  for(const day of Object.keys(AUG[ck])){
    const m=D[day], a=AUG[ck][day], gn=m.guidedNotes;
    if(!gn||!gn.worked){console.log("MISSING gn.worked",ck,day);process.exit(1);}
    gn.formulas=a.formulas;
    const ex0={label:a.label0,prompt:gn.worked.prompt,steps:gn.worked.steps};
    if(a.graph0){ex0.graph=a.graph0;checkG(a.graph0,ck+" "+day+" ex0");}
    gn.examples=[ex0].concat(a.extra||[]);
    (a.extra||[]).forEach((e,i)=>checkG(e.graph,ck+" "+day+" extra"+i));
    delete gn.worked;
    days++;
  }
}
console.log("days augmented:",days,"| graph marks checked:",checked,"bad:",bad);
if(bad)process.exit(1);
fs.writeFileSync(path.join(ROOT,"prebaked-weeks.js"),
 "/* Prebaked Week-1 content — Pre-Calculus + Algebra II. Typed decks + guided-notes v2 (formula bank, typed examples). Audited. */\n"
 +"window.PREBAKED="+JSON.stringify(data,null,1)+";\n");
console.log("prebaked-weeks.js written");
