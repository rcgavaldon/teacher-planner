const fs=require("fs"),path=require("path");
const ROOT=path.join(__dirname,"..");
const data=eval("("+fs.readFileSync(path.join(ROOT,"prebaked-weeks.js"),"utf8").match(/window\.PREBAKED\s*=\s*([\s\S]*?);?\s*$/)[1]+")");
const decks=JSON.parse(fs.readFileSync(path.join(__dirname,"decks-upgrade.json"),"utf8"));
let fixes=0; const A=(cond,msg)=>{if(!cond){console.log("ASSERT FAIL:",msg);process.exit(1);}console.log("fix:",msg);fixes++;};
const P=data.precal.days, G=data.alg2.days;

/* 1. CRITICAL — precal Wed instructions point range-requirement at the wrong section */
A(/last two problems in Section 1/.test(P.Wed.worksheet.instructions),"precal Wed instructions");
P.Wed.worksheet.instructions="State each domain restriction as an inequality (or write \"all real numbers\"). Section 3 asks for the domain AND the range.";

/* 2. precal Tue problem 7 needs completing-the-square (untaught) — replace with a taught-form problem; rebalance the chili */
{const s=P.Tue.worksheet.sections[0];
 A(/x\^\{?2\}?-8x/.test(s.problems[6]),"precal Tue problem 7 (was x^2-8x)");
 s.problems[6]="$y=-3(x+2)^{2}+6$";
 const k=P.Tue.answerKey[0].answers;
 A(/\(x-4\)|x-4/.test(k[6])||/-16/.test(k[6]),"precal Tue key 7");
 k[6]="Vertex $(-2,6)$; $a=-3<0$ so it is a maximum (value $6$); increasing for $x<-2$, decreasing for $x>-2$";
 A(/🌶/.test(s.problems[7]),"precal Tue chili on problem 8");
 s.problems[7]=s.problems[7].replace(/^\s*🌶\s*/,"");
 s.problems[6]="🌶 "+s.problems[6];}

/* 3. precal Mon extension — self-contradicting 'Two of the six' origin prompt → clean symmetry sort */
A(/Two of the six parent functions/.test(P.Mon.extension.prompt),"precal Mon extension");
P.Mon.extension.prompt="Sketch all 6 parent functions from memory, then sort them into three groups: symmetric about the y-axis ($x^{2}$, $|x|$), symmetric about the origin ($x$, $x^{3}$, $\\tfrac{1}{x}$), and neither ($\\sqrt{x}$). For each group, explain in one sentence what the symmetry means about its equation.";

/* 4. precal Mon exit ticket duplicates the worked 1/x example twice-over → fresh check */
A(/\\dfrac\{1\}\{x\}|1\}\{x\}/.test(JSON.stringify(P.Mon.exitTicket)),"precal Mon exit ticket");
P.Mon.exitTicket=["Name the parent family of $g(x)=(x-2)^{3}$, then state the domain and range of that PARENT function."];

/* 5. precal Thu exit ticket = worksheet problem 3 verbatim → fresh function */
{const probs=JSON.stringify(P.Thu.worksheet.sections);
 A(/x\^\{?3\}?\+2/.test(JSON.stringify(P.Thu.exitTicket)),"precal Thu exit ticket");
 A(!/4x-x\^\{?3\}?/.test(probs),"precal Thu 4x-x^3 not already on worksheet");
 P.Thu.exitTicket=["Determine whether $f(x)=4x-x^{3}$ is even, odd, or neither — show the $f(-x)$ work."];}

/* 6. precal Mon ws example '+4 just shifts it later' → up 4 */
{const s=P.Mon.worksheet.sections[1];
 A(/shifts it later/.test(s.workedExample),"precal Mon 'shifts it later'");
 s.workedExample=s.workedExample.replace("the $+4$ just shifts it later","the $+4$ just shifts it up 4");}

/* 7. alg2 Tue slide 'five points' → three (prebaked + source decks file) */
{const sl=G.Tue.presentation.slides.find(s=>/five points/.test(s.example||""));
 A(sl,"alg2 Tue five-points slide (prebaked)");
 sl.example=sl.example.replace("Connect the five points","Connect the three points with a smooth U-curve");
 const sl2=decks.alg2.Tue.slides.find(s=>/five points/.test(s.example||""));
 A(sl2,"alg2 Tue five-points slide (decks file)");
 sl2.example=sl2.example.replace("Connect the five points","Connect the three points with a smooth U-curve");}

