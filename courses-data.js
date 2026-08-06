/* Robert's real course templates — distilled from his Google Classroom catalog (Burnham Wood / Da Vinci).
   Used for: starting-week suggestions (the hard part), elective pacing, and generation context so the
   planner mirrors how HE actually teaches. Keyed by the TEKS-course name where one applies. */
window.COURSE_TEMPLATES = {
  "Principles of Applied Engineering": {
    periodsDefault: 2, fullYear: true,
    platform: "Autodesk Fusion (CAD) — project-based; the year targets the Autodesk Certified User (ACU) in Fusion certification. Front-load the non-project TEKS in weeks 1-3, then it's project-past-project in Fusion.",
    // Verified cert facts (Autodesk/Certiport, 2026) — kept so foundation + cert-prep weeks are accurate.
    cert: {
      name: "Autodesk Certified User (ACU) — Fusion",
      vendor: "Autodesk; delivered by Certiport (Pearson VUE)",
      format: "35-40 selected-response questions, 50 minutes, pass = 700/1000 (~70%)",
      cost: "~$83-94/exam (Certiport voucher or school site license); practice via GMetrix CertPREP",
      domains: ["Sketching","Drawing","Sculpt (Form)","Direct Modeling","Assembly Modeling","Advanced Modeling (Sweep/Loft/Boundary Fill/Split/Combine)","Part Modeling (Extrude/Fillet/Chamfer/Hole/Revolve/Pattern/Shell/Planes/Inspect)"],
      note: "User level has NO CAM/CNC domain (that is the ACP Design-for-Manufacturing exam). Each Fusion project block below builds toward one or more of these 7 domains."
    },
    // TEKS 19 TAC §127.781(d) — which strands are front-loaded vs. carried by the projects.
    teksFrontLoad: {
      foundational_weeks1to3: ["(d)(1) professional standards/employability","(d)(3) present findings & designs","(d)(4) safe tool use","(d)(5) technology progression & consequences","(d)(6) systems thinking + design process","(d)(9) teamwork","(d)(10) drafting/CAD on-ramp","(d)(11) engineering design process → real-world solutions"],
      programSpecific_coveredByProjects: ["(d)(2) components of engineering & technology systems","(d)(7) robotics/automation careers","(d)(8) electrical & mechanical systems careers"]
    },
    startWeeks: [
      "Week 1 — FOUNDATIONS BOOTCAMP (front-load the non-project TEKS so the rest of the year is pure project work): engineering as a discipline + History of Engineering; Engineering Core Values; shop/lab SAFETY and safe tool use [TEKS 127.781(d)(4)]; professional standards & employability skills [(d)(1)]; start the Engineering Design Notebook. Frame the whole year: every week is a project and you are all working toward the Autodesk Fusion ACU certification.",
      "Week 2 — ENGINEERING DESIGN PROCESS, applied [(d)(6),(d)(11)]: run the full EDP on a fast hands-on team build (Airplane/Tower challenge) [(d)(9)]; how technology progresses and its intended/unintended consequences [(d)(5)]. Introduce Autodesk Fusion (interface, navigation, first sketch) so CAD starts THIS week.",
      "Week 3 — TECHNICAL COMMUNICATION + CAD ON-RAMP [(d)(3),(d)(10)]: present the week-2 design (research findings + drawings + short deck); Fusion sketching -> first constrained part (Bottle / Paper Clip). Foundations done — from here it is project-past-project in Fusion."
    ],
    arc: [
      {unit:"Foundations Bootcamp (front-loaded TEKS)", weeks:3, teks:["(d)(1)","(d)(3)","(d)(4)","(d)(5)","(d)(6)","(d)(9)","(d)(11)"], items:["History of Engineering","Engineering Core Values","Shop/Lab Safety + safe tool use","Professional standards & employability","Engineering Design Process","Airplane/Tower team challenge","Design notebook","Intro to Autodesk Fusion"]},
      {unit:"Fusion Sketch & Part Modeling (ACU: Sketching, Part Modeling)", weeks:8, teks:["(d)(2)","(d)(10)","(d)(11)"], items:["Bottle","Paper Clip","Complex Bottle","Ice Cube Tray","Hex Nut","Door Stop","Light Bulb","Phone Case","Washer","Constraints & Construction Planes","Inspect/Measure"]},
      {unit:"Fusion Advanced Modeling & Sculpt (ACU: Sweep/Loft, Sculpt, Direct)", weeks:6, teks:["(d)(2)","(d)(8)","(d)(10)"], items:["Bike Handle","Auger/Spiral","Screwdriver","Dog Bowl","Sculpt/Form body","Press-Pull direct edits","Split & Combine"]},
      {unit:"Fusion Assemblies & Drawings (ACU: Assembly, Drawing)", weeks:5, teks:["(d)(2)","(d)(7)","(d)(8)","(d)(10)"], items:["Multi-part assembly + joints","Motion study","Interference check","Engineering drawing (base/section/detail views)","Title block & annotations"]},
      {unit:"ACU Certification Prep + Exam", weeks:3, teks:["(d)(1)","(d)(10)"], items:["GMetrix practice exam 1","Domain review (all 7)","GMetrix practice exam 2","Autodesk Fusion ACU exam"]},
      {unit:"Capstone — Open Design Challenge / InSPIRESS competition project", weeks:8, teks:["(d)(3)","(d)(6)","(d)(9)","(d)(11)"], items:["Open-ended design brief","EDP: research -> ideate -> CAD -> prototype -> iterate","Team project management","Final drawings + presentation","Competition submission (e.g., InSPIRESS)"]},
      {unit:"(Optional) Web Development — FreeCodeCamp (HTML/CSS)", weeks:6, teks:["(d)(2)"], items:["Kept from your prior sequence — now an optional/alternate track so Fusion starts early; slot in if time allows","Survey Form","Build a Gallery","Tribute Page","Cat Website","Ferris Wheel CSS Animation"]}
    ]
  },
  "Precalculus": {
    periodsDefault: 1, fullYear: true,
    platform: "CK-12.org — each topic maps to its CK-12 lesson, which IS the main assignment (practice + adaptive). Use Robert's own LaTeX/ATA sheets for in-class work.",
    ck12Main: true,
    note: "REAL sequence from Robert's Google Classroom (topic ORDER preserved). His actual run started late and ran behind (Jan–May, compressed, stopped at the Unit Circle), so dates are IGNORED — the order is re-paced EVENLY across the full ~33-week year and EXTENDED through graphing trig + analytic trig so it actually finishes Precalculus on time. Gaps in the Classroom (test/reteach/break jumps) are filled with review/buffer by the pacing map.",
    startWeeks: [
      "Week 1: Soft start + prerequisite diagnostic, then Function Families (parent functions) — guided notes + worked examples + worksheet. CK-12: Function Families.",
      "Week 2: Graphical Transformations; Point Notation & Function Operations — notes + practice.",
      "Week 3: Domain & Range; Maximums & Minimums; short Quiz 1."
    ],
    arc: [
      {unit:"Analyzing Functions", weeks:5, items:["Function Families","Graphical Transformations","Point Notation & Function Operations","Domain and Range","Maximums and Minimums","Symmetry","Increasing and Decreasing","Zeroes and Intercepts of Functions","Asymptotes and End Behavior","Continuity and Discontinuity","Function Composition","Inverses of Functions"]},
      {unit:"Factoring & Rational Expressions", weeks:3, items:["Factoring Review","Advanced Factoring","Rational Expressions","Polynomial Long & Synthetic Division","Solving Rational Equations"]},
      {unit:"Rational Functions", weeks:3, items:["Holes in Rational Functions","Zeroes of Rational Functions","Vertical Asymptotes","Horizontal & Slant Asymptotes","Graphing Rational Functions"]},
      {unit:"Exponential & Logarithmic Functions", weeks:4, items:["Exponential Functions","Properties of Exponents","Scientific Notation","Logarithmic Functions","Properties of Logs","Change of Base","Exponential & Logarithmic Equations"]},
      {unit:"Right-Triangle Trigonometry", weeks:3, items:["Special Right Triangles","Right Triangle Trigonometry","Law of Cosines","Law of Sines","Area of a Triangle"]},
      {unit:"The Unit Circle & Radian Measure", weeks:3, items:["The Unit Circle","Radian Measure & Arc Length","Reference Angles","Trig Values on the Unit Circle"]},
      {unit:"Graphing Trigonometric Functions", weeks:3, items:["Graphing Sine & Cosine","Amplitude, Period & Phase Shift","Graphing Tangent & Reciprocal Functions"]},
      {unit:"Analytic Trigonometry", weeks:3, items:["Fundamental Identities","Verifying Identities","Sum & Difference Formulas","Solving Trigonometric Equations"]},
      {unit:"Review & Final", weeks:2, items:["Spiral review","Final exam review","Cumulative final"]}
    ]
  },
  "Communication Applications": {
    periodsDefault: 1, fullYear: false, platform: "performance-based; rubrics + prompts",
    startWeeks: [
      "Week 1: Intro to Communication (verbal/nonverbal, listening); low-stakes icebreaker speech; norms.",
      "Week 2: Speech 2 — first graded speech: write a draft, then deliver (rubric introduced).",
      "Week 3: Begin Speech 3 (Persuasive) — structure + claim/appeal."
    ],
    arc: [
      {unit:"Intro to Communication", weeks:1, items:[]},
      {unit:"Speech 2 — first speech (draft + delivery)", weeks:2, items:[]},
      {unit:"Speech 3 — Persuasive", weeks:2, items:[]},
      {unit:"Speech 4", weeks:2, items:[]},
      {unit:"Speech 5", weeks:2, items:[]},
      {unit:"Speech 6", weeks:2, items:[]},
      {unit:"Shark Tank pitch presentation", weeks:2, items:[]},
      {unit:"TED Talk unit", weeks:3, items:[]}
    ]
  },
  "Career and College Exploration": {  // his "College & Career Readiness" — richest course
    periodsDefault: 3, fullYear: true, platform: "GoMerry (scholarships), SAT practice, Apply Texas",
    startWeeks: [
      "Week 1: Teacher Intro, Personality quiz, Holland Hexagon (RIASEC) response, College Plans So Far, Core Values poster, Choose a Career.",
      "Week 2: Career-choice presentation + begin Apply Texas essay Prompt A (rough draft).",
      "Week 3: Apply Texas Prompts B/C (read-aloud + peer review); start Resume building."
    ],
    arc: [
      {unit:"Career Exploration", weeks:2, items:["Personality quiz","Holland Hexagon (RIASEC)","Core Values poster","Choose a Career"]},
      {unit:"College Applications", weeks:3, items:["Apply Texas essays A/B/C (drafts, read-aloud, peer review)","Resume building + peer review","Major/career presentation"]},
      {unit:"Financial Aid & Cost of Living", weeks:4, items:["Scholarship applications (GoMerry)","Understanding Student Loans","Loan Calculations","Repayment","Cost-of-Living project (El Paso vs city)","City-comparison brochure"]},
      {unit:"SAT Prep", weeks:3, items:["SAT Practice Module 1 (Reading + Math)","SAT Practice Module 2","Grading"]},
      {unit:"Personal Finance", weeks:5, items:["Intro to Credit Cards","Compound Interest","Mortgages + Escrow","Credit effects","Car Buying & Ownership Costs","Bus vs Rideshare","Monthly Expenses Breakdown","Grocery List budgeting"]},
      {unit:"Insurance", weeks:2, items:["What Is Insurance & Why It Matters","Comparing Insurance Types","Insurance Flyer"]},
      {unit:"Retirement & Life Planning", weeks:2, items:["Retirement Planning","Clubs & Activities","Tutoring & Degree Plan","Food & Health"]},
      {unit:"Final Project — 'Your College' presentation", weeks:2, items:[]}
    ]
  },
  "Algebra II": {  // his Pre-AP Algebra 2
    periodsDefault: 1, fullYear: true, platform: "worksheets + CK-12",
    startWeeks: [
      "Week 1: Order of Operations + all-kinds Factoring review (notes + worked examples + worksheet).",
      "Week 2: Simplifying Rational Expressions; short factoring/fractions test review.",
      "Week 3: Absolute Value Functions & Transformations."
    ],
    arc: [
      {unit:"Order of Operations & Factoring review", weeks:2, items:[]},
      {unit:"Simplifying Rational Expressions", weeks:2, items:[]},
      {unit:"Absolute Value Functions & Transformations", weeks:3, items:[]},
      {unit:"Graphing Absolute Value Inequalities", weeks:2, items:[]},
      {unit:"Systems of Equations (graphing, inverse matrices)", weeks:3, items:["Solving Bivariate Systems with Inverse Matrices (CTE)"]},
      {unit:"Exponents (negative/zero, product/quotient)", weeks:2, items:[]},
      {unit:"Domain and Range", weeks:2, items:[]},
      {unit:"Quadratics", weeks:3, items:[]},
      {unit:"Polynomial & Rational Functions", weeks:3, items:[]},
      {unit:"Exponential & Logarithmic", weeks:3, items:[]}
    ]
  }
};
/* Non-TEKS-dropdown courses (kept for reference / future presets) */
window.COURSE_TEMPLATES_EXTRA = {
  "7th Grade Mathematics": { fullYear:true, startWeeks:["Week 1: routines + diagnostic; integer operations review","Week 2: rational number operations","Week 3: ratios & proportional relationships"] },
  "8th Grade Technology": { fullYear:false, startWeeks:["Week 1: Basics of using Word; create & upload a document","Week 2: Paragraph alignment & line spacing","Week 3: Headers, footers & page numbers; tables & lists"] }
};
