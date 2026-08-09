const fs=require("fs"),path=require("path");
const ROOT=path.join(__dirname,"..");
const data=eval("("+fs.readFileSync(path.join(ROOT,"prebaked-weeks.js"),"utf8").match(/window\.PREBAKED\s*=\s*([\s\S]*?);?\s*$/)[1]+")");
const w3mon=JSON.parse(fs.readFileSync(path.join(__dirname,"w3mon.json"),"utf8"));

const stub=(objective,bellRinger,agenda,assessment)=>({type:"worksheet",objective,bellRinger,agenda,assessment,
 script:[{min:5,title:"Bell ringer",do:"Post the retrieval warm-up.",options:[],say:""},
         {min:5,title:"Go over",do:"Work the bell ringer on the board.",options:[],say:""},
         {min:10,title:"Mini-lesson",do:"Teach today's addition (generate materials for the deck + notes).",options:[],say:""},
         {min:8,title:"Guided notes",do:"Fill the guided notes together.",options:[],say:""},
         {min:17,title:"Practice",do:"Worksheet / stations.",options:[],say:""},
         {min:3,title:"Exit ticket",do:"Collect at the door.",options:[],say:""}],
 notes:null,guidedNotes:null,video:null,videoPlacement:null,presentation:null,procedureExamples:null,worksheet:null,vocab:null,exitTicket:null,answerKey:null,extension:null,drawing:null});

data.precal3={
 teks:(data.precal&&data.precal.teks)||["P.2"],
 sped:(data.precal&&data.precal.sped)||"",
 ell:(data.precal&&data.precal.ell)||"",
 days:{
  Mon:w3mon,
  Tue:stub("Students will apply reflections and vertical stretches/compressions of parent functions.","Describe every shift of $y=\\sqrt{x+3}-1$.","Bell (5) · Go over (5) · Mini-lesson: reflections & stretches (10) · Notes (8) · Practice (17) · Exit (3)","Exit ticket on identifying a from a description."),
  Wed:stub("Students will combine shifts, reflections, and stretches, and write the equation of a transformed parent from its description or graph.","Write the equation: $|x|$ reflected over the x-axis, then up 4.","Bell (5) · Go over (5) · Mini-lesson: combining moves (10) · Notes (8) · Practice (17) · Exit (3)","Exit ticket: write one equation from a described combination."),
  Thu:stub("Students will graph transformed parent functions from scratch by tracking the key point and applying each move in order.","Sketch $y=-(x-2)^{2}+3$ — start from the vertex.","Bell (5) · Go over (5) · Mini-lesson: graphing from scratch (10) · Notes (8) · Practice (17) · Exit (3)","Exit ticket: one full sketch, labeled key point."),
  Fri:stub("Students will demonstrate mastery of transformations of parent functions in a mixed quiz-style check.","Two quick describes: $y=x^{3}-6$ and $y=\\dfrac{1}{x+1}$.","Bell (5) · Go over (5) · Station review (15) · Quiz-style check (8, graded) · Wrap (15)","Quiz-style check (4 problems, one per skill this week) graded for mastery.")
 }};
fs.writeFileSync(path.join(ROOT,"prebaked-weeks.js"),
 "/* Prebaked content — Pre-Calculus + Algebra II Week 2 (audited) + Pre-Cal Week 3 (Mon full, Tue-Fri plan-only). */\n"
 +"window.PREBAKED="+JSON.stringify(data,null,1)+";\n");
console.log("prebaked-weeks.js written with precal3");

/* seedCourses: _prebaked6 migration puts precal3 at week 3 */
let idx=fs.readFileSync(path.join(ROOT,"index.html"),"utf8");
const anchor=`      if(pc&&wk1){ cur.courseId=pc.id; cur.weekKey=wk1; landed="week"; }
      S._prebaked5=1;`;
if(!idx.includes(anchor)){console.log("SEED ANCHOR MISSING");process.exit(1);}
if(!idx.includes("_prebaked6")){
 idx=idx.replace(anchor,
`      if(pc&&wk1){ cur.courseId=pc.id; cur.weekKey=wk1; landed="week"; }
      S._prebaked5=1;`);
 // separate gate so users already on _prebaked5 still get week 3
 idx=idx.replace(`      S._prebaked5=1;
    }catch(e){}
  }`,
`      S._prebaked5=1;
    }catch(e){}
  }
  if(!S._prebaked6 && window.PREBAKED && window.PREBAKED.precal3){
    try{
      const wks=(typeof schoolWeeks==="function")?schoolWeeks():[];
      const wk3=wks[2]&&wks[2].key;
      const pc=find("Pre-Calculus","Precalculus");
      if(pc&&wk3&&!(S.plans[pc.id]&&S.plans[pc.id][wk3])){
        S.plans[pc.id]=S.plans[pc.id]||{};
        const w=window.PREBAKED.precal3;
        S.plans[pc.id][wk3]={teks:w.teks||[],sped:w.sped||"",ell:w.ell||"",days:JSON.parse(JSON.stringify(w.days))};
      }
      S._prebaked6=1;
    }catch(e){}
  }`);
 fs.writeFileSync(path.join(ROOT,"index.html"),idx);
 console.log("seedCourses _prebaked6 migration added");
}else console.log("skip: _prebaked6 already present");
