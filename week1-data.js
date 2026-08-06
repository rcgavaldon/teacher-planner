/* week1-data.js — the LOCKED "soft start" Week 1, same shape for every class.
   Low teacher effort: present the deck, hand out the activity, students work.
   Light per-subject flavor (math / science / english / history / generic).
   Real content starts Monday of Week 2. window.WEEK1(name, subject) -> {Mon..Fri}. */
(function(g){
  const VOCAB={
    math:[["Variable","a letter that stands for a number that can change"],["Function","a rule where each input gives exactly one output"],["Equation","a math sentence saying two things are equal"],["Graph","a picture of how two things are related"],["Slope","how steep a line is — its rate of change"],["Solution","the value that makes an equation true"]],
    science:[["Hypothesis","a testable guess about why something happens"],["Variable","the thing you change or measure in a test"],["Data","the measurements you collect"],["Energy","the ability to cause change or do work"],["Cell","the smallest living building block"],["Model","a simpler stand-in that helps explain something real"]],
    english:[["Theme","the big idea or message of a text"],["Claim","the point you are arguing"],["Evidence","the proof you use to back a claim"],["Tone","the writer's attitude toward the topic"],["Audience","who the writing is for"],["Revise","to re-see and improve your draft"]],
    history:[["Primary source","a record from someone who was there"],["Cause","the reason something happened"],["Effect","the result of an event"],["Evidence","the proof behind a claim about the past"],["Timeline","events placed in the order they happened"],["Perspective","the point of view someone brings"]],
    generic:[["Goal","what you are working toward"],["Effort","the work you can see"],["Feedback","information that helps you improve"],["Routine","the steps we repeat every day"],["Growth","getting better through practice"],["Focus","putting your attention on one thing"]]
  };
  const READY={
    math:{title:"Show what you know — numbers warm-up",dir:"No grade — just show your thinking. Try each; if stuck, write what you DO know.",probs:["What is 3/4 of 20?","Simplify: 2 + 3 × 4","A pizza has 8 slices; you eat 3. What fraction is left?","A $20 shirt is 10% off — what do you pay?","Which is bigger: 0.6 or 2/3? Explain how you know."]},
    science:{title:"Observe & wonder",dir:"Look at the picture/demo on the board. Write what you OBSERVE, then what you WONDER. No wrong answers.",probs:["List 3 things you observe.","Write 2 questions you wonder about.","What might happen if we changed one thing?","Have you seen anything like this before? Where?"]},
    english:{title:"Read & react",dir:"Read the short passage on the board. React honestly — no wrong answers.",probs:["In one sentence, what is this about?","Which word or line stood out? Why?","How did it make you feel?","What's one question you'd ask the writer?"]},
    history:{title:"See, think, wonder",dir:"Look at the image/quote on the board. No grade — just react.",probs:["What do you SEE? (list 3 details)","What do you THINK is going on?","What does it make you WONDER?","What time or place do you think this is from?"]},
    generic:{title:"Show what you know",dir:"No grade — just show your thinking on today's warm-up.",probs:["What are you already good at?","Something new you want to learn this year?","When you get stuck, what helps you most?","Describe how you learn best."]}
  };
  const S=(type,heading,bullets)=>({type:type,heading:heading,bullets:bullets});
  g.WEEK1=function(name,subject){
    subject=VOCAB[subject]?subject:"generic";
    const vocab=VOCAB[subject], ready=READY[subject];
    const Mon={ type:"intro", locked:true,
      objective:"Students learn how the class runs (procedures + Core 4) and share who they are, setting a positive tone for the year.",
      hook:"New room, new you. Today's only job: learn how we roll — and let me get to know you.",
      agenda:"Welcome + seats (5) · Syllabus walkthrough (12) · All About Me (18) · Share out (7) · Exit goal (3)",
      assessment:"Exit slip: one goal for this class this year.",
      script:[
        {min:5,title:"Welcome & seats",do:"Greet at the door; hand each student the syllabus + the All-About-Me sheet as they find their seat.",options:[],say:"Find your name, take a seat — we start in two minutes."},
        {min:12,title:"Syllabus walkthrough",do:"Present the welcome deck: how every class runs, phones, Core 4, tutoring, grading.",options:["Have students highlight the two rules they think matter most"],say:"Two rules make this class easy: phone up, work shown."},
        {min:18,title:"All About Me",do:"Students fill the All-About-Me sheet on their own; circulate and learn names.",options:["Play low music; let them add a doodle"],say:"No wrong answers — I just want to know you."},
        {min:7,title:"Share out",do:"3–4 volunteers share one answer.",options:[],say:"Who's got a fun one?"},
        {min:3,title:"Exit goal",do:"Collect the one-goal exit slip at the door.",options:[],say:"One goal for this class — write it, hand it to me."}
      ],
      presentation:{kind:"launch",title:"Welcome to "+name,slides:[
        S("hook","Welcome to "+name,["New room, new year, new you.","Mr. Gavaldon · Da Vinci School for Science & Arts.","Today: how we roll, and who you are."]),
        S("define","How every class runs",["Seat → **phone up** → bellwork → we go over it → new topic → you try → work → exit ticket.","Same routine every day, so you always know what to do."]),
        S("define","The Core 4",["Respect · Responsibility · Quality of Work · Quality of Self.","Short version: **effort you can see.**"]),
        S("define","How you win here",["Show your work — that's how it sticks.","Phone up, every day.","Fail a test → one week of tutoring so you don't fall behind."]),
        S("roadmap","This year in "+name,["We build big ideas step by step, easy to hard.","You already know more than you think.","By June you'll surprise yourself."])
      ]},
      worksheet:{title:"All About Me",instructions:"Answer in full sentences — no wrong answers.",scannable:false,sections:[
        {type:"Getting to know you",space:"l",directions:"Tell me about you.",problems:[
          "What do you want to be called?",
          "Something you're good at (in or out of school).",
          "One goal for this class this year.",
          "How do you learn best — seeing, hearing, or doing? Give an example.",
          "One thing about you I should know.",
          "If this class had a theme song, what would it be?"
        ]}
      ]},
      exitTicket:["Write ONE goal for this class this year."]
    };
    const Tue={ type:"activity", locked:true,
      objective:"Students practice the daily routine and build community through a team activity.",
      hook:"Yesterday you met the class. Today you meet each other.",
      agenda:"Bellwork routine (6) · Procedures recap (8) · Find Someone Who (22) · Debrief (6) · Exit (3)",
      script:[
        {min:6,title:"First real bellwork",do:"Post a fun would-you-rather; students practice the start routine (seat, phone up, answer).",options:[],say:"This is exactly how every day starts."},
        {min:8,title:"Procedures recap",do:"Quick deck: transitions, restroom, turning in work, tutoring days.",options:["Cold-call the 8-step routine"],say:"When you know the routine, class runs itself."},
        {min:22,title:"Find Someone Who",do:"Hand out the bingo grid; students walk and collect a DIFFERENT signature per square.",options:["Bragging rights for the first full grid"],say:"Different person per square — go meet someone new."},
        {min:6,title:"Debrief",do:"Share a few surprising finds; connect to respect + community.",options:[],say:"This is the room we're building all year."},
        {min:3,title:"Exit",do:"Exit slip at the door.",options:[],say:"One classmate, one new fact."}
      ],
      presentation:{kind:"build",title:"How we roll",slides:[
        S("define","Daily routine, locked in",["Seat → phone up → bellwork → go over → new topic → you try → work → exit.","We practice it until it's automatic."]),
        S("wedo","Today: meet the room",["Everyone signs a different square.","Respect = listen, include, keep it kind."])
      ]},
      worksheet:{title:"Find Someone Who…",instructions:"Get a DIFFERENT classmate to sign each square — full name, and it must be true.",scannable:false,sections:[
        {type:"Human bingo",space:"m",directions:"One signature per person — go meet someone new.",problems:[
          "…has been to another state or country",
          "…plays a sport or an instrument",
          "…has a pet (what kind?)",
          "…likes the same music as you",
          "…can say hello in a third language",
          "…has the same favorite food as you",
          "…is nervous OR excited about this class",
          "…did something fun this summer"
        ]}
      ]},
      exitTicket:["Name one classmate you learned something new about."]
    };
    const Wed={ type:"activity", locked:true,
      objective:"Students preview the course's biggest ideas through a low-stakes word activity that sparks curiosity.",
      hook:"Here are the words you'll OWN by June. Let's see what you already guess.",
      agenda:"Bellwork (5) · Year at a glance (8) · Word preview (25) · Reveal (5) · Exit (2)",
      script:[
        {min:5,title:"Bellwork",do:"Post one course word; students guess what it means.",options:[],say:"Guess — we fix it together."},
        {min:8,title:"Year at a glance",do:"Present the roadmap: the big units, in order.",options:[],say:"This is the map for our whole year."},
        {min:25,title:"Word preview",do:"Hand out the word sheet; students write their best guess for each term.",options:["Pairs allowed; make it a race to the closest guess"],say:"No wrong guesses — you're activating what you know."},
        {min:5,title:"Reveal",do:"Reveal the real meanings (answer key); students star the ones they nailed.",options:[],say:"Star the ones you got close on."},
        {min:2,title:"Exit",do:"Exit slip.",options:[],say:"Which word are you most curious about?"}
      ],
      presentation:{kind:"build",title:name+" — the year ahead",slides:[
        S("roadmap","The year at a glance",["We move unit by unit, easy to hard.","Every word today comes back for real this year."]),
        S("vocab","Words to own by June",["Today's job is just to GUESS: "+vocab.map(v=>v[0]).join(", ")+".","No wrong answers — you're warming up your brain."])
      ]},
      worksheet:{title:"Word Preview — guess the meaning",instructions:"Write your BEST guess for each word. We'll learn the real ones this year — no wrong answers today.",scannable:false,sections:[
        {type:"What do you think it means?",space:"m",directions:"Write what you think each word means (best guess).",problems:vocab.map(v=>v[0]+" — ?")}
      ]},
      answerKey:[{section:"Real meanings — reveal AFTER they guess",answers:vocab.map(v=>v[0]+": "+v[1])}],
      exitTicket:["Which of today's words are you most curious about, and why?"]
    };
    const Thu={ type:"activity", locked:true,
      objective:"Students show what they already know in an ungraded warm-up that gently leads into next week's first topic.",
      hook:"No grades today — just show me your brain. This is where Monday begins.",
      agenda:"Bellwork (5) · Model the thinking (8) · "+ready.title+" (22) · Go over together (7) · Exit (3)",
      script:[
        {min:5,title:"Bellwork",do:"Low-stakes warm-up on the board.",options:[],say:"Just try — effort counts, not right answers."},
        {min:8,title:"Model it",do:"Think aloud through one example so they see your reasoning.",options:[],say:"Watch how I think, not just what I write."},
        {min:22,title:ready.title,do:"Students work the activity solo or in pairs; circulate to see who's ready and who needs support Monday.",options:["Pairs allowed; struggle is fine — it's not graded"],say:"Show me what you've got — this tells me how to help you."},
        {min:7,title:"Go over together",do:"Reveal thinking; celebrate strong attempts.",options:[],say:"Great thinking — that's exactly the muscle we build."},
        {min:3,title:"Exit",do:"Exit slip.",options:[],say:"One win, one thing you want help with."}
      ],
      presentation:{kind:"build",title:"Show what you know",slides:[
        S("wedo","No grade — just thinking",["Today only measures effort.","It tells me how to help you starting Monday."]),
        S("example","Watch me think first",["I'll model one out loud.","Then it's your turn — attempts over answers."])
      ]},
      worksheet:{title:ready.title,instructions:ready.dir,scannable:false,sections:[
        {type:"Warm-up (not graded)",space:"l",directions:ready.dir,problems:ready.probs}
      ]},
      exitTicket:["One thing you feel good about, and one thing you want help with."]
    };
    const Fri={ type:"review", locked:true,
      objective:"Students review the week's routines and course preview through a fun class game.",
      hook:"Friday = game day. Winner gets bragging rights.",
      agenda:"Set up (5) · Game rounds (30) · Winners + wrap (7) · Exit (3)",
      assessment:"Class game — not graded; celebrates the week.",
      script:[
        {min:5,title:"Set up the game",do:"Open Kahoot or Blooket; paste this week's questions (below). Students get on their devices.",options:["No devices? Play as teams with A/B/C/D corners."],say:"Phones out ONLY for the game — then back up."},
        {min:30,title:"Game rounds",do:"Play the question set; keep it light and loud.",options:["Give the winner a tiny prize or a shout-out"],say:"Fast and fun — first instinct!"},
        {min:7,title:"Winners + wrap",do:"Crown the winner; preview that REAL content starts Monday.",options:[],say:"Monday we get to work — and you're ready."},
        {min:3,title:"Exit",do:"Exit slip at the door.",options:[],say:"One thing you're looking forward to."}
      ],
      presentation:{kind:"build",title:"Game Day!",slides:[
        S("hook","Friday Game Day",["This week's routines + course words.","Winner = bragging rights."]),
        S("recap","Monday it gets real",["Great first week.","Monday: our first true "+name+" topic."])
      ]},
      worksheet:{title:"Game Day question set (Kahoot / Blooket ready)",instructions:"Teacher: paste these into Kahoot/Blooket, or play as a class with A–D corners. Not graded. (Answers shown for you.)",scannable:false,sections:[
        {type:"Class procedures",space:"s",directions:"Quick-fire — first instinct.",problems:[
          "First thing when you walk in?  →  sit + phone up",
          "Where does your phone go?  →  up in the caddy",
          "Fail a test → what happens?  →  one week of tutoring",
          "Classwork gets done…  →  in class, the day it's assigned"
        ]},
        {type:"Course words",space:"s",directions:"You've got this.",problems:vocab.slice(0,4).map(v=>"Which word means: \""+v[1]+"\"?  →  "+v[0])}
      ]},
      exitTicket:["One thing you're looking forward to this year."]
    };
    return {Mon:Mon,Tue:Tue,Wed:Wed,Thu:Thu,Fri:Fri};
  };
})(window);