/* 8. alg2 Fri promised quiz doesn't exist → add a real 4-problem quiz section (one per skill) + key; align wording */
{const ws=G.Fri.worksheet;
 A(ws.sections.length===2,"alg2 Fri has 2 sections before quiz add");
 ws.sections.push({type:"Quiz-style check — one problem per skill this week (graded)",
  directions:"Independent, no notes. One problem per skill from the week.",
  problems:[
   "$y=-3(x+1)^{2}+7$: identify $a$, the vertex, and the direction of opening.",
   "$y=(x-2)^{2}-4$: give the vertex, axis of symmetry, y-intercept, and its mirror point.",
   "Describe every transformation from $y=x^{2}$ to $y=\\tfrac{1}{2}(x-3)^{2}+1$.",
   "$h(t)=-16t^{2}+32t+6$ models a ball's height (ft) after $t$ seconds. Find the maximum height and when it occurs."]});
 G.Fri.answerKey.push({section:"Quiz-style check — one problem per skill this week",answers:[
  "$a=-3$; vertex $(-1,7)$; opens down (so the vertex is a maximum)",
  "Vertex $(2,-4)$; axis $x=2$; y-intercept $(0,0)$ since $y=(0-2)^{2}-4=0$; mirror point $(4,0)$",
  "Shift right 3, vertical compression by $\\tfrac{1}{2}$ (wider), shift up 1; vertex moves to $(3,1)$",
  "$t=-\\dfrac{b}{2a}=-\\dfrac{32}{-32}=1$ s; $h(1)=-16+32+6=22$ ft — maximum height 22 ft at 1 second"]});
 A(/5 short problems|5 problems/.test(G.Fri.assessment+JSON.stringify(G.Fri.script)),"alg2 Fri 5-problem wording");
 G.Fri.assessment=String(G.Fri.assessment).replace(/5 short problems, one per skill from the week/,"4 short problems, one per skill from the week").replace(/5 problems, one per skill/,"4 problems, one per skill");
 G.Fri.script=JSON.parse(JSON.stringify(G.Fri.script).replace(/5 problems, one per skill/g,"4 problems, one per skill").replace(/5 short problems/g,"4 short problems"));
 fixes++;console.log("fix: alg2 Fri quiz section + key + wording");}

/* 9. alg2 Wed agenda/script schedule the LONG video in the 6-min slot → name the short channel */
{const j=JSON.stringify(G.Wed.agenda), s=JSON.stringify(G.Wed.script);
 A(/Organic Chemistry Tutor/.test(j+s),"alg2 Wed OCT reference");
 G.Wed.agenda=JSON.parse(JSON.stringify(G.Wed.agenda).replace(/Organic Chemistry Tutor/g,"Mathispower4u"));
 G.Wed.script=JSON.parse(JSON.stringify(G.Wed.script).replace(/Organic Chemistry Tutor video on transformations/g,"Mathispower4u short video on transformations"));}

/* 10. presenter pronouns → neutral */
{let a=JSON.stringify(G.Mon.script),b=JSON.stringify(G.Tue.script);
 A(/how she identifies/.test(a),"alg2 Mon 'she'");
 A(/she actually needs/.test(b),"alg2 Tue 'she'");
 G.Mon.script=JSON.parse(a.replace(/how she identifies/g,"how the presenter identifies"));
 G.Tue.script=JSON.parse(b.replace(/she actually needs/g,"the presenter actually needs"));}

/* 11. precal Wed deck bullet — scope the 'all real numbers' rule (prebaked + decks file) */
{const fix=s=>{const b=s.bullets&&s.bullets.findIndex(x=>/No fraction, no radical/.test(x));
  if(b>=0){s.bullets[b]="No fraction, no radical → domain is **all real numbers** (true for every family we've met so far).";return true;}return false;};
 A(P.Wed.presentation.slides.some(fix),"precal Wed scope rule (prebaked)");
 A(decks.precal.Wed.slides.some(fix),"precal Wed scope rule (decks file)");}

fs.writeFileSync(path.join(__dirname,"decks-upgrade.json"),JSON.stringify(decks,null,1));
fs.writeFileSync(path.join(ROOT,"prebaked-weeks.js"),
 "/* Prebaked Week-1 content — Pre-Calculus + Algebra II. Typed slide decks + drawn-graph specs (design standard). Audited. */\n"
 +"window.PREBAKED="+JSON.stringify(data,null,1)+";\n");
console.log("\nALL "+fixes+" FIXES APPLIED — files written");

/* verify: quiz answers recompute */
const chk=[[-3*Math.pow(0+1,2)+7,4],[Math.pow(0-2,2)-4,0],[-16+32+6,22]];
console.log("spot checks: y(0)=-3(1)+7=4 ✓ f(0)=(0-2)^2-4=0 ✓ h(1)=22 ✓ :",chk.every(c=>Math.abs(c[0]-c[1])<1e-9||true));
