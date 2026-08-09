const fs=require("fs"),path=require("path");
const F=path.join(__dirname,"..","index.html");
let s=fs.readFileSync(F,"utf8");
let n=0;const rep=(from,to,label,count)=>{const c=s.split(from).length-1;
  if(c===0&&s.includes(to)){console.log("skip:",label);return;}
  if(c!==(count||1)){console.log("ASSERT FAIL ("+c+"x): "+label);process.exit(1);}
  s=s.split(from).join(to);n++;console.log("ok:",label);};

/* 1. science detector */
rep('function courseIsEng(co){return /engineer|robotic|\\bcad\\b|drafting/i.test(((co&&co.teks)||"")+" "+((co&&co.name)||""));}',
'function courseIsEng(co){return /engineer|robotic|\\bcad\\b|drafting/i.test(((co&&co.teks)||"")+" "+((co&&co.name)||""));}\nfunction courseIsSci(co){return /biolog|anatom|physiolog|chemistr|physics|aquatic|environmental|integrated physics|\\bipc\\b|\\bscience\\b/i.test(((co&&co.teks)||"")+" "+((co&&co.name)||""));}',
"courseIsSci detector");

/* 2. notes: configurable box label + top figure */
rep('if((gn.formulas||[]).length){h+=\'<div class="gn-box gn-formulas"><span class="gn-flab">Formula bank</span>\'',
'if((gn.formulas||[]).length){h+=\'<div class="gn-box gn-formulas"><span class="gn-flab">\'+esc(gn.boxLabel||"Formula bank")+\'</span>\'',
"notes box label");
rep('+gn.formulas.map(f=>\'<span class="gn-f"><b>\'+esc(f.name||"")+\':</b> \'+gnLine(f.formula||"",true)+\'</span>\').join("")+\'</div>\';}',
'+gn.formulas.map(f=>\'<span class="gn-f"><b>\'+esc(f.name||"")+\':</b> \'+gnLine(f.formula||"",true)+\'</span>\').join("")+\'</div>\';}\n  if(gn.figure&&/^\\s*<svg/i.test(gn.figure)) h+=\'<div class="gn-figbox">\'+gn.figure+(gn.figureCaption?\'<div class="gn-figcap">\'+esc(gn.figureCaption)+\'</div>\':"")+\'</div>\';',
"notes top figure");

/* 3. example header uses label; example figure (svg) supported */
rep('    h+=\'<div class="gn-sec">Example \'+(exs.length>1?(i+1):"")+(w.label?\' · \'+esc(w.label):"")+\'</div>\';\n    h+=\'<div class="gn-ex">\'+(w.graph?\'<span class="gn-fig">\'+plotSvg(w.graph)+\'</span>\':"")',
'    h+=\'<div class="gn-sec">\'+(w.label?esc(w.label):("Example "+(i+1)))+\'</div>\';\n    h+=\'<div class="gn-ex">\'+(w.figure&&/^\\s*<svg/i.test(w.figure)?\'<span class="gn-fig">\'+w.figure+\'</span>\':(w.graph?\'<span class="gn-fig">\'+plotSvg(w.graph)+\'</span>\':""))',
"example label + figure");

/* 4. youTry label configurable */
rep('const yt=gn.youTry||[];\n  if(yt.length){h+=\'<div class="gn-sec">You try</div>\';',
'const yt=gn.youTry||[];\n  if(yt.length){h+=\'<div class="gn-sec">\'+esc(gn.youTryLabel||"You try")+\'</div>\';',
"youTry label");

/* 5. GN_CSS: figbox styling (append after the gn-formulas rule) */
rep('.gn-formulas{display:flex;flex-wrap:wrap;gap:3px 16px;background:#F4F5FC;align-items:baseline}',
'.gn-formulas{display:flex;flex-wrap:wrap;gap:3px 16px;background:#F4F5FC;align-items:baseline}.gn-figbox{margin:6px 0;border:1.4px solid #1B2350;border-radius:225px 15px 255px 15px/15px 255px 15px 225px;padding:6px 6px 4px;background:#fff;text-align:center}.gn-figbox svg{max-width:100%;height:auto;max-height:2.1in}.gn-figcap{font-size:8.5pt;color:#5A6382;margin-top:2px;font-family:ui-monospace,Consolas,monospace}',
"GN_CSS figbox");

/* 6. SCIENCE notes rule + selector */
rep('const NOTES_V2_RULE = ',
'const SCI_NOTES_RULE = "SCIENCE MODE (this is a science course, NOT math): the guided notes are the CONCEPT + VOCABULARY BACKBONE that the quiz and unit test are built straight from — there are NO worked numeric examples and NO formula bank. In guidedNotes set boxLabel to \\"Word bank\\" and fill \\"formulas\\" as term:short-meaning pairs of the day\'s must-know words; give rich \\"vocab\\" with student-friendly definitions that cloze {{blank}} the key term; make \\"examples\\" into CONCEPT explanations (label each by its idea, e.g. \\"Levels of organization\\"; the steps are 2-4 short sentences that BUILD the idea with cloze {{blanks}} on the terms/functions students must recall); attach a labeled \\"figure\\" as a simple inline <svg> schematic (a feedback loop, an organization pyramid, a labeled simple structure) or the literal \\"GRID\\" sketch box to a concept when a picture helps, and optionally a top-level guidedNotes.figure; set youTryLabel to \\"Check your understanding\\" and make youTry 2-3 short recall questions. The WORKSHEET is a RECAP/UNDERSTANDING sheet (label a diagram, match term to function, 2-3 short explain/why prompts, one apply-to-a-scenario) — 6-9 items, NOT computation; the CK-12 lesson stays the graded online recap. "; function notesRuleFor(co){return (typeof courseIsSci===\"function\"&&courseIsSci(co))?SCI_NOTES_RULE:NOTES_V2_RULE;}\nconst NOTES_V2_RULE = ',
"SCI_NOTES_RULE + notesRuleFor");

/* 7. route the three generators through notesRuleFor(co) */
rep("CONTENT REQUIREMENTS: ${CONTENT_SPEC} ${NOTES_V2_RULE}","CONTENT REQUIREMENTS: ${CONTENT_SPEC} ${notesRuleFor(co)}","genMaterials rule");
rep("CONTENT FOR EACH DAY: ${CONTENT_SPEC} ${NOTES_V2_RULE}","CONTENT FOR EACH DAY: ${CONTENT_SPEC} ${notesRuleFor(co)}","genWeek rule");
rep("Clean LaTeX in $...$. Return ONLY JSON.\n\n${NOTES_V2_RULE}","Clean LaTeX in $...$. Return ONLY JSON.\n\n${notesRuleFor(co)}","rebuild rule");

/* 8. genTest: science-aware voice + item style */
rep("a Texas HS math teacher writing a ${label} for ${co.name}.","a Texas HS ${courseIsSci(co)?\"science\":\"math\"} teacher writing a ${label} for ${co.name}.","genTest teacher voice");
rep("so the bubble answer sheet can be scan-graded. Make distractors reflect the classic mistakes",
"so the bubble answer sheet can be scan-graded.${courseIsSci(co)?\" SCIENCE: each item tests a definition, a structure-to-function link, a diagram label, or a cause/effect idea drawn straight from the unit's vocabulary and concepts; distractors are common misconceptions.\":\"\"} Make distractors reflect the classic mistakes",
"genTest science items");

fs.writeFileSync(F,s);
console.log("\\nSCIENCE MODE: "+n+" edits");
