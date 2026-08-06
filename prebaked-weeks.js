/* Prebaked content — Pre-Calculus + Algebra II Week 2 (audited) + Pre-Cal Week 3 (Mon full, Tue-Fri plan-only). */
window.PREBAKED={
 "precal": {
  "days": {
   "Mon": {
    "type": "intro",
    "hook": "Show a graph with no equation and ask: 'Without any numbers on it, can you tell me what family this belongs to?' — reveal it's $y=\\sqrt{x}$.",
    "objective": "Students will identify the 6 parent functions from their equations and graphs, and state each one's domain and range.",
    "bellRinger": "Plot 3 points for $y=x^2$: $(-2,4)$, $(0,0)$, $(2,4)$. What shape do you expect the graph to make?",
    "agenda": [
     "Bell ringer: plot points for $y=x^2$",
     "Go over the bell ringer — name the shape",
     "Notes: the 6 parent functions",
     "Video: parent functions overview",
     "Guided practice: identify family, domain, range",
     "Independent worksheet",
     "Exit ticket"
    ],
    "assessment": "Exit ticket: identify the parent function of $f(x)=\\dfrac{1}{x}$ and give its domain and range.",
    "video": {
     "short": {
      "title": "Parent Functions in 5 Minutes (Mathispower4u)",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+parent+functions+overview",
      "note": "~5 min"
     },
     "long": {
      "title": "Parent Functions and Their Graphs — Full Lesson (Organic Chemistry Tutor)",
      "url": "https://www.youtube.com/results?search_query=Organic+Chemistry+Tutor+parent+functions+domain+range",
      "note": "~14 min, optional"
     },
     "questions": [
      "Which parent functions are defined for ALL real numbers?",
      "Which parent function(s) never touch the $x$-axis?",
      "How can you tell $x^2$ and $x^3$ apart just from a quick sketch?",
      "Why does $\\sqrt{x}$ only exist for $x\\ge 0$?"
     ]
    },
    "videoPlacement": "Play the short video right after the notes, before guided practice, so students see all 6 shapes in motion before sorting equations themselves.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Students plot 3 points for $y=x^2$ and sketch the curve through them.",
      "options": [
       "Cold-call a student to describe the shape before revealing it's a parabola"
      ],
      "say": "What do you notice about the y-values on either side of x=0?"
     },
     {
      "min": 5,
      "title": "Go over bell ringer",
      "do": "Reveal the parabola shape; connect to the term 'parent function' as the simplest version of a family.",
      "say": "If this is the simplest quadratic, what would make one 'more complicated'?"
     },
     {
      "min": 12,
      "title": "Notes: the 6 parent functions",
      "do": "Present guided notes on linear $x$, quadratic $x^2$, cubic $x^3$, absolute value $|x|$, square root $\\sqrt{x}$, and reciprocal $1/x$ — shape, domain, range for each.",
      "options": [
       "Use the diagram slides to sketch each graph live on the board instead of just showing it"
      ],
      "say": "Which of these six shapes surprises you the most?"
     },
     {
      "min": 6,
      "title": "Video",
      "do": "Play the short parent-functions video; students jot the family name under each shape shown.",
      "say": "Pause here — which family just appeared on screen?"
     },
     {
      "min": 8,
      "title": "We-do examples",
      "do": "Work 2-3 procedureExamples as a class: identify family, domain, and range from an equation.",
      "options": [
       "Have students vote (thumbs) on the family before you reveal the answer"
      ],
      "say": "What's the first clue you look for — the exponent, a root symbol, or absolute value bars?"
     },
     {
      "min": 9,
      "title": "Independent worksheet",
      "do": "Students work the worksheet in pairs; circulate to support students struggling with domain restrictions.",
      "say": "Is this the WHOLE family, or has it been shifted from the parent?"
     },
     {
      "min": 3,
      "title": "Exit ticket",
      "do": "Students answer the exit ticket individually and turn it in.",
      "say": "Last check — no talking, just show me what you know."
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nA **parent function** is the simplest, unshifted form of a family of functions. There are 6 parent functions every Pre-Calculus student must recognize on sight: **linear** ($x$), **quadratic** ($x^2$), **cubic** ($x^3$), **absolute value** ($|x|$), **square root** ($\\sqrt{x}$), and **reciprocal** ($1/x$).\n\n## Key Terms\n- **Parent function** — the most basic function in a family, with no shifts, stretches, or reflections\n- **Domain** — the set of all allowed input ($x$) values\n- **Range** — the set of all resulting output ($y$) values\n\n## Worked Example\nStep 1: Look at the equation $f(x)=\\sqrt{x}$ and note the radical symbol.\nStep 2: Radicals (square roots) can't take a negative input, so restrict $x\\ge 0$.\nStep 3: The smallest output happens at $x=0$, giving $f(0)=0$; the graph only goes up from there.\nAnswer: parent = **square root**; domain $x\\ge 0$; range $y\\ge 0$.\n\n## You Try\nIdentify the parent function of $f(x)=\\dfrac{1}{x}$ and state its domain and range.",
    "guidedNotes": {
     "title": "The 6 Parent Functions",
     "vocab": [
      {
       "term": "Parent function",
       "def": "the {{simplest|2.2cm}} member of a family of functions --- no shifts, stretches, or reflections applied."
      },
      {
       "term": "Domain",
       "def": "the set of all allowed {{input|1.8cm}} ($x$) values a function can use."
      },
      {
       "term": "Range",
       "def": "the set of all {{output|2cm}} ($y$) values a function actually produces."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "1/x",
        "domain": [
         0.2,
         6
        ],
        "color": "blue"
       },
       {
        "expr": "1/x",
        "domain": [
         -6,
         -0.2
        ],
        "color": "blue"
       }
      ],
      "xmin": -6.5,
      "xmax": 6.5,
      "ymin": -5.5,
      "ymax": 5.5,
      "caption": "$y=1/x$ --- two branches, never touching either axis (domain $x\\ne0$, range $y\\ne0$).",
      "width": "8cm",
      "height": "5.5cm"
     },
     "youTry": [
      {
       "prompt": "Identify the parent function of $f(x)=x^{3}$ and give its domain and range.",
       "answer": "cubic; domain all real numbers, range all real numbers"
      },
      {
       "prompt": "Identify the parent function of $f(x)=|x|$ and give its range.",
       "answer": "absolute value; range $y\\ge 0$"
      }
     ],
     "summary": "To identify a parent function: match the {{equation|1.8cm}} to one of the 6 known shapes, then check for {{restrictions|2.6cm}} caused by a root or a denominator.",
     "formulas": [
      {
       "name": "Linear",
       "formula": "$f(x)=x$"
      },
      {
       "name": "Quadratic",
       "formula": "$f(x)=x^{2}$"
      },
      {
       "name": "Cubic",
       "formula": "$f(x)=x^{3}$"
      },
      {
       "name": "Absolute value",
       "formula": "$f(x)=|x|$"
      },
      {
       "name": "Square root",
       "formula": "$f(x)=\\sqrt{x}$"
      },
      {
       "name": "Reciprocal",
       "formula": "$f(x)=\\dfrac{1}{x}$"
      }
     ],
     "examples": [
      {
       "label": "Type 1 — identify family, domain, range",
       "prompt": "Identify the parent function of $f(x)=\\dfrac{1}{x}$ and give its domain and range.",
       "steps": [
        "The rule is a fraction with $x$ in the denominator, so this is the {{reciprocal|2.4cm}} parent function.",
        "A denominator can never equal $0$, so $x$ cannot be $0$: domain is {{$x\\ne 0$|2cm}}.",
        "Since $y=1/x$ never produces an output of exactly $0$ either, the range is {{$y\\ne 0$|2cm}}."
       ]
      },
      {
       "label": "Type 2 — shifted equation, name the parent",
       "prompt": "Name the ORIGINAL parent family of $g(x)=(x-1)^{2}+3$.",
       "steps": [
        "The $-1$ and $+3$ only {{shift the graph|3cm}} — they never change the family.",
        "The core operation is {{squaring|2.5cm}}, so the parent is the {{quadratic|2.5cm}} family: $f(x)=x^{2}$."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": -2,
        "c": 4,
        "domain": [
         -2,
         4
        ],
        "marks": [
         {
          "x": 1,
          "y": 3,
          "label": "(1, 3)"
         }
        ]
       },
       "answer": "Quadratic — $g$ is $x^{2}$ shifted right 1, up 3."
      }
     ]
    },
    "notesExit": "Identify the parent function of $f(x)=x^{2}$ and state its domain and range.",
    "vocab": [
     {
      "term": "Parent function",
      "definition": "The simplest, unshifted equation that represents an entire family of functions (e.g., $x^2$ is the parent of all quadratics)."
     },
     {
      "term": "Domain",
      "definition": "All the $x$-values for which a function is defined."
     },
     {
      "term": "Range",
      "definition": "All the $y$-values a function actually outputs."
     }
    ],
    "presentation": {
     "kind": "launch",
     "title": "Meet the 6 Parent Functions",
     "slides": [
      {
       "type": "hook",
       "heading": "Name that graph",
       "bullets": [
        "A curve appears on screen — **no equation attached**.",
        "By the end of class you'll name its family, then state its domain and range on sight.",
        "Six shapes rule everything we do in Pre-Cal. Meet them today."
       ],
       "graph": {
        "kind": "abs",
        "a": 1,
        "h": 0,
        "k": 0,
        "domain": [
         -4,
         4
        ]
       },
       "graphCaption": "V shape or U shape? By 9:00 you'll never confuse them"
      },
      {
       "type": "define",
       "heading": "One family, one shape",
       "bullets": [
        "A **parent function** is the simplest member of a family — no shifts, no stretches.",
        "Every function in this course is a parent that's been stretched, shifted, or flipped.",
        "Recognize the parent → you already know the domain and range."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": 0,
        "c": 0,
        "domain": [
         -4,
         4
        ],
        "marks": [
         {
          "x": 0,
          "y": 0,
          "label": "(0, 0)"
         }
        ]
       },
       "graphCaption": "y = x² — the quadratic parent"
      },
      {
       "type": "vocab",
       "heading": "Three words we use every day",
       "vocab": [
        {
         "term": "Parent function",
         "definition": "the simplest form of a family"
        },
        {
         "term": "Domain",
         "definition": "all allowed x-values (inputs)"
        },
        {
         "term": "Range",
         "definition": "all possible y-values (outputs)"
        }
       ]
      },
      {
       "type": "define",
       "heading": "The 6 parents",
       "bullets": [
        "Linear: $f(x)=x$ · Quadratic: $f(x)=x^{2}$ · Cubic: $f(x)=x^{3}$",
        "Absolute value: $f(x)=|x|$ · Square root: $f(x)=\\sqrt{x}$ · Reciprocal: $f(x)=\\dfrac{1}{x}$",
        "Each has a signature shape AND a signature domain/range."
       ],
       "graph": {
        "kind": "cubic",
        "a": 1,
        "b": 0,
        "c": 0,
        "d": 0,
        "domain": [
         -2.5,
         2.5
        ]
       },
       "graphCaption": "y = x³ — S-curve through the origin"
      },
      {
       "type": "example",
       "heading": "We do:  f(x) = √x",
       "example": "**1.** The radical symbol signals the **square root** parent.\n**2.** A radicand can't be negative: $x\\ge 0$ — that's the domain.\n**3.** The output of a square root is never negative: $y\\ge 0$ — that's the range.",
       "graph": {
        "kind": "sqrt",
        "a": 1,
        "h": 0,
        "k": 0,
        "domain": [
         -1,
         9
        ],
        "marks": [
         {
          "x": 0,
          "y": 0,
          "label": "starts at (0, 0)"
         }
        ]
       },
       "graphCaption": "y = √x — starts at the origin, only goes right and up"
      },
      {
       "type": "mistake",
       "heading": "Shifts don't change the family",
       "mistake": "$f(x)=(x-3)^{2}$ is still **quadratic** — the $-3$ only slides the graph right.\nAdded or subtracted numbers move a graph; they never change which family it belongs to.",
       "note": "Cover the shift with your hand and read the core operation: square? root? bars? fraction?"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "Name the family, domain, and range:\n(a) $f(x)=x^{3}$\n(b) $f(x)=|x|$",
       "graph": {
        "kind": "abs",
        "a": 1,
        "h": 0,
        "k": 0,
        "domain": [
         -4,
         4
        ],
        "marks": [
         {
          "x": 0,
          "y": 0,
          "label": "corner"
         }
        ]
       },
       "graphCaption": "one of these two — which?"
      },
      {
       "type": "roadmap",
       "heading": "Where this week goes",
       "bullets": [
        "**Tue** — where a graph increases, decreases, and turns (max/min).",
        "**Wed** — domains that break: denominators and radicals.",
        "**Thu** — even, odd, or neither (symmetry by algebra).",
        "**Fri** — all four checks on one function + quiz-style practice."
       ]
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "Identify the parent function of $f(x)=x^{2}$ and give its domain and range.",
      "steps": [
       "The equation is $x$ raised to the 2nd power, matching the quadratic parent.",
       "There is no root and no denominator, so every real number is allowed: domain is all reals.",
       "Since squaring never gives a negative result, the smallest output is $0$."
      ],
      "answer": "Quadratic; domain: all real numbers; range: $y\\ge 0$"
     },
     {
      "prompt": "Identify the parent function of $f(x)=|x|$ and give its domain and range.",
      "steps": [
       "Absolute value bars around $x$ signal the absolute value parent.",
       "Any real number can go inside absolute value bars, so the domain is all reals.",
       "Absolute value output is never negative, so the range starts at $0$."
      ],
      "answer": "Absolute value; domain: all real numbers; range: $y\\ge 0$"
     },
     {
      "prompt": "Identify the parent function of $f(x)=\\sqrt{x}$ and give its domain and range.",
      "steps": [
       "A radical (square root) symbol signals the square root parent.",
       "The expression under the radical must be $\\ge 0$, so $x\\ge 0$.",
       "The graph starts at $(0,0)$ and only increases, so the range is $y\\ge 0$."
      ],
      "answer": "Square root; domain: $x\\ge 0$; range: $y\\ge 0$"
     }
    ],
    "worksheet": {
     "title": "Meet the Parent Functions",
     "instructions": "For each equation, name the parent function family, then state its domain and range using inequality notation.",
     "sections": [
      {
       "type": "Identify the family, domain, and range",
       "space": "m",
       "workedExample": "**Example:** $f(x)=\\dfrac{1}{x}$ is the **reciprocal** parent. A denominator can't be $0$, so the domain is $x\\ne 0$; the graph never touches $y=0$ either, so the range is $y\\ne 0$.",
       "directions": "Directions: Name the parent family, then give the domain and range.",
       "diagram": {
        "plots": [
         {
          "expr": "x^2",
          "domain": [
           -3,
           3
          ],
          "color": "blue"
         }
        ],
        "xmin": -3.5,
        "xmax": 3.5,
        "ymin": -1.5,
        "ymax": 9.5,
        "points": [
         [
          0,
          0,
          "vertex $(0,0)$",
          "red"
         ]
        ],
        "caption": "$y=x^{2}$ --- the quadratic parent function.",
        "width": "8cm",
        "height": "5cm"
       },
       "problems": [
        "$f(x)=x$",
        "$f(x)=x^{2}$",
        "$f(x)=x^{3}$",
        "$f(x)=|x|$",
        "$f(x)=\\sqrt{x}$",
        "$f(x)=\\dfrac{1}{x}$"
       ]
      },
      {
       "type": "Match a shifted equation back to its parent family",
       "space": "s",
       "workedExample": "**Example:** $g(x)=\\sqrt{x}+4$ still has a radical, so its parent family is **square root** (the $+4$ just shifts it up 4).",
       "directions": "Directions: Even though these are shifted, name the ORIGINAL parent family only.",
       "problems": [
        "$g(x)=(x-2)^{2}$",
        "$g(x)=|x+1|-3$",
        "$g(x)=\\dfrac{1}{x-5}$",
        "🌶 $g(x)=(x+3)^{3}+1$"
       ]
      }
     ],
     "procedure": [
      "Look for a root symbol, absolute value bars, or an exponent to identify the family.",
      "Ignore any added/subtracted numbers outside — they only shift the graph, not the family.",
      "Check for a denominator or a radical: these create domain restrictions.",
      "State domain first, then determine range from the graph's lowest or highest point."
     ],
     "optionalExtra": [
      "Sketch all 6 parent functions from memory on one set of axes, labeling each with its equation."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "Sketch all 6 parent functions from memory, then sort them into three groups: symmetric about the y-axis ($x^{2}$, $|x|$), symmetric about the origin ($x$, $x^{3}$, $\\tfrac{1}{x}$), and neither ($\\sqrt{x}$). For each group, explain in one sentence what the symmetry means about its equation.",
     "why": "Extends identifying parent functions by pushing students to reason about a shared feature (the origin) across the whole family, previewing symmetry (Thursday's topic)."
    },
    "exitTicket": [
     "Name the parent family of $g(x)=(x-2)^{3}$, then state the domain and range of that PARENT function."
    ],
    "answerKey": [
     {
      "section": "Identify the family, domain, and range",
      "answers": [
       "Linear; domain: all real numbers; range: all real numbers",
       "Quadratic; domain: all real numbers; range: $y\\ge 0$",
       "Cubic; domain: all real numbers; range: all real numbers",
       "Absolute value; domain: all real numbers; range: $y\\ge 0$",
       "Square root; domain: $x\\ge 0$; range: $y\\ge 0$",
       "Reciprocal; domain: $x\\ne 0$; range: $y\\ne 0$"
      ]
     },
     {
      "section": "Match a shifted equation back to its parent family",
      "answers": [
       "Quadratic (the $(x-2)^2$ is still squared, just shifted right)",
       "Absolute value (the bars are still there, just shifted)",
       "Reciprocal (still a fraction with $x$ in the denominator)",
       "Cubic --- the exponent of 3 on $(x+3)$ shows this came from the cubic parent, just shifted left 3 and up 1"
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "Six correct sketches on one grid: $y=x$ (straight line through origin, slope 1); $y=x^{2}$ (U-shaped parabola, vertex $(0,0)$); $y=x^{3}$ (S-shaped curve through origin, rising left to right); $y=|x|$ (V-shape, vertex $(0,0)$, opening up); $y=\\sqrt{x}$ (half-parabola starting at $(0,0)$, in the first quadrant only); $y=\\dfrac{1}{x}$ (two hyperbola branches in quadrants I and III, never touching either axis). Each curve labeled with its equation; $\\sqrt{x}$ and $1/x$ should visibly show their restricted domains."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.1",
     "title": "Function Families"
    }
   },
   "Tue": {
    "type": "worksheet",
    "hook": "Ask: 'If you were hiking along this graph left to right, when would you be walking uphill, downhill, or standing still at the top?'",
    "objective": "Students will determine the intervals where a function is increasing or decreasing, and identify any relative maximum or minimum values.",
    "bellRinger": "Sketch $y=x^2$ again. Circle the part of the graph where it goes DOWN as you move left to right, then the part where it goes UP.",
    "agenda": [
     "Bell ringer: revisit $y=x^2$ direction",
     "New term: increasing / decreasing intervals",
     "New term: maximum / minimum",
     "We-do example",
     "Independent worksheet",
     "Exit ticket"
    ],
    "assessment": "Exit ticket: state the increasing/decreasing intervals and the max or min of $y=-(x+1)^2+4$.",
    "video": {
     "short": {
      "title": "Increasing, Decreasing, and Constant Intervals (Khan Academy)",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+increasing+decreasing+intervals+function",
      "note": "~4 min"
     },
     "long": {
      "title": "Relative Maximum and Minimum Explained (Mathispower4u)",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+relative+maximum+minimum+function",
      "note": "~9 min, optional"
     },
     "questions": [
      "How do you write an increasing interval using inequality notation?",
      "Is a maximum always the highest point on the ENTIRE graph, or just nearby?",
      "What happens at the exact x-value of a max or min — increasing, decreasing, or neither?"
     ]
    },
    "videoPlacement": "Play the short video right after introducing the two new terms, before the we-do example, to reinforce reading a graph left to right.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Students shade the decreasing and increasing portions of $y=x^2$ in two different colors.",
      "say": "Which color did you use for the LEFT side of the parabola?"
     },
     {
      "min": 6,
      "title": "New term: increasing/decreasing",
      "do": "Define increasing/decreasing intervals; emphasize reading left to right and writing answers in terms of $x$.",
      "options": [
       "Have a student physically trace the curve with a finger while narrating 'up... up... down...'"
      ],
      "say": "Why do we describe these intervals using x-values, not y-values?"
     },
     {
      "min": 5,
      "title": "New term: max/min",
      "do": "Define relative maximum and minimum as turning points; connect to vertex of a parabola.",
      "say": "Is the vertex of $y=x^2$ a maximum or a minimum? How do you know?"
     },
     {
      "min": 5,
      "title": "Video",
      "do": "Play the short video on increasing/decreasing/constant intervals.",
      "say": "What example from the video looked most like our bell ringer?"
     },
     {
      "min": 8,
      "title": "We-do example",
      "do": "Work through the guided notes worked example as a class: $y=(x-2)^2-3$, finding vertex, max/min, and intervals.",
      "say": "Once we know the vertex, how do we figure out which side is increasing?"
     },
     {
      "min": 16,
      "title": "Independent worksheet",
      "do": "Students work the worksheet individually or in pairs; circulate to check interval notation.",
      "say": "Did you write your interval in terms of x, not y?"
     },
     {
      "min": 3,
      "title": "Exit ticket",
      "do": "Students complete the exit ticket silently and turn it in.",
      "say": "Show me you can find both the turning point and the direction on each side."
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nReading a graph from **left to right**, a function is **increasing** where it goes up, **decreasing** where it goes down, and reaches a **relative maximum** or **relative minimum** at a turning point.\n\n## Key Terms\n- **Increasing interval** — the $x$-values where the graph rises as $x$ increases\n- **Decreasing interval** — the $x$-values where the graph falls as $x$ increases\n- **Relative maximum / minimum** — a turning point that is higher/lower than the points immediately around it\n\n## Worked Example\nStep 1: For $y=(x-2)^2-3$, the vertex form $a(x-h)^2+k$ gives vertex $(2,-3)$.\nStep 2: The leading coefficient is $+1$ (positive), so the parabola opens up.\nStep 3: An upward parabola has a minimum at the vertex; it falls before the vertex and rises after.\nAnswer: minimum at $(2,-3)$; decreasing on $x<2$; increasing on $x>2$.\n\n## You Try\nFor $y=-x^2+4$, state whether the vertex is a max or min, and give the increasing/decreasing intervals.",
    "guidedNotes": {
     "title": "Increasing, Decreasing, Max & Min",
     "vocab": [
      {
       "term": "Increasing interval",
       "def": "the set of {{$x$|1cm}}-values where the graph goes {{up|1.4cm}} as you move left to right."
      },
      {
       "term": "Decreasing interval",
       "def": "the set of $x$-values where the graph goes {{down|1.6cm}} as you move left to right."
      },
      {
       "term": "Relative max/min",
       "def": "a {{turning point|2.6cm}} of the graph; an upward-opening parabola has a {{minimum|2cm}}, a downward-opening parabola has a {{maximum|2.2cm}}."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "(x-2)^2-3",
        "domain": [
         -1,
         5
        ],
        "color": "blue"
       }
      ],
      "xmin": -2,
      "xmax": 6,
      "ymin": -4,
      "ymax": 7,
      "points": [
       [
        2,
        -3,
        "min $(2,-3)$",
        "red"
       ]
      ],
      "caption": "opens up $\\Rightarrow$ minimum at $(2,-3)$; decreasing then increasing.",
      "width": "8cm",
      "height": "5.5cm"
     },
     "youTry": [
      {
       "prompt": "For $y=-x^{2}+4$, state whether the vertex is a max or min, and give the intervals.",
       "answer": "vertex $(0,4)$ is a maximum; increasing on $x<0$, decreasing on $x>0$"
      },
      {
       "prompt": "For $y=(x+1)^{2}$, give the vertex and the increasing interval.",
       "answer": "vertex $(-1,0)$; increasing on $x>-1$"
      }
     ],
     "summary": "Opening {{up|1cm}} gives a minimum; opening {{down|1.4cm}} gives a maximum. The graph {{decreases|2.4cm}} before the turning point and {{increases|2.2cm}} after it (for an upward parabola).",
     "formulas": [
      {
       "name": "Vertex form",
       "formula": "$y=a(x-h)^{2}+k$ → vertex $(h,k)$"
      },
      {
       "name": "Opens",
       "formula": "up if $a>0$ (min), down if $a<0$ (max)"
      },
      {
       "name": "Intervals",
       "formula": "split at $x=h$"
      }
     ],
     "examples": [
      {
       "label": "Type 1 — max/min, vertex, and intervals",
       "prompt": "For $y=(x-2)^{2}-3$, find the vertex, state max or min, and give the increasing/decreasing intervals.",
       "steps": [
        "Vertex form $a(x-h)^2+k$ gives the vertex directly: {{$(2,-3)$|2cm}}.",
        "The leading coefficient is $+1$, which is positive, so the parabola opens {{up|1.2cm}}, making the vertex a {{minimum|2cm}}.",
        "The graph falls before the vertex and rises after: decreasing on {{$x<2$|2cm}}, increasing on {{$x>2$|2cm}}."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": -4,
        "c": 1,
        "domain": [
         -1,
         5
        ],
        "marks": [
         {
          "x": 2,
          "y": -3,
          "label": "(2, −3)"
         }
        ]
       }
      }
     ]
    },
    "notesExit": "For $y=-(x+1)^{2}+4$, state whether the vertex is a max or min, and give the increasing/decreasing intervals.",
    "vocab": [
     {
      "term": "Increasing interval",
      "definition": "The $x$-values over which a function's output values are getting larger."
     },
     {
      "term": "Decreasing interval",
      "definition": "The $x$-values over which a function's output values are getting smaller."
     },
     {
      "term": "Relative maximum/minimum",
      "definition": "A point where a function changes from increasing to decreasing (max) or decreasing to increasing (min)."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Increasing, Decreasing & Max/Min",
     "slides": [
      {
       "type": "define",
       "heading": "Reading a graph left to right",
       "bullets": [
        "Yesterday you named the graph — today you read **where it climbs and falls**.",
        "**Increasing**: y goes up as x moves right. **Decreasing**: y drops.",
        "Intervals are always written in **x-values**, and the turn happens at the vertex — a **relative max or min**."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": -4,
        "c": 1,
        "domain": [
         -1,
         5
        ],
        "marks": [
         {
          "x": 2,
          "y": -3,
          "label": "turn (2, −3)"
         }
        ]
       },
       "graphCaption": "falls, turns at the vertex, then rises"
      },
      {
       "type": "example",
       "heading": "We do:  y = (x − 2)² − 3",
       "example": "**1.** Vertex form: vertex at $(2,-3)$.\n**2.** $a=1>0$ opens **up** → the vertex is a **minimum**, value $-3$.\n**3.** Decreasing for $x<2$; increasing for $x>2$.",
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": -4,
        "c": 1,
        "domain": [
         -1,
         5
        ],
        "marks": [
         {
          "x": 2,
          "y": -3,
          "label": "min (2, −3)"
         }
        ]
       },
       "graphCaption": "y = (x−2)² − 3"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "$y=-x^{2}+4$: max or min? What's the vertex? Give the increasing and decreasing intervals.",
       "graph": {
        "kind": "parabola",
        "a": -1,
        "b": 0,
        "c": 4,
        "domain": [
         -3,
         3
        ],
        "marks": [
         {
          "x": 0,
          "y": 4,
          "label": "(0, 4)"
         }
        ]
       },
       "graphCaption": "check your intervals against the picture"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "For $y=x^{2}+2$, find the vertex, state max or min, and give the increasing/decreasing intervals.",
      "steps": [
       "Vertex form gives vertex $(0,2)$ (no horizontal shift, up 2).",
       "Leading coefficient is $+1$, positive, so it opens up and the vertex is a minimum.",
       "Decreasing before the vertex, increasing after."
      ],
      "answer": "Vertex $(0,2)$, minimum; decreasing $x<0$, increasing $x>0$"
     }
    ],
    "worksheet": {
     "title": "Increasing, Decreasing, Max & Min",
     "instructions": "For each function, state whether the vertex is a maximum or minimum, give the vertex, and state the increasing and decreasing intervals.",
     "sections": [
      {
       "type": "State max/min, vertex, and intervals",
       "space": "l",
       "workedExample": "**Example:** For $y=x^{2}-4$, vertex form gives vertex $(0,-4)$. Leading coefficient $+1$ is positive, so it's a **minimum**. It decreases for $x<0$ and increases for $x>0$.",
       "directions": "Directions: State max or min, give the vertex, and give both intervals using inequality notation.",
       "diagram": {
        "plots": [
         {
          "expr": "-(x-1)^2+3",
          "domain": [
           -1,
           3
          ],
          "color": "blue"
         }
        ],
        "xmin": -1.5,
        "xmax": 3.5,
        "ymin": -2,
        "ymax": 5,
        "points": [
         [
          1,
          3,
          "max $(1,3)$",
          "red"
         ]
        ],
        "caption": "$y=-(x-1)^2+3$ --- opens down, so the vertex is a maximum.",
        "width": "8cm",
        "height": "5cm"
       },
       "problems": [
        "$y=x^{2}+5$",
        "$y=-x^{2}+1$",
        "$y=(x-3)^{2}$",
        "$y=-(x+2)^{2}-1$",
        "$y=(x+4)^{2}-6$",
        "$y=-(x-1)^{2}+3$",
        "🌶 $y=-3(x+2)^{2}+6$",
        "$y=2(x-3)^{2}+1$"
       ]
      }
     ],
     "procedure": [
      "Write the equation in vertex form $a(x-h)^2+k$ if it isn't already.",
      "The vertex is $(h,k)$.",
      "If $a>0$ the parabola opens up (minimum); if $a<0$ it opens down (maximum).",
      "The graph decreases before the vertex and increases after it (for a minimum) — reversed for a maximum."
     ],
     "optionalExtra": [
      "🌶 For $y=-2(x+3)^{2}+7$, find the vertex, state max or min, give both intervals, AND explain what would change about your answer if the leading coefficient became positive instead."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "The graph of $y=x^{3}$ has no maximum or minimum anywhere, yet it is increasing over its entire domain. Explain, using the shape of the cubic parent function, why a function can be increasing everywhere and still never have a turning point.",
     "why": "Extends the increasing/decreasing concept beyond parabolas to a function with no relative extrema at all, deepening understanding of what a 'turning point' actually requires."
    },
    "exitTicket": [
     "For $y=-(x+1)^{2}+4$, state whether the vertex is a max or min, and give the increasing/decreasing intervals."
    ],
    "answerKey": [
     {
      "section": "State max/min, vertex, and intervals",
      "answers": [
       "Opens up, minimum; vertex $(0,5)$; decreasing $x<0$, increasing $x>0$",
       "Opens down, maximum; vertex $(0,1)$; increasing $x<0$, decreasing $x>0$",
       "Opens up, minimum; vertex $(3,0)$; decreasing $x<3$, increasing $x>3$",
       "Opens down, maximum; vertex $(-2,-1)$; increasing $x<-2$, decreasing $x>-2$",
       "Opens up, minimum; vertex $(-4,-6)$; decreasing $x<-4$, increasing $x>-4$",
       "Opens down, maximum; vertex $(1,3)$; increasing $x<1$, decreasing $x>1$",
       "Vertex $(-2,6)$; $a=-3<0$ so it is a maximum (value $6$); increasing for $x<-2$, decreasing for $x>-2$",
       "$a=2>0$ opens up, minimum; vertex $(3,1)$; decreasing $x<3$, increasing $x>3$"
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "Vertex form $a(x-h)^2+k$ gives vertex $(-3,7)$. Since $a=-2<0$ the parabola opens down, so $(-3,7)$ is a maximum. It increases on $x<-3$ and decreases on $x>-3$. If the leading coefficient became positive (e.g. $+2$), the parabola would open up instead: the vertex $(-3,7)$ would become a minimum, and the intervals would flip --- decreasing on $x<-3$ and increasing on $x>-3$."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.7",
     "title": "Increasing and Decreasing"
    }
   },
   "Wed": {
    "type": "worksheet",
    "hook": "Ask: 'Can you plug $x=-4$ into $f(x)=\\sqrt{x}$ and get a real answer? What about $x=2$ into $f(x)=1/(x-2)$?'",
    "objective": "Students will determine the domain and range of a function algebraically, including functions with square-root and reciprocal restrictions.",
    "bellRinger": "For $f(x)=\\dfrac{1}{x-3}$, what value of $x$ would make the denominator equal to $0$? Why is that value NOT allowed?",
    "agenda": [
     "Bell ringer: spot the forbidden x-value",
     "New term: domain restrictions (roots & denominators)",
     "We-do example",
     "Independent worksheet",
     "Exit ticket"
    ],
    "assessment": "Exit ticket: state the domain of $f(x)=\\sqrt{x+5}$.",
    "video": {
     "short": {
      "title": "Domain and Range with Restrictions (Khan Academy)",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+domain+and+range+restrictions",
      "note": "~5 min"
     },
     "long": {
      "title": "Finding Domain of Rational and Radical Functions (Mathispower4u)",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+domain+rational+radical+functions",
      "note": "~10 min, optional"
     },
     "questions": [
      "Why can't a denominator ever equal zero?",
      "Why must the expression under a square root be non-negative?",
      "What happens to the domain when BOTH a root and a denominator appear in the same function?"
     ]
    },
    "videoPlacement": "Play the short video right after the bell ringer discussion, before formally introducing the two restriction rules, so students see both traps in action first.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Students identify the excluded x-value for $f(x)=1/(x-3)$ and explain why in their own words.",
      "say": "What happens if we actually try to divide by zero on a calculator?"
     },
     {
      "min": 5,
      "title": "Video",
      "do": "Play the short video showing both restriction types (root and denominator).",
      "say": "Which restriction type looked more familiar from yesterday?"
     },
     {
      "min": 8,
      "title": "New term: domain restrictions",
      "do": "Formalize the two rules: denominator $\\ne 0$, radicand $\\ge 0$; connect back to reciprocal and square-root parent functions from Monday.",
      "options": [
       "Have students test a 'trap' value on their calculator to see the ERROR message"
      ],
      "say": "Which of our 6 parent functions from Monday actually HAS a restriction?"
     },
     {
      "min": 8,
      "title": "We-do example",
      "do": "Work the guided-notes worked example: $f(x)=\\sqrt{x-2}$, finding domain then range.",
      "say": "Once we know the domain starts at x=2, what's the smallest output the function can give?"
     },
     {
      "min": 17,
      "title": "Independent worksheet",
      "do": "Students work the worksheet; circulate especially on problems combining a root and a denominator.",
      "say": "Did you check for BOTH kinds of restriction on this one?"
     },
     {
      "min": 5,
      "title": "Exit ticket",
      "do": "Students complete the exit ticket individually.",
      "say": "One restriction type only on this one — which is it?"
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nTwo situations restrict the **domain** of a function: a **denominator** can never equal $0$, and the expression under an **even root** (like a square root) can never be negative. Finding the **range** often means analyzing the graph's lowest or highest output.\n\n## Key Terms\n- **Domain restriction** — a value of $x$ that must be excluded for the function to stay defined\n- **Radicand** — the expression underneath a radical (root) symbol\n\n## Worked Example\nStep 1: For $f(x)=\\sqrt{x-2}$, the radicand is $x-2$.\nStep 2: A square root needs its radicand $\\ge 0$, so solve $x-2\\ge 0$, giving $x\\ge 2$.\nStep 3: At $x=2$, $f(2)=0$; the function only increases from there.\nAnswer: domain $x\\ge 2$; range $y\\ge 0$.\n\n## You Try\nFind the domain of $f(x)=\\dfrac{1}{x+6}$.",
    "guidedNotes": {
     "title": "Domain & Range with Restrictions",
     "vocab": [
      {
       "term": "Domain restriction",
       "def": "an $x$-value that must be {{excluded|2.4cm}} so the function stays defined."
      },
      {
       "term": "Radicand",
       "def": "the expression {{underneath|2.6cm}} a radical (root) symbol; for a square root it must be {{$\\ge 0$|1.8cm}}."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "sqrt(x-2)",
        "domain": [
         2,
         11
        ],
        "color": "blue"
       }
      ],
      "xmin": -1,
      "xmax": 11,
      "ymin": -1,
      "ymax": 4,
      "points": [
       [
        2,
        0,
        "start $(2,0)$",
        "red"
       ]
      ],
      "caption": "$y=\\sqrt{x-2}$ --- domain $x\\ge 2$, range $y\\ge 0$.",
      "width": "8cm",
      "height": "5cm"
     },
     "youTry": [
      {
       "prompt": "Find the domain of $f(x)=\\dfrac{1}{x+6}$.",
       "answer": "$x\\ne -6$ (all reals except $-6$)"
      },
      {
       "prompt": "Find the domain of $f(x)=\\sqrt{10-x}$.",
       "answer": "$x\\le 10$"
      }
     ],
     "summary": "Two traps restrict the domain: a {{denominator|2.6cm}} can never equal $0$, and a {{radicand|2.4cm}} (under an even root) can never be negative.",
     "formulas": [
      {
       "name": "Denominator rule",
       "formula": "set it $\\neq 0$"
      },
      {
       "name": "Radicand rule",
       "formula": "set it $\\ge 0$"
      }
     ],
     "examples": [
      {
       "label": "Type 2 — radical restriction",
       "prompt": "Find the domain and range of $f(x)=\\sqrt{x-2}$.",
       "steps": [
        "The radicand is $x-2$; a square root needs a non-negative radicand, so set up {{$x-2\\ge 0$|2.4cm}}.",
        "Solving gives the domain: {{$x\\ge 2$|1.8cm}}.",
        "At the smallest allowed input $x=2$, $f(2)=$ {{$0$|1cm}}, and the graph only rises after that, so the range is {{$y\\ge 0$|1.8cm}}."
       ],
       "graph": {
        "kind": "sqrt",
        "a": 1,
        "h": 2,
        "k": 0,
        "domain": [
         0,
         10
        ],
        "marks": [
         {
          "x": 2,
          "y": 0,
          "label": "(2, 0)"
         }
        ]
       }
      },
      {
       "label": "Type 1 — denominator restriction",
       "prompt": "Find the domain of $f(x)=\\dfrac{1}{x-5}$.",
       "steps": [
        "A denominator can never be zero: set $x-5$ {{$\\neq 0$|2cm}}.",
        "Solve: the domain is $x$ {{$\\neq 5$|2cm}} — every other real number works."
       ],
       "answer": "Domain: $x\\neq 5$."
      }
     ]
    },
    "notesExit": "Find the domain of $f(x)=\\sqrt{x+5}$.",
    "vocab": [
     {
      "term": "Domain restriction",
      "definition": "An input value that must be excluded from the domain, usually caused by a zero denominator or a negative radicand."
     },
     {
      "term": "Radicand",
      "definition": "The expression that appears underneath a radical symbol, such as the $x$ in $\\sqrt{x}$."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Domain & Range: Restrictions",
     "slides": [
      {
       "type": "define",
       "heading": "Two ways a domain breaks",
       "bullets": [
        "**Denominator**: can't divide by zero → set it $\\neq 0$.",
        "**Radicand**: can't square-root a negative → set it $\\ge 0$.",
        "No fraction, no radical → domain is **all real numbers** (true for every family we've met so far)."
       ],
       "graph": {
        "kind": "curve",
        "expr": "1/(x-2)",
        "domain": [
         -3,
         7
        ]
       },
       "graphCaption": "y = 1/(x−2) — the graph never touches x = 2"
      },
      {
       "type": "example",
       "heading": "We do:  f(x) = √(x − 2)",
       "example": "**1.** Radicand must be non-negative: $x-2\\ge 0$.\n**2.** Solve: $x\\ge 2$ — that's the **domain**.\n**3.** Square roots output $0$ or more: **range** $y\\ge 0$.",
       "graph": {
        "kind": "sqrt",
        "a": 1,
        "h": 2,
        "k": 0,
        "domain": [
         0,
         10
        ],
        "marks": [
         {
          "x": 2,
          "y": 0,
          "label": "(2, 0)"
         }
        ]
       },
       "graphCaption": "y = √(x−2) — starts at (2, 0)"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "Find the domain:\n(a) $f(x)=\\dfrac{1}{x+6}$\n(b) $f(x)=\\sqrt{10-x}$",
       "graph": {
        "kind": "curve",
        "expr": "1/(x+6)",
        "domain": [
         -12,
         2
        ]
       },
       "graphCaption": "(a) — where does this one break?"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "Find the domain of $f(x)=\\dfrac{1}{x-5}$.",
      "steps": [
       "Set the denominator not equal to zero: $x-5\\ne 0$.",
       "Solve: $x\\ne 5$."
      ],
      "answer": "Domain: $x\\ne 5$ (all reals except $5$)"
     }
    ],
    "worksheet": {
     "title": "Domain & Range with Restrictions",
     "instructions": "State each domain restriction as an inequality (or write \"all real numbers\"). Section 3 asks for the domain AND the range.",
     "sections": [
      {
       "type": "State the domain (denominator restrictions)",
       "space": "s",
       "workedExample": "**Example:** $f(x)=\\dfrac{1}{x+3}$: set $x+3\\ne 0$, so $x\\ne -3$. Domain: all reals except $-3$.",
       "directions": "Directions: Set the denominator not equal to zero and solve.",
       "problems": [
        "$f(x)=\\dfrac{1}{x-4}$",
        "$f(x)=\\dfrac{1}{x+7}$",
        "$f(x)=\\dfrac{x}{x^{2}-9}$",
        "$f(x)=\\dfrac{2}{x^{2}-16}$"
       ]
      },
      {
       "type": "State the domain (radical restrictions)",
       "space": "s",
       "workedExample": "**Example:** $f(x)=\\sqrt{x+6}$: set the radicand $\\ge 0$: $x+6\\ge 0$, so $x\\ge -6$.",
       "directions": "Directions: Set the radicand $\\ge 0$ and solve.",
       "problems": [
        "$f(x)=\\sqrt{x-1}$",
        "$f(x)=\\sqrt{2x-8}$",
        "$f(x)=\\sqrt{10-x}$"
       ]
      },
      {
       "type": "State domain AND range",
       "space": "m",
       "workedExample": "**Example:** $f(x)=x^{2}-5$ has no root or denominator, so the domain is all reals; the lowest output is $-5$, so the range is $y\\ge -5$.",
       "directions": "Directions: State the domain, then find the range by identifying the highest or lowest output.",
       "problems": [
        "$f(x)=x^{2}+7$",
        "🌶 $f(x)=\\dfrac{\\sqrt{x-1}}{x-4}$ --- give the domain only (two restrictions apply at once)"
       ]
      }
     ],
     "procedure": [
      "Denominator restrictions: set the denominator $\\ne 0$ and solve for the excluded $x$-value(s).",
      "Radical restrictions: set the radicand $\\ge 0$ and solve the resulting inequality.",
      "If a function has both a root and a denominator, apply BOTH restrictions and combine them.",
      "For range, find the highest or lowest output the graph reaches."
     ],
     "optionalExtra": [
      "🌶 Find the domain of $f(x)=\\dfrac{\\sqrt{x+3}}{x-1}$, showing both restrictions and how they combine."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "Design your own rational function that has EXACTLY two excluded $x$-values in its domain, and a square-root function that has a domain of exactly $x\\ge -4$. Show the algebra that proves your functions meet those requirements.",
     "why": "Extends domain-restriction skills by requiring students to work backward from a target domain to an equation, deepening algebraic fluency with both restriction types."
    },
    "exitTicket": [
     "State the domain of $f(x)=\\sqrt{x+5}$."
    ],
    "answerKey": [
     {
      "section": "State the domain (denominator restrictions)",
      "answers": [
       "$x\\ne 4$",
       "$x\\ne -7$",
       "$x\\ne \\pm 3$ (since $x^2-9=0$ at $x=3$ and $x=-3$)",
       "$x\\ne \\pm 4$ (since $x^2-16=0$ at $x=4$ and $x=-4$)"
      ]
     },
     {
      "section": "State the domain (radical restrictions)",
      "answers": [
       "$x\\ge 1$",
       "$x\\ge 4$ (solve $2x-8\\ge 0$)",
       "$x\\le 10$ (solve $10-x\\ge 0$)"
      ]
     },
     {
      "section": "State domain AND range",
      "answers": [
       "Domain: all real numbers; range: $y\\ge 7$",
       "Domain: $x\\ge 1$ and $x\\ne 4$ (the root requires $x\\ge 1$; the denominator excludes $x=4$)"
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "Two restrictions apply. Radical: the radicand must be $\\ge 0$, so $x+3\\ge 0$, giving $x\\ge -3$. Denominator: it cannot be $0$, so $x-1\\ne 0$, giving $x\\ne 1$. Combine them: start with $x\\ge -3$, then remove $x=1$. Domain: $x\\ge -3$ and $x\\ne 1$ (i.e., $[-3,1)\\cup(1,\\infty)$)."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.4",
     "title": "Domain and Range"
    }
   },
   "Thu": {
    "type": "worksheet",
    "hook": "Fold a graph of $y=x^2$ in half along the $y$-axis — the two sides match perfectly. Ask: 'What does that tell us about the equation?'",
    "objective": "Students will determine algebraically whether a function is even, odd, or neither, and connect each classification to a symmetry pattern on the graph.",
    "bellRinger": "For $f(x)=x^{2}-3$, compute $f(-2)$ and $f(2)$. What do you notice?",
    "agenda": [
     "Bell ringer: compare $f(-2)$ and $f(2)$",
     "New term: even and odd functions",
     "We-do example",
     "Independent worksheet",
     "Exit ticket"
    ],
    "assessment": "Exit ticket: determine whether $f(x)=x^{3}+2$ is even, odd, or neither.",
    "video": {
     "short": {
      "title": "Even, Odd, or Neither Functions (Khan Academy)",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+even+odd+or+neither+functions",
      "note": "~5 min"
     },
     "long": {
      "title": "Determining Even and Odd Functions Algebraically (Mathispower4u)",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+even+odd+functions+algebraically",
      "note": "~8 min, optional"
     },
     "questions": [
      "What does it mean graphically for a function to be symmetric about the $y$-axis?",
      "What does it mean graphically for a function to be symmetric about the origin?",
      "If $f(-x)$ doesn't equal $f(x)$ OR $-f(x)$, what do we call the function?"
     ]
    },
    "videoPlacement": "Play the short video right after the bell ringer discussion, before the formal definitions, so students see the pattern before naming it.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Students compute $f(-2)$ and $f(2)$ for $f(x)=x^2-3$ and notice they're equal.",
      "say": "Will that pattern hold for ANY value of x, or just x=2?"
     },
     {
      "min": 5,
      "title": "Video",
      "do": "Play the short even/odd video.",
      "say": "Which example in the video matched our bell ringer pattern?"
     },
     {
      "min": 8,
      "title": "New term: even and odd",
      "do": "Define even ($f(-x)=f(x)$, y-axis symmetry) and odd ($f(-x)=-f(x)$, origin symmetry) functions.",
      "options": [
       "Physically fold a printed graph in half to show y-axis symmetry for the even example"
      ],
      "say": "If neither pattern holds, what should we conclude about the function?"
     },
     {
      "min": 8,
      "title": "We-do example",
      "do": "Work the guided-notes worked example: test $f(x)=x^2-3$ by substituting $-x$.",
      "say": "After we simplify f(-x), what do we compare it to?"
     },
     {
      "min": 17,
      "title": "Independent worksheet",
      "do": "Students work the worksheet, showing the substitution step for every problem.",
      "say": "Did you show the substitution work, not just the final label?"
     },
     {
      "min": 5,
      "title": "Exit ticket",
      "do": "Students complete the exit ticket individually and turn it in.",
      "say": "Show your substitution work for full credit."
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nA function is **even** if $f(-x)=f(x)$ (its graph is symmetric about the $y$-axis). A function is **odd** if $f(-x)=-f(x)$ (its graph is symmetric about the origin). If neither is true, the function is **neither**.\n\n## Key Terms\n- **Even function** — $f(-x)=f(x)$; graph mirrors across the $y$-axis\n- **Odd function** — $f(-x)=-f(x)$; graph is symmetric about the origin (180° rotation)\n\n## Worked Example\nStep 1: For $f(x)=x^{2}-3$, substitute $-x$ for every $x$: $f(-x)=(-x)^2-3$.\nStep 2: Simplify: $(-x)^2=x^2$, so $f(-x)=x^2-3$.\nStep 3: Compare to the original: $f(-x)=x^2-3=f(x)$ — they match exactly.\nAnswer: $f(x)=x^2-3$ is **even**.\n\n## You Try\nDetermine whether $f(x)=x^{3}$ is even, odd, or neither.",
    "guidedNotes": {
     "title": "Symmetry: Even, Odd, or Neither",
     "vocab": [
      {
       "term": "Even function",
       "def": "a function symmetric about the {{$y$-axis|2cm}}; algebraically, $f(-x)=$ {{$f(x)$|1.8cm}} for every $x$."
      },
      {
       "term": "Odd function",
       "def": "a function symmetric about the {{origin|2.2cm}}; algebraically, $f(-x)=$ {{$-f(x)$|2cm}} for every $x$."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "x^2-3",
        "domain": [
         -3,
         3
        ],
        "color": "blue"
       }
      ],
      "xmin": -3.5,
      "xmax": 3.5,
      "ymin": -4,
      "ymax": 7,
      "caption": "$y=x^{2}-3$ --- the $y$-axis is a mirror line, confirming it's even.",
      "width": "8cm",
      "height": "5.5cm"
     },
     "youTry": [
      {
       "prompt": "Determine whether $f(x)=x^{3}$ is even, odd, or neither.",
       "answer": "odd: $f(-x)=(-x)^3=-x^3=-f(x)$"
      },
      {
       "prompt": "Determine whether $f(x)=x^{2}+x$ is even, odd, or neither.",
       "answer": "neither: $f(-x)=x^2-x$, which is not equal to $f(x)$ or $-f(x)$"
      }
     ],
     "summary": "Substitute {{$-x$|1.4cm}} into the function: if you get back the ORIGINAL function, it's {{even|1.2cm}}; if you get back the {{negative|2cm}} of the original, it's odd; otherwise, neither.",
     "formulas": [
      {
       "name": "Even test",
       "formula": "$f(-x)=f(x)$ (mirror over y-axis)"
      },
      {
       "name": "Odd test",
       "formula": "$f(-x)=-f(x)$ (180° about origin)"
      }
     ],
     "examples": [
      {
       "label": "Type 1 — even, odd, or neither",
       "prompt": "Determine whether $f(x)=x^{2}-3$ is even, odd, or neither.",
       "steps": [
        "Substitute $-x$ for $x$: $f(-x)=(-x)^{2}-3=$ {{$x^{2}-3$|2.4cm}}.",
        "Compare this result to the original $f(x)=x^2-3$: they are {{equal|1.8cm}}.",
        "Since $f(-x)=f(x)$, the function is {{even|1.4cm}}."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": 0,
        "c": -3,
        "domain": [
         -4,
         4
        ]
       }
      }
     ]
    },
    "notesExit": "Determine whether $f(x)=x^{3}+2$ is even, odd, or neither.",
    "vocab": [
     {
      "term": "Even function",
      "definition": "A function where $f(-x)=f(x)$ for all $x$ in the domain; its graph is symmetric about the $y$-axis."
     },
     {
      "term": "Odd function",
      "definition": "A function where $f(-x)=-f(x)$ for all $x$ in the domain; its graph is symmetric about the origin."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Even, Odd, or Neither",
     "slides": [
      {
       "type": "define",
       "heading": "Symmetry you can prove",
       "bullets": [
        "**Even**: $f(-x)=f(x)$ — mirror image across the y-axis.",
        "**Odd**: $f(-x)=-f(x)$ — spins 180° about the origin.",
        "The algebra decides, not the picture: substitute $-x$ and simplify."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": 0,
        "c": -3,
        "domain": [
         -4,
         4
        ]
       },
       "graphCaption": "y = x² − 3 — perfect mirror across the y-axis: even"
      },
      {
       "type": "example",
       "heading": "We do:  f(x) = x² − 3",
       "example": "**1.** Substitute: $f(-x)=(-x)^{2}-3$.\n**2.** Simplify: $(-x)^{2}=x^{2}$, so $f(-x)=x^{2}-3$.\n**3.** That equals $f(x)$ exactly → **even**.",
       "graph": {
        "kind": "cubic",
        "a": 1,
        "b": 0,
        "c": 0,
        "d": 0,
        "domain": [
         -2.5,
         2.5
        ]
       },
       "graphCaption": "contrast: y = x³ rotates onto itself — odd"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "Even, odd, or neither? Prove it with $f(-x)$:\n(a) $f(x)=x^{3}$\n(b) $f(x)=x^{2}+x$"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "Determine whether $f(x)=2x$ is even, odd, or neither.",
      "steps": [
       "Substitute $-x$: $f(-x)=2(-x)=-2x$.",
       "Compare to $-f(x)=-2x$: they match."
      ],
      "answer": "Odd: $f(-x)=-2x=-f(x)$"
     }
    ],
    "worksheet": {
     "title": "Even, Odd, or Neither",
     "instructions": "For each function, compute $f(-x)$, simplify, then classify the function as even, odd, or neither. Show the substitution.",
     "sections": [
      {
       "type": "Determine even, odd, or neither",
       "space": "m",
       "workedExample": "**Example:** $f(x)=x^{4}-x^{2}$: $f(-x)=(-x)^4-(-x)^2=x^4-x^2=f(x)$, so it is **even**.",
       "directions": "Directions: Compute $f(-x)$ and simplify, then classify as even, odd, or neither.",
       "problems": [
        "$f(x)=x^{2}+1$",
        "$f(x)=x^{3}-x$",
        "$f(x)=x^{3}+2$",
        "$f(x)=|x|$",
        "$f(x)=2x$",
        "$f(x)=x^{4}-3x^{2}$",
        "$f(x)=x^{5}$",
        "$f(x)=x^{2}+x$",
        "$f(x)=\\dfrac{1}{x}$",
        "🌶 $f(x)=x^{3}+x^{2}$"
       ]
      }
     ],
     "procedure": [
      "Replace every $x$ in the function with $-x$.",
      "Simplify the result completely.",
      "If $f(-x)=f(x)$, the function is even.",
      "If $f(-x)=-f(x)$, the function is odd.",
      "If neither matches, the function is neither."
     ],
     "optionalExtra": [
      "🌶 Explain why any function made ONLY of even-power terms (like $x^4-3x^2+5$) must always be even, using the substitution rule."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "Write your own function that is neither even nor odd, then modify it by adding or removing exactly one term so that the new function becomes odd. Show the substitution work proving both classifications.",
     "why": "Extends the even/odd test by requiring students to reason about which terms preserve or break symmetry, deepening their algebraic understanding of the substitution rule."
    },
    "exitTicket": [
     "Determine whether $f(x)=4x-x^{3}$ is even, odd, or neither — show the $f(-x)$ work."
    ],
    "answerKey": [
     {
      "section": "Determine even, odd, or neither",
      "answers": [
       "$f(-x)=x^{2}+1=f(x)$: even",
       "$f(-x)=-x^{3}+x=-(x^{3}-x)=-f(x)$: odd",
       "$f(-x)=-x^{3}+2$, which is neither $f(x)$ nor $-f(x)$: neither",
       "$f(-x)=|-x|=|x|=f(x)$: even",
       "$f(-x)=-2x=-f(x)$: odd",
       "$f(-x)=x^{4}-3x^{2}=f(x)$: even (all even-power terms)",
       "$f(-x)=-x^{5}=-f(x)$: odd",
       "$f(-x)=x^{2}-x$, which is neither $f(x)$ nor $-f(x)$: neither",
       "$f(-x)=\\dfrac{1}{-x}=-\\dfrac{1}{x}=-f(x)$: odd",
       "$f(-x)=-x^{3}+x^{2}$: neither --- the even $x^2$ term stays positive while the odd $x^3$ term flips sign, so it can't equal $f(x)$ or $-f(x)$"
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "When you substitute $-x$ into any even-power term, the negative disappears: $(-x)^2=x^2$, $(-x)^4=x^4$, and in general $(-x)^{2n}=x^{2n}$ because a negative base raised to an even power is positive. A constant term (like $+5$) is also unchanged. So if EVERY term has an even power (or is a constant), then $f(-x)$ equals the original $f(x)$ term-for-term. For example, $f(x)=x^4-3x^2+5$ gives $f(-x)=(-x)^4-3(-x)^2+5=x^4-3x^2+5=f(x)$. Since $f(-x)=f(x)$, the function must be even."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.6",
     "title": "Symmetry"
    }
   },
   "Fri": {
    "type": "worksheet",
    "hook": "Announce: 'Today you're the teacher — every problem could show up disguised as one of the 4 skills we built this week. Can you spot which one it's testing?'",
    "objective": "Students will apply parent-function identification, increasing/decreasing and max/min analysis, domain and range restrictions, and even/odd symmetry testing to mixed review problems, demonstrating mastery on a short quiz-style check.",
    "bellRinger": "Without graphing, list the 4 skills we practiced this week (Mon–Thu) in one phrase each.",
    "agenda": [
     "Bell ringer: name the week's 4 skills",
     "Mixed review stations (rotate through Mon-Thu skill types)",
     "Whole-class trouble-spot review",
     "Quiz-style check (individual, quiet)",
     "Self-check against answer key",
     "Exit ticket"
    ],
    "assessment": "Quiz-style check: 8 mixed problems covering parent functions, increasing/decreasing & max/min, domain & range, and even/odd symmetry.",
    "video": {
     "short": {
      "title": "Analyzing Functions Review — Parent Functions, Domain, Symmetry (Organic Chemistry Tutor)",
      "url": "https://www.youtube.com/results?search_query=Organic+Chemistry+Tutor+analyzing+functions+review+domain+symmetry",
      "note": "~6 min"
     },
     "long": {
      "title": "Full Unit Review: Functions and Their Properties (Mathispower4u)",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+functions+unit+review+domain+range+symmetry",
      "note": "~15 min, optional"
     },
     "questions": [
      "Which of the 4 skills from this week appeared FIRST in the review video?",
      "What's one 'trap' to watch for when finding domain?",
      "What's the quickest way to check if a function is even without graphing it?"
     ]
    },
    "videoPlacement": "Play the short review video at the start of class, right after the bell ringer, as a fast-paced refresher before students rotate through review stations.",
    "script": [
     {
      "min": 4,
      "title": "Bell ringer",
      "do": "Students list the 4 skills from the week from memory.",
      "say": "Which skill do you feel LEAST confident about? Be honest."
     },
     {
      "min": 6,
      "title": "Review video",
      "do": "Play the short mixed-review video covering all 4 skills.",
      "say": "Which reminder from the video do you need most today?"
     },
     {
      "min": 20,
      "title": "Mixed review stations",
      "do": "Students rotate through 4 short stations, one per skill (parent ID, max/min & intervals, domain/range, even/odd), each with 2-3 problems.",
      "options": [
       "Run this as a whole-class relay instead of physical stations if space is limited"
      ],
      "say": "At each station, name the skill out loud before you start solving."
     },
     {
      "min": 6,
      "title": "Trouble-spot review",
      "do": "Quickly re-teach the 1-2 stations where most groups struggled, using a student's actual work as an example.",
      "say": "What almost tricked you on this one?"
     },
     {
      "min": 10,
      "title": "Quiz-style check",
      "do": "Students complete the 8-problem quiz-style worksheet individually and silently.",
      "say": "This is independent — show me what YOU know."
     },
     {
      "min": 2,
      "title": "Exit ticket",
      "do": "Students turn in the quiz and answer one final reflection question.",
      "say": "Which of the 4 skills do you want more practice on next week?"
     }
    ],
    "doubleOption": true,
    "notes": "## Key Idea\nThis week you built 4 tools for **analyzing functions**: naming the **parent function**, describing where it's **increasing/decreasing** and its **max/min**, finding its **domain and range**, and testing its **symmetry** (even, odd, neither). Today mixes all 4 together.\n\n## Key Terms\n- **Parent function** — the simplest form of a family\n- **Increasing/decreasing & max/min** — direction and turning points of a graph\n- **Domain & range** — allowed inputs and resulting outputs\n- **Even/odd symmetry** — $f(-x)=f(x)$ (even) or $f(-x)=-f(x)$ (odd)\n\n## Worked Example\nStep 1: Given $f(x)=-(x-1)^2+4$, first identify the family: quadratic (parent $x^2$, shifted).\nStep 2: Vertex is $(1,4)$; opens down, so it's a maximum; increasing $x<1$, decreasing $x>1$.\nStep 3: Domain is all reals (no root/denominator); range is $y\\le 4$.\nStep 4: Test symmetry: $f(-x)=-(-x-1)^2+4=-(x+1)^2+4\\ne f(x)$ and $\\ne -f(x)$, so neither.\nAnswer: quadratic family; max $(1,4)$; domain all reals, range $y\\le 4$; neither even nor odd.\n\n## You Try\nFor $f(x)=\\sqrt{x-3}$, identify the parent family and state the domain and range.",
    "guidedNotes": {
     "title": "Mixed Review: Analyzing Functions",
     "vocab": [
      {
       "term": "Analyzing a function",
       "def": "combining all 4 skills from this week: {{family|1.8cm}}, {{direction/extrema|3cm}}, {{domain/range|2.8cm}}, and symmetry."
      },
      {
       "term": "Symmetry check",
       "def": "substitute {{$-x$|1.4cm}} into the function and compare the result to $f(x)$ and $-f(x)$."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "-(x-1)^2+4",
        "domain": [
         -1,
         3
        ],
        "color": "blue"
       }
      ],
      "xmin": -1.5,
      "xmax": 3.5,
      "ymin": -1,
      "ymax": 5.5,
      "points": [
       [
        1,
        4,
        "max $(1,4)$",
        "red"
       ]
      ],
      "caption": "$y=-(x-1)^2+4$ --- quadratic family, maximum at $(1,4)$, domain all reals, range $y\\le 4$.",
      "width": "8cm",
      "height": "5.5cm"
     },
     "youTry": [
      {
       "prompt": "For $f(x)=\\sqrt{x-3}$, identify the parent family and state the domain and range.",
       "answer": "square root family; domain $x\\ge 3$; range $y\\ge 0$"
      },
      {
       "prompt": "Is $f(x)=x^{2}+5$ even, odd, or neither?",
       "answer": "even: $f(-x)=x^2+5=f(x)$"
      }
     ],
     "summary": "When analyzing any function, work through all 4 checks in order: {{family|1.6cm}}, {{max/min & intervals|3.4cm}}, {{domain/range|2.8cm}}, then {{symmetry|2.2cm}}.",
     "formulas": [
      {
       "name": "1 Family",
       "formula": "match the core operation"
      },
      {
       "name": "2 Vertex",
       "formula": "$(h,k)$, max/min, intervals"
      },
      {
       "name": "3 Domain/Range",
       "formula": "denominator $\\neq0$, radicand $\\ge0$"
      },
      {
       "name": "4 Symmetry",
       "formula": "test $f(-x)$"
      }
     ],
     "examples": [
      {
       "label": "All 4 checks on one function",
       "prompt": "For $f(x)=-(x-1)^{2}+4$, find the parent family, max/min with intervals, domain/range, and symmetry.",
       "steps": [
        "This is a shifted quadratic, so the parent family is {{quadratic|2.2cm}}.",
        "Vertex form gives vertex $(1,4)$; the leading coefficient is negative, so it opens down and the vertex is a {{maximum|2.2cm}}; increasing $x<1$, decreasing {{$x>1$|1.8cm}}.",
        "There's no root or denominator, so the domain is all reals; the highest output is $4$, so the range is {{$y\\le 4$|2cm}}.",
        "Testing symmetry: $f(-x)=-(-x-1)^2+4=-(x+1)^2+4$, which matches neither $f(x)$ nor $-f(x)$, so it is {{neither|1.8cm}}."
       ],
       "graph": {
        "kind": "parabola",
        "a": -1,
        "b": 2,
        "c": 3,
        "domain": [
         -3,
         5
        ],
        "marks": [
         {
          "x": 1,
          "y": 4,
          "label": "max (1, 4)"
         }
        ]
       }
      }
     ]
    },
    "notesExit": "For $f(x)=x^{2}-9$, state the parent family, the domain and range, and whether it is even, odd, or neither.",
    "vocab": [
     {
      "term": "Mixed analysis",
      "definition": "Applying parent-family identification, max/min & interval analysis, domain/range, and symmetry testing together on one function."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Mixed Practice + Quiz Check",
     "slides": [
      {
       "type": "recap",
       "heading": "The 4-step checklist",
       "bullets": [
        "**1.** Name the parent family.",
        "**2.** Vertex: max or min? Increasing/decreasing intervals.",
        "**3.** Domain and range (watch denominators and radicals).",
        "**4.** Even, odd, or neither — prove it with $f(-x)$."
       ]
      },
      {
       "type": "example",
       "heading": "We do:  f(x) = −(x − 1)² + 4",
       "example": "**1.** Family: **quadratic**.\n**2.** $a<0$ → **max** of $4$ at $x=1$; increasing $x<1$, decreasing $x>1$.\n**3.** Domain: all reals. Range: $y\\le 4$.\n**4.** $f(-x)=-(-x-1)^{2}+4=-(x+1)^{2}+4$ — not $f(x)$, not $-f(x)$ → **neither**.",
       "graph": {
        "kind": "parabola",
        "a": -1,
        "b": 2,
        "c": 3,
        "domain": [
         -3,
         5
        ],
        "marks": [
         {
          "x": 1,
          "y": 4,
          "label": "max (1, 4)"
         }
        ]
       },
       "graphCaption": "y = −(x−1)² + 4"
      },
      {
       "type": "youtry",
       "heading": "Your turn — quiz warm-up",
       "youTry": "Run all 4 checks on $f(x)=\\sqrt{x-3}$.",
       "graph": {
        "kind": "sqrt",
        "a": 1,
        "h": 3,
        "k": 0,
        "domain": [
         1,
         11
        ],
        "marks": [
         {
          "x": 3,
          "y": 0,
          "label": "(3, 0)"
         }
        ]
       },
       "graphCaption": "where does it start, and what does that tell you?"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "For $f(x)=\\sqrt{x-3}$, apply all 4 checks: parent family, max/min & intervals (if any), domain/range, and symmetry.",
      "steps": [
       "Parent family: square root (shifted right 3).",
       "Square root has no max/min or turning point — it only increases across its whole domain.",
       "Domain: radicand $x-3\\ge 0\\Rightarrow x\\ge 3$; range: $y\\ge 0$.",
       "Symmetry: domain isn't symmetric about the origin ($x\\ge3$ only), so it's automatically neither even nor odd."
      ],
      "answer": "Square root family; always increasing on $x\\ge 3$ (no max/min); domain $x\\ge 3$, range $y\\ge 0$; neither"
     }
    ],
    "worksheet": {
     "title": "Quiz-Style Check: Analyzing Functions",
     "instructions": "For each function, answer what is asked. This is a quiz-style check — work independently and show all steps.",
     "sections": [
      {
       "type": "Identify the parent family and state domain/range",
       "space": "s",
       "workedExample": "**Example:** $f(x)=|x|-2$: parent family is **absolute value**; domain is all reals; range is $y\\ge -2$.",
       "directions": "Directions: Name the parent family, then give the domain and range.",
       "problems": [
        "$f(x)=x^{3}-1$",
        "$f(x)=\\sqrt{x+4}$",
        "$f(x)=\\dfrac{1}{x-2}$"
       ]
      },
      {
       "type": "State max/min, vertex, and intervals",
       "space": "m",
       "workedExample": "**Example:** $y=(x+2)^2-5$: vertex $(-2,-5)$; opens up, minimum; decreasing $x<-2$, increasing $x>-2$.",
       "directions": "Directions: State max or min, the vertex, and both intervals.",
       "problems": [
        "$y=-(x-3)^{2}+2$",
        "$y=(x+1)^{2}-4$"
       ]
      },
      {
       "type": "Determine even, odd, or neither",
       "space": "s",
       "workedExample": "**Example:** $f(x)=x^{4}$: $f(-x)=(-x)^4=x^4=f(x)$, so it's **even**.",
       "directions": "Directions: Substitute $-x$, simplify, and classify.",
       "problems": [
        "$f(x)=x^{3}-x$",
        "$f(x)=x^{2}+3$",
        "🌶 $f(x)=x^{3}+4$"
       ]
      }
     ],
     "procedure": [
      "Step 1 — Name the parent family from the equation's shape.",
      "Step 2 — For quadratics, find the vertex and determine max/min and intervals.",
      "Step 3 — Check for domain restrictions (denominators, radicals) and determine the range.",
      "Step 4 — Substitute $-x$ to test even, odd, or neither."
     ],
     "optionalExtra": [
      "🌶 Write a function of your own that is a shifted square-root function, then find its domain, range, and classify its symmetry."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "Create a single function that combines TWO parent families in one rule (for example, an absolute value of a quadratic, like $f(x)=|x^{2}-4|$). Analyze it completely: name what it's built from, find its domain and range, and test whether it is even, odd, or neither.",
     "why": "Extends the week's 4-skill analysis process to a composite function, requiring students to apply every tool learned this week to something more complex than a single parent function."
    },
    "exitTicket": [
     "For $f(x)=x^{2}-9$, state the parent family, the domain and range, and whether it is even, odd, or neither."
    ],
    "answerKey": [
     {
      "section": "Identify the parent family and state domain/range",
      "answers": [
       "Cubic family; domain all real numbers; range all real numbers",
       "Square root family; domain $x\\ge -4$; range $y\\ge 0$",
       "Reciprocal family; domain $x\\ne 2$; range $y\\ne 0$"
      ]
     },
     {
      "section": "State max/min, vertex, and intervals",
      "answers": [
       "Opens down, maximum; vertex $(3,2)$; increasing $x<3$, decreasing $x>3$",
       "Opens up, minimum; vertex $(-1,-4)$; decreasing $x<-1$, increasing $x>-1$"
      ]
     },
     {
      "section": "Determine even, odd, or neither",
      "answers": [
       "$f(-x)=-x^3+x=-(x^3-x)=-f(x)$: odd",
       "$f(-x)=x^2+3=f(x)$: even",
       "$f(-x)=-x^3+4$, matching neither $f(x)$ nor $-f(x)$: neither"
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "Answers vary; a sample valid response is $f(x)=\\sqrt{x-2}+3$. Domain: the radicand must be $\\ge 0$, so $x-2\\ge 0$, giving $x\\ge 2$. Range: the smallest output is at $x=2$, where $f(2)=\\sqrt{0}+3=3$, and the graph only rises from there, so $y\\ge 3$. Symmetry: the domain $x\\ge 2$ is not symmetric about the origin (e.g., $x=2$ is allowed but $x=-2$ is not), so the function is neither even nor odd. Any correctly analyzed shifted square-root function earns full credit."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.5",
     "title": "Maximums and Minimums"
    }
   }
  }
 },
 "alg2": {
  "days": {
   "Mon": {
    "type": "intro",
    "hook": "A basketball leaves a player's hand and rises, curves, then falls through the hoop. A suspension bridge cable dips in a smooth U. A satellite dish curves to focus signals at one point. All of these are parabolas -- and today we get the tool that describes every single one of them with just three numbers.",
    "objective": "Students will identify the value of $a$ and the vertex $(h,k)$ from a quadratic function written in vertex form $y=a(x-h)^2+k$, and will state whether the parabola opens up or down.",
    "bellRinger": "Graph $y=x^2$ on the grid provided using the table $x=-2,-1,0,1,2$. Then answer: what shape is the graph, and at what point does it turn?",
    "agenda": [
     "Bell ringer: graph $y=x^2$ (5 min)",
     "Hook + real-world parabolas (5 min)",
     "Direct instruction: vertex form $y=a(x-h)^2+k$ (12 min)",
     "Video: Khan Academy vertex form (6 min)",
     "We-do examples: identify $a$, $(h,k)$, opens up/down (10 min)",
     "Guided notes + you-try (6 min)",
     "Exit ticket (4 min)"
    ],
    "assessment": "Exit ticket requires students to read $a$, $h$, $k$ from a vertex-form equation and state the vertex and direction of opening; graded informally as ready/not-ready to move into graphing tomorrow.",
    "video": {
     "short": {
      "title": "Khan Academy: Vertex form of quadratic functions",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+vertex+form+of+a+quadratic+function",
      "note": "3-5 min overview of vertex form and what $a$, $h$, $k$ control."
     },
     "long": {
      "title": "Mathispower4u: Graphing Quadratic Functions in Vertex Form",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+graphing+quadratic+functions+in+vertex+form",
      "note": "Longer walkthrough with multiple worked examples of identifying the vertex and direction of opening."
     },
     "questions": [
      "In vertex form $y=a(x-h)^2+k$, which letter tells you whether the parabola opens up or down?",
      "What is the vertex of a parabola written as $y=a(x-h)^2+k$?",
      "If $a$ is a fraction between $0$ and $1$, what does that do to the graph compared to $y=x^2$?",
      "Why is the sign inside the parentheses opposite of the $h$-value in the vertex?"
     ]
    },
    "videoPlacement": "after direct instruction, before we-do examples",
    "script": [
     {
      "min": 5,
      "title": "Bell Ringer",
      "do": "Students graph $y=x^2$ using the table of values on their warm-up sheet while you take attendance.",
      "options": [
       "Cold-call one student to share their table values"
      ],
      "say": "Plot these five points and connect them smoothly. What shape do you get? Where does it change direction?"
     },
     {
      "min": 5,
      "title": "Hook",
      "do": "Show 2-3 quick images/examples: basketball arc, bridge cable, satellite dish (describe verbally if no projector).",
      "options": [
       "Ask students to name other U-shaped things they've seen"
      ],
      "say": "Every one of these curves is called a parabola, and every parabola can be written with the same simple formula. By the end of the week you'll be able to sketch any of these instantly."
     },
     {
      "min": 12,
      "title": "Direct Instruction: Vertex Form",
      "do": "Write $y=a(x-h)^2+k$ on the board. Label each part: $a$ controls steepness/direction, $(h,k)$ is the vertex (the turning point).",
      "options": [
       "Use a physical gesture (hands forming a U) to reinforce vertex as the turning point",
       "Have students copy the labeled formula into their notes before moving on"
      ],
      "say": "This is called vertex form because the vertex -- the highest or lowest point -- is sitting right there in the equation. If $a$ is positive, the parabola opens up like a smile. If $a$ is negative, it opens down like a frown. The vertex is $(h,k)$ -- but watch out, the sign in front of $h$ inside the parentheses is the OPPOSITE of what you see."
     },
     {
      "min": 6,
      "title": "Video",
      "do": "Play the Khan Academy short video on vertex form.",
      "options": [
       "Pause after the first example to check understanding with a thumbs up/down"
      ],
      "say": "Watch for how the presenter identifies the vertex directly from the equation -- that's exactly what we're about to practice."
     },
     {
      "min": 10,
      "title": "We-Do Examples",
      "do": "Work through 2-3 examples as a class: $y=2(x-3)^2+1$, $y=-(x+2)^2-4$, $y=\\frac{1}{2}x^2+5$ (treat as $h=0$).",
      "options": [
       "Cold-call students for each value ($a$, $h$, $k$) before revealing",
       "Have students hold up whiteboards with their answer for $(h,k)$"
      ],
      "say": "For $y=2(x-3)^2+1$: $a=2$ so it opens up and is narrower than $y=x^2$. The vertex? Careful -- it's $(3,1)$, not $(-3,1)$, because the formula has $x-h$ and here we have $x-3$."
     },
     {
      "min": 6,
      "title": "Guided Notes + You Try",
      "do": "Students fill in guided notes cloze blanks, then complete the You Try problems independently.",
      "options": [
       "Partner check answers before you reveal them"
      ],
      "say": "Fill in the blanks as we go, then try the two problems on your own. Raise your hand if you get stuck on the sign of $h$."
     },
     {
      "min": 4,
      "title": "Exit Ticket",
      "do": "Students complete the exit ticket and turn it in on their way out.",
      "options": [
       "Collect at the door for a quick ready/not-ready check"
      ],
      "say": "Identify $a$, the vertex, and whether it opens up or down. This tells me if you're ready for graphing tomorrow."
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nEvery quadratic function can be written in **vertex form**: $y=a(x-h)^2+k$. This form directly reveals the **vertex** $(h,k)$ -- the highest or lowest point of the parabola -- and the value of $a$, which tells you whether the parabola opens up or down and how narrow or wide it is.\n\n## Key Terms\n- **Parabola**: the U-shaped graph of a quadratic function.\n- **Vertex**: the turning point of a parabola, written $(h,k)$.\n- **Vertex form**: $y=a(x-h)^2+k$.\n- **Opens up / opens down**: determined by the sign of $a$ ($a>0$ opens up, $a<0$ opens down).\n\n## Worked Example\nIdentify $a$, the vertex, and the direction of opening for $y=-3(x+2)^2+5$.\n- Step 1: Match to $y=a(x-h)^2+k$. Rewrite $(x+2)$ as $(x-(-2))$ so $h=-2$ -> $a=-3$, $h=-2$, $k=5$.\n- Step 2: The vertex is $(h,k)=(-2,5)$.\n- Step 3: Since $a=-3<0$, the parabola opens down.\n- Answer: vertex $(-2,5)$, opens down, narrower than $y=x^2$ since $|a|=3>1$.\n\n## You Try\nIdentify $a$, the vertex, and the direction of opening for $y=\\frac{1}{4}(x-1)^2-6$.",
    "guidedNotes": {
     "title": "Guided Notes: Vertex Form of a Quadratic Function",
     "vocab": [
      {
       "term": "Parabola",
       "def": "The {{U-shaped|2cm}} graph produced by a quadratic function."
      },
      {
       "term": "Vertex",
       "def": "The turning point of a parabola, written as the ordered pair {{$(h,k)$|2.5cm}}."
      },
      {
       "term": "Vertex Form",
       "def": "A quadratic equation written as {{$y=a(x-h)^2+k$|3.5cm}}, where $(h,k)$ is the vertex."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "2*(x-3)^2+1",
        "domain": [
         1.3,
         4.7
        ],
        "color": "blue"
       }
      ],
      "xmin": -1,
      "xmax": 6,
      "ymin": -1,
      "ymax": 9,
      "points": [
       [
        3,
        1,
        "vertex $(3,1)$",
        "red"
       ]
      ],
      "caption": "$y=2(x-3)^2+1$ opens up with vertex at $(3,1)$.",
      "width": "8cm",
      "height": "6cm"
     },
     "youTry": [
      {
       "prompt": "Identify $a$, the vertex, and direction of opening for $y=-(x+4)^2+2$.",
       "answer": "$a=-1$, vertex $(-4,2)$, opens down."
      },
      {
       "prompt": "Identify $a$, the vertex, and direction of opening for $y=\\frac{1}{2}(x-5)^2-3$.",
       "answer": "$a=\\frac{1}{2}$, vertex $(5,-3)$, opens up (wider than $y=x^2$)."
      }
     ],
     "summary": "In vertex form $y=a(x-h)^2+k$, the vertex is always {{$(h,k)$|2.5cm}}, remembering that the sign of $h$ inside the equation is the {{opposite|2cm}} of the value you write in the ordered pair. The sign of $a$ tells direction: positive means opens {{up|1.5cm}}, negative means opens {{down|2cm}}.",
     "formulas": [
      {
       "name": "Vertex form",
       "formula": "$y=a(x-h)^{2}+k$ → vertex $(h,k)$"
      },
      {
       "name": "Direction",
       "formula": "$a>0$ up (min) · $a<0$ down (max)"
      },
      {
       "name": "Width",
       "formula": "$|a|>1$ narrow · $0<|a|<1$ wide"
      }
     ],
     "examples": [
      {
       "label": "Identify a, the vertex, and direction",
       "prompt": "Identify $a$, the vertex, and the direction of opening for $y=2(x-3)^2+1$.",
       "steps": [
        "Match the equation to $y=a(x-h)^2+k$: here $a=$ {{$2$|1cm}}.",
        "Since the equation has $(x-3)$, we know $h=$ {{$3$|1cm}}.",
        "The constant added at the end gives $k=$ {{$1$|1cm}}.",
        "So the vertex $(h,k)=$ {{$(3,1)$|2cm}}.",
        "Since $a=2$ is {{positive|2cm}}, the parabola opens {{up|1.5cm}}."
       ],
       "graph": {
        "kind": "parabola",
        "a": 2,
        "b": -12,
        "c": 19,
        "domain": [
         0,
         6
        ],
        "marks": [
         {
          "x": 3,
          "y": 1,
          "label": "(3, 1)"
         }
        ]
       }
      },
      {
       "label": "Negative a — vertex is a maximum",
       "prompt": "For $y=-(x+2)^{2}+5$: identify $a$, the vertex, and the direction.",
       "steps": [
        "$a=$ {{$-1$|1.5cm}}, which is negative → opens {{down|2cm}}.",
        "Inside is $(x+2)$, so $h=$ {{$-2$|1.5cm}}; $k=$ {{$5$|1.5cm}}.",
        "Vertex {{$(-2,5)$|2cm}} — the {{maximum|2.5cm}} point of the graph."
       ],
       "graph": {
        "kind": "parabola",
        "a": -1,
        "b": -4,
        "c": 1,
        "domain": [
         -6,
         2
        ],
        "marks": [
         {
          "x": -2,
          "y": 5,
          "label": "max (−2, 5)"
         }
        ]
       },
       "answer": "$a=-1$; vertex $(-2,5)$; opens down (maximum)."
      }
     ]
    },
    "notesExit": "Identify $a$, $h$, $k$, the vertex, and the direction of opening for $y=-2(x-1)^2+4$.",
    "vocab": [
     {
      "term": "Parabola",
      "definition": "The U-shaped graph produced by any quadratic function."
     },
     {
      "term": "Vertex",
      "definition": "The maximum or minimum point of a parabola, written $(h,k)$."
     },
     {
      "term": "Vertex Form",
      "definition": "The form $y=a(x-h)^2+k$, which directly shows the vertex $(h,k)$ and the value $a$."
     },
     {
      "term": "Opens Up / Opens Down",
      "definition": "Whether the parabola has a minimum (opens up, $a>0$) or a maximum (opens down, $a<0$)."
     }
    ],
    "presentation": {
     "kind": "launch",
     "title": "Vertex Form of a Quadratic Function",
     "slides": [
      {
       "type": "hook",
       "heading": "Parabolas are everywhere",
       "bullets": [
        "A free throw, a water fountain, a satellite dish, a profit curve — all parabolas.",
        "Every one has a **turning point** that matters: the highest shot, the max profit.",
        "**Vertex form** hands you that point without any work. That's this week."
       ],
       "graph": {
        "kind": "parabola",
        "a": -0.5,
        "b": 2,
        "c": 1,
        "domain": [
         -1,
         5
        ],
        "marks": [
         {
          "x": 2,
          "y": 3,
          "label": "peak"
         }
        ]
       },
       "graphCaption": "every throw is a parabola"
      },
      {
       "type": "define",
       "heading": "Vertex form",
       "bullets": [
        "$y=a(x-h)^{2}+k$ — the vertex is exactly $(h,k)$.",
        "$a>0$ opens **up** (vertex = minimum); $a<0$ opens **down** (vertex = maximum).",
        "$|a|>1$: narrow. $0<|a|<1$: wide."
       ],
       "graph": {
        "kind": "parabola",
        "a": 2,
        "b": -12,
        "c": 19,
        "domain": [
         0,
         6
        ],
        "marks": [
         {
          "x": 3,
          "y": 1,
          "label": "(3, 1)"
         }
        ]
       },
       "graphCaption": "y = 2(x−3)² + 1 — vertex (3, 1), narrow, opens up"
      },
      {
       "type": "vocab",
       "heading": "The words for this unit",
       "vocab": [
        {
         "term": "Parabola",
         "definition": "the U-shaped graph of a quadratic"
        },
        {
         "term": "Vertex",
         "definition": "the turning point (h, k)"
        },
        {
         "term": "Vertex form",
         "definition": "$y=a(x-h)^{2}+k$"
        },
        {
         "term": "Opens up / down",
         "definition": "decided by the sign of a"
        }
       ]
      },
      {
       "type": "example",
       "heading": "We do:  y = 2(x − 3)² + 1",
       "example": "**1.** $a=2$: positive → opens **up**, and $2>1$ → narrow.\n**2.** $h$: inside is $(x-3)$, so $h=3$ — the sign flips.\n**3.** $k=1$. Vertex: $(3,1)$, and it's a **minimum**.",
       "graph": {
        "kind": "parabola",
        "a": 2,
        "b": -12,
        "c": 19,
        "domain": [
         0,
         6
        ],
        "marks": [
         {
          "x": 3,
          "y": 1,
          "label": "min (3, 1)"
         }
        ]
       },
       "graphCaption": "y = 2(x−3)² + 1"
      },
      {
       "type": "mistake",
       "heading": "The h sign trap",
       "mistake": "In $(x-3)^{2}$ the vertex x-value is $+3$, **not** $-3$.\nIn $(x+5)^{2}$ it's $-5$ — because $x+5=x-(-5)$.",
       "note": "Read h as: the x-value that makes the inside zero."
      },
      {
       "type": "wedo",
       "heading": "Together:  y = −(x + 2)² + 5",
       "bullets": [
        "$a=-1$: opens **down** → the vertex is a **maximum**.",
        "Inside is $(x+2)$: $h=-2$. And $k=5$.",
        "Vertex: $(-2,5)$ — the highest point of the graph."
       ],
       "graph": {
        "kind": "parabola",
        "a": -1,
        "b": -4,
        "c": 1,
        "domain": [
         -6,
         2
        ],
        "marks": [
         {
          "x": -2,
          "y": 5,
          "label": "max (−2, 5)"
         }
        ]
       },
       "graphCaption": "y = −(x+2)² + 5"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "For each: identify $a$, the vertex, and the direction of opening.\n(a) $y=3(x-1)^{2}-4$\n(b) $y=-\\tfrac{1}{2}(x+4)^{2}$",
       "graph": {
        "kind": "parabola",
        "a": 3,
        "b": -6,
        "c": -1,
        "domain": [
         -1,
         3
        ],
        "marks": [
         {
          "x": 1,
          "y": -4,
          "label": "(1, −4)"
         }
        ]
       },
       "graphCaption": "(a) to check yourself against"
      },
      {
       "type": "roadmap",
       "heading": "Where this week goes",
       "bullets": [
        "**Tue** — graph from vertex form: vertex, axis of symmetry, y-intercept.",
        "**Wed** — transformations: shifts, flips, stretches.",
        "**Thu** — max/min in the real world: thrown balls and profit.",
        "**Fri** — mixed review: everything on one function."
       ]
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "Identify $a$, the vertex, and direction of opening for $y=3(x-2)^2+4$.",
      "steps": [
       "Match to $y=a(x-h)^2+k$: $a=3$.",
       "$(x-2)$ gives $h=2$.",
       "Constant term gives $k=4$.",
       "Vertex is $(2,4)$; since $a=3>0$, opens up."
      ],
      "answer": "$a=3$, vertex $(2,4)$, opens up."
     },
     {
      "prompt": "Identify $a$, the vertex, and direction of opening for $y=-\\frac{1}{3}(x+1)^2+7$.",
      "steps": [
       "Match to $y=a(x-h)^2+k$: $a=-\\frac{1}{3}$.",
       "$(x+1)=(x-(-1))$ gives $h=-1$.",
       "Constant term gives $k=7$.",
       "Vertex is $(-1,7)$; since $a<0$, opens down."
      ],
      "answer": "$a=-\\frac{1}{3}$, vertex $(-1,7)$, opens down (wider than $y=x^2$)."
     },
     {
      "prompt": "Identify $a$, the vertex, and direction of opening for $y=(x-6)^2$.",
      "steps": [
       "Match to $y=a(x-h)^2+k$: since no number is written in front, $a=1$.",
       "$(x-6)$ gives $h=6$.",
       "No constant is added, so $k=0$.",
       "Vertex is $(6,0)$; since $a=1>0$, opens up."
      ],
      "answer": "$a=1$, vertex $(6,0)$, opens up."
     },
     {
      "prompt": "Identify $a$, the vertex, and direction of opening for $y=-5(x+3)^2-2$.",
      "steps": [
       "Match to $y=a(x-h)^2+k$: $a=-5$.",
       "$(x+3)=(x-(-3))$ gives $h=-3$.",
       "Constant term gives $k=-2$.",
       "Vertex is $(-3,-2)$; since $a<0$, opens down."
      ],
      "answer": "$a=-5$, vertex $(-3,-2)$, opens down (narrower than $y=x^2$)."
     }
    ],
    "worksheet": {
     "title": "Vertex Form of a Quadratic Function",
     "instructions": "For each equation, identify $a$, the vertex $(h,k)$, and whether the parabola opens up or down. Show your reasoning for $h$ (remember the sign flip).",
     "sections": [
      {
       "type": "Warm-Up: Identify $a$",
       "space": "s",
       "workedExample": "**Example:** For $y=4(x-1)^2+2$, $a=4$.",
       "directions": "State the value of $a$ for each equation and whether the parabola opens up or down.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=3(x-1)^2+2$",
        "$y=-2(x+5)^2+1$",
        "$y=\\frac{1}{4}(x-2)^2-3$",
        "$y=-x^2+6$"
       ]
      },
      {
       "type": "Identify the Vertex",
       "space": "m",
       "workedExample": "**Example:** For $y=-2(x+4)^2+7$, rewrite $(x+4)$ as $(x-(-4))$, so the vertex is $(-4,7)$.",
       "directions": "Identify the vertex $(h,k)$ for each equation. Show the rewritten form when needed.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=(x-5)^2+3$",
        "$y=2(x+2)^2-6$",
        "$y=-\\frac{1}{2}(x-0)^2+8$",
        "$y=5(x+7)^2$",
        "$y=-4(x-9)^2-1$"
       ]
      },
      {
       "type": "Full Identification",
       "space": "l",
       "workedExample": "**Example:** For $y=-3(x-2)^2+5$: $a=-3$ (opens down, narrower), vertex $(2,5)$.",
       "directions": "For each equation, state $a$, the vertex, and the direction of opening.",
       "figure": null,
       "diagram": {
        "plots": [
         {
          "expr": "-1*(x-1)^2+4",
          "domain": [
           -1,
           3
          ],
          "color": "blue"
         }
        ],
        "xmin": -3,
        "xmax": 5,
        "ymin": -2,
        "ymax": 6,
        "points": [
         [
          1,
          4,
          "vertex $(1,4)$",
          "red"
         ]
        ],
        "caption": "The graph of $y=-(x-1)^2+4$.",
        "width": "8cm",
        "height": "6cm"
       },
       "problems": [
        "$y=-(x-1)^2+4$ (use the graph above to confirm your answer)",
        "$y=2(x+3)^2-5$",
        "$y=-\\frac{1}{3}(x-6)^2+1$",
        "$y=6(x+1)^2+2$"
       ]
      }
     ],
     "procedure": [
      "Compare the equation to the pattern $y=a(x-h)^2+k$.",
      "Read off $a$ -- the number multiplied on the squared term.",
      "Rewrite $(x\\pm h)$ as $(x-h)$ if needed to correctly identify the sign of $h$.",
      "Read off $k$ -- the constant added or subtracted at the end.",
      "Write the vertex as the ordered pair $(h,k)$.",
      "State the direction of opening: up if $a>0$, down if $a<0$."
     ],
     "optionalExtra": [
      "Write a vertex-form equation whose parabola opens down with vertex $(-3,5)$ and is narrower than $y=x^2$.",
      "Two parabolas both have vertex $(2,-1)$, but one has $a=4$ and the other has $a=\\frac{1}{4}$. Explain how their graphs would differ."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "Without graphing, explain how you know that $y=-6(x-2)^2+3$ and $y=-\\frac{1}{6}(x-2)^2+3$ have the same vertex and direction of opening but look different when graphed. Describe the difference in words.",
     "why": "This pushes students to reason about how $|a|$ affects width independent of vertex location, deepening conceptual understanding beyond mechanical identification."
    },
    "exitTicket": [
     "Identify $a$, the vertex, and the direction of opening for $y=-2(x-1)^2+4$.",
     "Write a vertex-form equation with vertex $(0,-3)$ that opens up."
    ],
    "answerKey": [
     {
      "section": "Warm-Up: Identify $a$",
      "answers": [
       "$a=3$, opens up.",
       "$a=-2$, opens down.",
       "$a=\\frac{1}{4}$, opens up.",
       "$a=-1$, opens down."
      ]
     },
     {
      "section": "Identify the Vertex",
      "answers": [
       "Vertex $(5,3)$.",
       "Vertex $(-2,-6)$.",
       "Vertex $(0,8)$.",
       "Vertex $(-7,0)$.",
       "Vertex $(9,-1)$."
      ]
     },
     {
      "section": "Full Identification",
      "answers": [
       "$a=-1$, vertex $(1,4)$, opens down -- matches the graph shown.",
       "$a=2$, vertex $(-3,-5)$, opens up.",
       "$a=-\\frac{1}{3}$, vertex $(6,1)$, opens down.",
       "$a=6$, vertex $(-1,2)$, opens up."
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "Vertex $(-3,5)$ means $h=-3$, $k=5$; opens down means $a<0$; narrower than $y=x^2$ means $|a|>1$. One valid answer: $y=-2(x+3)^2+5$ (any coefficient with $a<-1$ works, e.g. $y=-3(x+3)^2+5$).",
       "Both share vertex $(2,-1)$ and open up, but $a=4$ makes the first parabola narrower (a vertical stretch, steeper), while $a=\\frac{1}{4}$ makes the second wider (a vertical compression, flatter). At the same horizontal distance from the axis, the $a=4$ graph rises 16 times higher than the $a=\\frac{1}{4}$ graph."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.5",
     "title": "From Quadratics to Complex Numbers"
    }
   },
   "Tue": {
    "type": "worksheet",
    "hook": "Yesterday you could read the vertex straight out of an equation. Today you turn that number into an actual picture -- fast, without plotting a dozen points.",
    "objective": "Students will graph a quadratic function in vertex form by plotting the vertex, drawing the axis of symmetry, finding the y-intercept, and using symmetry to plot a mirror point.",
    "bellRinger": "For $y=2(x-1)^2-3$, identify $a$, the vertex, and whether the parabola opens up or down (review from yesterday).",
    "agenda": [
     "Bell ringer review (5 min)",
     "Mini-lesson: axis of symmetry + y-intercept (10 min)",
     "Video: Mathispower4u graphing walkthrough (5 min)",
     "We-do: graph one function together (8 min)",
     "Worksheet: graph practice (16 min)",
     "Exit ticket (4 min)"
    ],
    "assessment": "Worksheet graphs and exit ticket check whether students can locate vertex, axis of symmetry, and y-intercept, and use them to produce an accurate sketch.",
    "video": {
     "short": {
      "title": "Mathispower4u: Graphing a Quadratic Function Using the Vertex and Axis of Symmetry",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+graphing+quadratic+function+vertex+axis+of+symmetry",
      "note": "Quick demonstration of plotting the vertex, drawing the axis of symmetry, and mirroring points."
     },
     "long": {
      "title": "Khan Academy: Graphing Quadratics in Vertex Form",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+graphing+quadratics+in+vertex+form",
      "note": "Extended practice with multiple graphs and the y-intercept."
     },
     "questions": [
      "What is the equation of the axis of symmetry for a parabola with vertex $(h,k)$?",
      "How do you find the y-intercept of a quadratic function?",
      "Why can you use the axis of symmetry to plot a second point for free?",
      "If the y-intercept is 3 units to the right of the vertex, where is its mirror point?"
     ]
    },
    "videoPlacement": "after mini-lesson, before we-do example",
    "script": [
     {
      "min": 5,
      "title": "Bell Ringer",
      "do": "Students identify $a$, vertex, and direction of opening for $y=2(x-1)^2-3$.",
      "options": [
       "Quick whip-around: each student states one part of the answer"
      ],
      "say": "This is exactly what we practiced yesterday -- now let's turn it into a graph."
     },
     {
      "min": 10,
      "title": "Mini-Lesson",
      "do": "Introduce axis of symmetry as the vertical line $x=h$ through the vertex, and show how to find the y-intercept by substituting $x=0$.",
      "options": [
       "Draw the axis of symmetry as a dashed vertical line on a sample graph",
       "Show that any point on one side has a mirror point the same distance on the other side"
      ],
      "say": "The axis of symmetry is a vertical line straight through the vertex: $x=h$. Every point on the left has a twin on the right, the same distance from that line. To find the y-intercept, just plug in $x=0$ and solve for $y$."
     },
     {
      "min": 5,
      "title": "Video",
      "do": "Play the Mathispower4u short video on graphing with vertex and axis of symmetry.",
      "options": [
       "Pause to ask what the y-intercept was in the example"
      ],
      "say": "Watch how few points the presenter actually needs -- vertex, y-intercept, and its mirror point are usually enough."
     },
     {
      "min": 8,
      "title": "We-Do Example",
      "do": "Graph $y=(x-2)^2-1$ together: plot vertex $(2,-1)$, draw axis $x=2$, find y-intercept, mirror it, sketch the curve.",
      "options": [
       "Have students plot each point on their own mini-grid as you go"
      ],
      "say": "Vertex first: $(2,-1)$. Draw the dashed axis of symmetry at $x=2$. Now the y-intercept: plug in $x=0$, giving $y=(0-2)^2-1=3$, so $(0,3)$. Its mirror point is the same height on the other side of the axis: $(4,3)$. Connect the dots with a smooth curve."
     },
     {
      "min": 16,
      "title": "Worksheet",
      "do": "Students complete the graphing worksheet independently or in pairs.",
      "options": [
       "Pair struggling students with a partner for the first two problems",
       "Circulate and check axis of symmetry placement"
      ],
      "say": "Work through each graph the same way: vertex, axis, y-intercept, mirror point, sketch."
     },
     {
      "min": 4,
      "title": "Exit Ticket",
      "do": "Students complete the exit ticket.",
      "options": [
       "Collect at the door"
      ],
      "say": "Show me you can find all three key features for one new function."
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nTo graph a quadratic in vertex form, plot the **vertex**, draw the **axis of symmetry** through it, find the **y-intercept**, and reflect that point across the axis to get a matching point on the other side.\n\n## Key Terms\n- **Axis of symmetry**: the vertical line $x=h$ that passes through the vertex; the parabola is a mirror image across this line.\n- **y-intercept**: the point where the graph crosses the y-axis, found by substituting $x=0$.\n\n## Worked Example\nGraph $y=(x-2)^2-1$.\n- Step 1: Vertex is $(2,-1)$.\n- Step 2: Axis of symmetry is $x=2$.\n- Step 3: y-intercept: $y=(0-2)^2-1=4-1=3$, so $(0,3)$.\n- Step 4: Mirror point across $x=2$: $(4,3)$.\n- Answer: plot $(2,-1)$, $(0,3)$, $(4,3)$ and connect with a smooth U-shaped curve.\n\n## You Try\nGraph $y=(x+1)^2-4$ by finding the vertex, axis of symmetry, y-intercept, and its mirror point.",
    "guidedNotes": {
     "title": "Guided Notes: Graphing Quadratics",
     "vocab": [
      {
       "term": "Axis of Symmetry",
       "def": "The vertical line {{$x=h$|2cm}} passing through the vertex of a parabola."
      },
      {
       "term": "y-intercept",
       "def": "The point where a graph crosses the y-axis, found by substituting {{$x=0$|2cm}} into the equation."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "(x-3)^2-2",
        "domain": [
         -0.5,
         6.5
        ],
        "color": "blue"
       }
      ],
      "xmin": -2,
      "xmax": 8,
      "ymin": -4,
      "ymax": 9,
      "points": [
       [
        3,
        -2,
        "vertex $(3,-2)$",
        "red"
       ],
       [
        0,
        7,
        "$(0,7)$",
        "purple"
       ],
       [
        6,
        7,
        "$(6,7)$",
        "purple"
       ]
      ],
      "caption": "$y=(x-3)^2-2$ with vertex, y-intercept, and mirror point.",
      "width": "8cm",
      "height": "6cm"
     },
     "youTry": [
      {
       "prompt": "Find the vertex, axis of symmetry, and y-intercept for $y=(x+2)^2-5$.",
       "answer": "Vertex $(-2,-5)$; axis of symmetry $x=-2$; y-intercept: $y=(0+2)^2-5=-1$, point $(0,-1)$."
      }
     ],
     "summary": "To graph a quadratic in vertex form, first plot the vertex $(h,k)$, then draw the axis of symmetry {{$x=h$|2cm}}. Find the y-intercept by substituting {{$x=0$|2cm}}, then reflect that point across the axis of symmetry to get a matching point, and connect all the points with a smooth curve.",
     "formulas": [
      {
       "name": "Vertex",
       "formula": "$(h,k)$ from vertex form"
      },
      {
       "name": "Axis of symmetry",
       "formula": "$x=h$"
      },
      {
       "name": "y-intercept",
       "formula": "$f(0)$, then mirror it across the axis"
      }
     ],
     "examples": [
      {
       "label": "Graph with the three anchors",
       "prompt": "Graph $y=(x-3)^2-2$ using vertex, axis of symmetry, and y-intercept.",
       "steps": [
        "Vertex: $(h,k)=$ {{$(3,-2)$|2.5cm}}.",
        "Axis of symmetry: $x=$ {{$3$|1cm}}.",
        "y-intercept: substitute $x=0$: $y=(0-3)^2-2=9-2=$ {{$7$|1.5cm}}, giving point $(0,7)$.",
        "Mirror point across $x=3$: since $(0,7)$ is 3 units left of the axis, the mirror point is 3 units right: {{$(6,7)$|2.5cm}}.",
        "Plot $(3,-2)$, $(0,7)$, and $(6,7)$, then sketch the {{U-shaped|2.5cm}} curve."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": -6,
        "c": 7,
        "domain": [
         -1,
         7
        ],
        "marks": [
         {
          "x": 3,
          "y": -2,
          "label": "(3, −2)"
         },
         {
          "x": 0,
          "y": 7,
          "label": "(0, 7)"
         },
         {
          "x": 6,
          "y": 7,
          "label": "(6, 7)"
         }
        ]
       }
      }
     ]
    },
    "notesExit": "Find the vertex, axis of symmetry, and y-intercept for $y=(x-4)^2+1$, then describe the mirror point of the y-intercept.",
    "vocab": [
     {
      "term": "Axis of Symmetry",
      "definition": "The vertical line $x=h$ through the vertex of a parabola; the graph is symmetric across it."
     },
     {
      "term": "y-intercept",
      "definition": "The point where the graph crosses the y-axis, found by evaluating the function at $x=0$."
     },
     {
      "term": "Mirror Point",
      "definition": "A point that is the same distance from the axis of symmetry as a known point, but on the opposite side."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Graphing Quadratics: Vertex, Axis of Symmetry, y-intercept",
     "slides": [
      {
       "type": "define",
       "heading": "Three anchors graph any parabola",
       "bullets": [
        "**Vertex** $(h,k)$ — plot it first.",
        "**Axis of symmetry** — the vertical line $x=h$.",
        "**y-intercept** — plug in $x=0$, then mirror that point across the axis."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": -4,
        "c": 3,
        "domain": [
         -1,
         5
        ],
        "marks": [
         {
          "x": 2,
          "y": -1,
          "label": "vertex"
         },
         {
          "x": 0,
          "y": 3,
          "label": "y-int"
         },
         {
          "x": 4,
          "y": 3,
          "label": "mirror"
         }
        ]
       },
       "graphCaption": "vertex + y-intercept + its mirror = the whole graph"
      },
      {
       "type": "example",
       "heading": "We do:  y = (x − 3)² − 2",
       "example": "**1.** Vertex: $(3,-2)$. Axis: $x=3$.\n**2.** y-intercept: $y=(0-3)^{2}-2=9-2=7$ → point $(0,7)$.\n**3.** Mirror $(0,7)$ across $x=3$ → $(6,7)$. Connect the three points with a smooth U-curve.",
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": -6,
        "c": 7,
        "domain": [
         -1,
         7
        ],
        "marks": [
         {
          "x": 3,
          "y": -2,
          "label": "(3, −2)"
         },
         {
          "x": 0,
          "y": 7,
          "label": "(0, 7)"
         },
         {
          "x": 6,
          "y": 7,
          "label": "(6, 7)"
         }
        ]
       },
       "graphCaption": "y = (x−3)² − 2"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "$y=(x+3)^{2}-4$: find the vertex, the axis of symmetry, the y-intercept, and its mirror point — then sketch.",
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": 6,
        "c": 5,
        "domain": [
         -7,
         1
        ],
        "marks": [
         {
          "x": -3,
          "y": -4,
          "label": "(−3, −4)"
         }
        ]
       },
       "graphCaption": "check your sketch"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "Graph $y=(x+3)^2-4$ by identifying vertex, axis of symmetry, and y-intercept.",
      "steps": [
       "Vertex: $(-3,-4)$.",
       "Axis of symmetry: $x=-3$.",
       "y-intercept: $y=(0+3)^2-4=5$, point $(0,5)$.",
       "Mirror point: $(-6,5)$."
      ],
      "answer": "Plot $(-3,-4)$, $(0,5)$, $(-6,5)$ and sketch a smooth upward curve."
     }
    ],
    "worksheet": {
     "title": "Graphing Quadratic Functions",
     "instructions": "For each function, find the vertex, axis of symmetry, and y-intercept (and its mirror point), then sketch the graph on the grid provided.",
     "sections": [
      {
       "type": "Warm-Up: Vertex and Axis of Symmetry",
       "space": "s",
       "workedExample": "**Example:** For $y=(x-4)^2+2$, vertex is $(4,2)$ and axis of symmetry is $x=4$.",
       "directions": "State the vertex and axis of symmetry for each function.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=(x-1)^2+3$",
        "$y=(x+2)^2-5$",
        "$y=2(x-3)^2+1$",
        "$y=-(x+4)^2+6$"
       ]
      },
      {
       "type": "Find the y-intercept",
       "space": "m",
       "workedExample": "**Example:** For $y=(x-2)^2+3$, substitute $x=0$: $y=(0-2)^2+3=7$, so the y-intercept is $(0,7)$.",
       "directions": "Find the y-intercept for each function by substituting $x=0$.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=(x-3)^2-1$",
        "$y=(x+1)^2+4$",
        "$y=2(x-1)^2-2$",
        "$y=-(x+3)^2+5$"
       ]
      },
      {
       "type": "Full Graphs",
       "space": "l",
       "workedExample": "**Example:** For $y=(x-1)^2-3$: vertex $(1,-3)$, axis $x=1$, y-intercept $(0,-2)$, mirror point $(2,-2)$. Plot and connect smoothly.",
       "directions": "For each function, find the vertex, axis of symmetry, y-intercept, and its mirror point, then sketch the graph on the grid.",
       "figure": null,
       "diagram": {
        "plots": [
         {
          "expr": "(x-2)^2-4",
          "domain": [
           -0.5,
           4.5
          ],
          "color": "blue"
         }
        ],
        "xmin": -2,
        "xmax": 6,
        "ymin": -5,
        "ymax": 6,
        "points": [
         [
          2,
          -4,
          "vertex $(2,-4)$",
          "red"
         ],
         [
          0,
          0,
          "$(0,0)$",
          "purple"
         ],
         [
          4,
          0,
          "$(4,0)$",
          "purple"
         ]
        ],
        "caption": "Reference graph of $y=(x-2)^2-4$ showing the mirror-point technique.",
        "width": "8cm",
        "height": "6cm"
       },
       "problems": [
        "$y=(x-2)^2-4$ (use the reference graph above to check your own sketch)",
        "$y=(x+2)^2-3$",
        "$y=2(x-1)^2+1$"
       ]
      }
     ],
     "procedure": [
      "Identify the vertex $(h,k)$ from the equation.",
      "Draw the axis of symmetry as a dashed vertical line at $x=h$.",
      "Find the y-intercept by substituting $x=0$ and solving for $y$.",
      "Reflect the y-intercept across the axis of symmetry to get a mirror point.",
      "Plot the vertex, y-intercept, and mirror point.",
      "Connect the points with a smooth, U-shaped curve."
     ],
     "optionalExtra": [
      "Graph $y=-2(x-1)^2+3$ and label all key features (vertex, axis of symmetry, y-intercept, mirror point)."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "A parabola has y-intercept $(0,8)$ and axis of symmetry $x=3$. Without being told $a$ or $k$, find the mirror point of the y-intercept. Explain your reasoning using symmetry alone.",
     "why": "This isolates the symmetry concept from the full equation, forcing students to reason about reflection independent of algebraic substitution."
    },
    "exitTicket": [
     "Find the vertex, axis of symmetry, and y-intercept for $y=(x-4)^2+1$.",
     "State the mirror point of the y-intercept you found."
    ],
    "answerKey": [
     {
      "section": "Warm-Up: Vertex and Axis of Symmetry",
      "answers": [
       "Vertex $(1,3)$; axis of symmetry $x=1$.",
       "Vertex $(-2,-5)$; axis of symmetry $x=-2$.",
       "Vertex $(3,1)$; axis of symmetry $x=3$.",
       "Vertex $(-4,6)$; axis of symmetry $x=-4$."
      ]
     },
     {
      "section": "Find the y-intercept",
      "answers": [
       "$y=(0-3)^2-1=8$, so $(0,8)$.",
       "$y=(0+1)^2+4=5$, so $(0,5)$.",
       "$y=2(0-1)^2-2=0$, so $(0,0)$.",
       "$y=-(0+3)^2+5=-4$, so $(0,-4)$."
      ]
     },
     {
      "section": "Full Graphs",
      "answers": [
       "Vertex $(2,-4)$, axis $x=2$, y-intercept $(0,0)$, mirror point $(4,0)$ -- matches the reference graph.",
       "Vertex $(-2,-3)$, axis $x=-2$, y-intercept: $y=(0+2)^2-3=1$, point $(0,1)$, mirror point $(-4,1)$.",
       "Vertex $(1,1)$, axis $x=1$, y-intercept: $y=2(0-1)^2+1=3$, point $(0,3)$, mirror point $(2,3)$."
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "$y=-2(x-1)^2+3$: vertex $(1,3)$, axis of symmetry $x=1$, opens down (since $a=-2<0$). y-intercept: $y=-2(0-1)^2+3=-2+3=1$, point $(0,1)$; mirror point across $x=1$ is $(2,1)$. Plot $(1,3)$, $(0,1)$, $(2,1)$ and connect with a downward smooth curve."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.2",
     "title": "Graphing Polynomials"
    }
   },
   "Wed": {
    "type": "worksheet",
    "hook": "You already know how to graph one parabola from scratch. What if I told you that once you can graph $y=x^2$, you can graph ANY parabola just by sliding, flipping, or stretching it -- no new points needed?",
    "objective": "Students will describe and apply transformations of quadratic functions -- vertical/horizontal shifts, reflections, and vertical stretches/compressions -- starting from the parent function $y=x^2$.",
    "bellRinger": "Starting from $y=x^2$, predict what happens to the graph of $y=x^2+5$. Where does the vertex move?",
    "agenda": [
     "Bell ringer prediction (5 min)",
     "Mini-lesson: shifts, reflections, stretches from $y=x^2$ (12 min)",
     "Video: Mathispower4u transformations (6 min)",
     "We-do: transform $y=x^2$ step by step (8 min)",
     "Worksheet: transformation practice (13 min)",
     "Exit ticket (4 min)"
    ],
    "assessment": "Worksheet and exit ticket check whether students can connect each parameter change ($h$, $k$, sign of $a$, size of $a$) to the correct visual transformation from the parent graph.",
    "video": {
     "short": {
      "title": "Mathispower4u: Transformations of Quadratic Functions",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+transformations+of+quadratic+functions",
      "note": "Short overview connecting $h$, $k$, and $a$ to shifts, reflections, and stretches."
     },
     "long": {
      "title": "The Organic Chemistry Tutor: Transformations of Quadratic Functions",
      "url": "https://www.youtube.com/results?search_query=Organic+Chemistry+Tutor+transformations+of+quadratic+functions",
      "note": "Extended practice covering shifts, reflections, and vertical stretch/compression together."
     },
     "questions": [
      "What transformation happens to $y=x^2$ when you graph $y=x^2-4$?",
      "What transformation happens to $y=x^2$ when you graph $y=(x-4)^2$?",
      "What does a negative sign in front of the squared term do to the graph?",
      "How does making $|a|$ larger than 1 change the shape of the parabola?"
     ]
    },
    "videoPlacement": "after mini-lesson, before we-do example",
    "script": [
     {
      "min": 5,
      "title": "Bell Ringer",
      "do": "Students predict the shift for $y=x^2+5$ compared to $y=x^2$.",
      "options": [
       "Have a student sketch their prediction on the board"
      ],
      "say": "What moved, and which direction? Let's confirm as we go through today's lesson."
     },
     {
      "min": 12,
      "title": "Mini-Lesson",
      "do": "Starting from $y=x^2$, show each transformation one at a time: $k$ shifts vertically, $h$ shifts horizontally, negative $a$ reflects over the x-axis, $|a|>1$ stretches (narrower), $0<|a|<1$ compresses (wider).",
      "options": [
       "Use a transparency or overlay analogy: sliding the same shape around the plane",
       "Have students say 'up/down/left/right/flip/skinny/wide' as you show each case"
      ],
      "say": "Think of $y=x^2$ as the original shape. Adding $k$ slides it up or down. Changing $x$ to $(x-h)$ slides it left or right -- and remember the sign flips. A negative out front flips it upside down. And if $|a|$ is bigger than 1, the parabola gets skinnier; if it's a fraction between 0 and 1, it gets wider."
     },
     {
      "min": 6,
      "title": "Video",
      "do": "Play the Mathispower4u short video on transformations.",
      "options": [
       "Pause to predict the next transformation before it's shown"
      ],
      "say": "Watch for how each individual piece of the equation maps to one specific move on the graph."
     },
     {
      "min": 8,
      "title": "We-Do Example",
      "do": "Starting from $y=x^2$, build up to $y=-2(x+1)^2+3$ one transformation at a time.",
      "options": [
       "Ask students to narrate each step before you draw it"
      ],
      "say": "Start with $y=x^2$. Shift left 1: $y=(x+1)^2$. Stretch by 2 and flip: $y=-2(x+1)^2$. Shift up 3: $y=-2(x+1)^2+3$. Final vertex: $(-1,3)$, opens down, narrower than $y=x^2$."
     },
     {
      "min": 13,
      "title": "Worksheet",
      "do": "Students complete the transformation worksheet independently or in pairs.",
      "options": [
       "Provide sentence starters: 'The graph shifts ___ because ___'"
      ],
      "say": "Describe each transformation in words, then match it to the correct vertex and shape."
     },
     {
      "min": 4,
      "title": "Exit Ticket",
      "do": "Students complete the exit ticket.",
      "options": [
       "Collect at the door"
      ],
      "say": "Describe all the transformations applied to $y=x^2$ to get today's exit ticket function."
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nEvery quadratic function is a **transformation** of the parent function $y=x^2$: $k$ shifts the graph vertically, $h$ shifts it horizontally, a negative $a$ reflects it over the x-axis, and the size of $|a|$ stretches (narrows) or compresses (widens) it.\n\n## Key Terms\n- **Parent function**: the simplest form of a function family, here $y=x^2$.\n- **Reflection**: flipping the graph over an axis; a negative $a$ flips $y=x^2$ over the x-axis.\n- **Vertical stretch/compression**: $|a|>1$ makes the parabola narrower; $0<|a|<1$ makes it wider.\n\n## Worked Example\nDescribe the transformations that turn $y=x^2$ into $y=-2(x+1)^2+3$.\n- Step 1: $(x+1)$ shifts the graph left 1 unit ($h=-1$).\n- Step 2: The $-2$ reflects it over the x-axis and stretches it (narrower).\n- Step 3: The $+3$ shifts the graph up 3 units.\n- Answer: shift left 1, reflect over the x-axis, stretch narrower by a factor of 2, shift up 3; final vertex $(-1,3)$.\n\n## You Try\nDescribe the transformations that turn $y=x^2$ into $y=\\frac{1}{3}(x-4)^2-2$.",
    "guidedNotes": {
     "title": "Guided Notes: Transformations of Quadratic Functions",
     "vocab": [
      {
       "term": "Parent Function",
       "def": "The simplest function in a family; for quadratics this is {{$y=x^2$|2.5cm}}."
      },
      {
       "term": "Reflection",
       "def": "A flip of the graph over an axis; a {{negative|2cm}} value of $a$ reflects $y=x^2$ over the x-axis."
      },
      {
       "term": "Vertical Stretch/Compression",
       "def": "When $|a|>1$ the graph becomes {{narrower|2.5cm}}; when $0<|a|<1$ the graph becomes {{wider|2cm}}."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "x^2",
        "domain": [
         -3,
         3
        ],
        "color": "gray"
       },
       {
        "expr": "-2*(x+1)^2+3",
        "domain": [
         -2.2,
         0.2
        ],
        "color": "blue"
       }
      ],
      "xmin": -4,
      "xmax": 4,
      "ymin": -6,
      "ymax": 10,
      "points": [
       [
        -1,
        3,
        "vertex $(-1,3)$",
        "red"
       ],
       [
        0,
        0,
        "vertex of $y=x^2$",
        "gray"
       ]
      ],
      "caption": "$y=x^2$ (gray) transformed into $y=-2(x+1)^2+3$ (blue).",
      "width": "8cm",
      "height": "6cm"
     },
     "youTry": [
      {
       "prompt": "Describe the transformations from $y=x^2$ to $y=(x-2)^2-5$.",
       "answer": "Shift right 2, shift down 5; no reflection or stretch since $a=1$; vertex $(2,-5)$."
      }
     ],
     "summary": "Starting from the parent function {{$y=x^2$|2.5cm}}, the value $h$ shifts the graph left or right, $k$ shifts it up or down, a negative $a$ causes a {{reflection|2.5cm}} over the x-axis, and $|a|>1$ makes the graph {{narrower|2.5cm}} while $0<|a|<1$ makes it {{wider|2cm}}.",
     "formulas": [
      {
       "name": "Horizontal",
       "formula": "$(x-h)$ right $h$ · $(x+h)$ left $h$"
      },
      {
       "name": "Vertical",
       "formula": "$+k$ up · $-k$ down"
      },
      {
       "name": "Flip / stretch",
       "formula": "$a<0$ reflects; $|a|$ stretches or compresses"
      }
     ],
     "examples": [
      {
       "label": "Describe every transformation",
       "prompt": "Describe the transformations from $y=x^2$ to $y=-2(x+1)^2+3$.",
       "steps": [
        "The term $(x+1)$ shifts the graph {{left|1.5cm}} by {{$1$|1cm}} unit.",
        "The negative sign in front of the 2 causes a {{reflection|2.5cm}} over the x-axis.",
        "Since $|a|=2>1$, the graph becomes {{narrower|2.5cm}} than $y=x^2$.",
        "The $+3$ shifts the graph {{up|1.5cm}} by {{$3$|1cm}} units.",
        "Final vertex: {{$(-1,3)$|2.5cm}}."
       ],
       "graph": {
        "kind": "parabola",
        "a": -2,
        "b": -4,
        "c": 1,
        "domain": [
         -4,
         2
        ],
        "marks": [
         {
          "x": -1,
          "y": 3,
          "label": "(−1, 3)"
         }
        ]
       }
      }
     ]
    },
    "notesExit": "Describe all transformations applied to $y=x^2$ to produce $y=3(x-2)^2-4$, and state the final vertex.",
    "vocab": [
     {
      "term": "Parent Function",
      "definition": "The most basic function in a family of functions; $y=x^2$ for quadratics."
     },
     {
      "term": "Reflection",
      "definition": "Flipping a graph over an axis; caused by a negative leading coefficient."
     },
     {
      "term": "Vertical Stretch",
      "definition": "Making a graph narrower, caused by $|a|>1$."
     },
     {
      "term": "Vertical Compression",
      "definition": "Making a graph wider, caused by $0<|a|<1$."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Transformations of Quadratic Functions",
     "slides": [
      {
       "type": "define",
       "heading": "The transformation toolkit",
       "bullets": [
        "$h$ slides **left/right** · $k$ slides **up/down**.",
        "A negative $a$ **flips** the parabola over the x-axis.",
        "$|a|>1$ **stretches** (narrower); $0<|a|<1$ **compresses** (wider)."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": 0,
        "c": 0,
        "domain": [
         -4,
         4
        ],
        "expr2": "-2*(x+1)^2+3"
       },
       "graphCaption": "y = x² (indigo) vs y = −2(x+1)² + 3 (gold)"
      },
      {
       "type": "example",
       "heading": "We do:  y = x²  →  y = −2(x + 1)² + 3",
       "example": "**1.** $(x+1)$: shift **left 1**.\n**2.** $|{-2}|=2$: vertical **stretch ×2** (narrower).\n**3.** Negative $a$: **reflect** over the x-axis.\n**4.** $+3$: shift **up 3**. New vertex: $(-1,3)$.",
       "graph": {
        "kind": "parabola",
        "a": -2,
        "b": -4,
        "c": 1,
        "domain": [
         -4,
         2
        ],
        "marks": [
         {
          "x": -1,
          "y": 3,
          "label": "(−1, 3)"
         }
        ]
       },
       "graphCaption": "y = −2(x+1)² + 3"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "Describe every transformation from $y=x^{2}$:\n(a) $y=(x-4)^{2}-2$\n(b) $y=\\tfrac{1}{2}(x+2)^{2}$",
       "graph": {
        "kind": "parabola",
        "a": 0.5,
        "b": 2,
        "c": 2,
        "domain": [
         -7,
         3
        ],
        "marks": [
         {
          "x": -2,
          "y": 0,
          "label": "(−2, 0)"
         }
        ]
       },
       "graphCaption": "(b) — wider: compressed by ½"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "Describe the transformations from $y=x^2$ to $y=\\frac{1}{2}(x-3)^2+2$.",
      "steps": [
       "$(x-3)$ shifts right 3.",
       "$\\frac{1}{2}$ compresses (wider), no reflection since $a>0$.",
       "$+2$ shifts up 2.",
       "Vertex: $(3,2)$."
      ],
      "answer": "Shift right 3, compress wider by $\\frac{1}{2}$, shift up 2; vertex $(3,2)$."
     }
    ],
    "worksheet": {
     "title": "Transformations of Quadratic Functions",
     "instructions": "For each function, describe the transformations applied to the parent function $y=x^2$ (shift, reflection, stretch/compression) and state the final vertex.",
     "sections": [
      {
       "type": "Warm-Up: Shifts",
       "space": "s",
       "workedExample": "**Example:** $y=x^2-6$ shifts $y=x^2$ down 6 units; vertex $(0,-6)$.",
       "directions": "Describe the shift and state the vertex for each function.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=x^2+4$",
        "$y=(x-3)^2$",
        "$y=(x+5)^2$",
        "$y=x^2-2$"
       ]
      },
      {
       "type": "Reflections and Stretches",
       "space": "m",
       "workedExample": "**Example:** $y=-3x^2$ reflects $y=x^2$ over the x-axis and stretches it (narrower) by a factor of 3.",
       "directions": "Describe the reflection and/or stretch/compression for each function.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=-x^2$",
        "$y=4x^2$",
        "$y=\\frac{1}{4}x^2$",
        "$y=-\\frac{1}{2}x^2$"
       ]
      },
      {
       "type": "Combined Transformations",
       "space": "l",
       "workedExample": "**Example:** $y=-2(x-1)^2+4$: shift right 1, reflect over x-axis, stretch narrower by 2, shift up 4; vertex $(1,4)$.",
       "directions": "Describe all transformations (shift, reflection, stretch/compression) and state the final vertex.",
       "figure": null,
       "diagram": {
        "plots": [
         {
          "expr": "x^2",
          "domain": [
           -2.5,
           2.5
          ],
          "color": "gray"
         },
         {
          "expr": "0.5*(x+2)^2-3",
          "domain": [
           -4.5,
           0.5
          ],
          "color": "blue"
         }
        ],
        "xmin": -5,
        "xmax": 4,
        "ymin": -5,
        "ymax": 8,
        "points": [
         [
          -2,
          -3,
          "vertex $(-2,-3)$",
          "red"
         ]
        ],
        "caption": "$y=x^2$ (gray) transformed into $y=\\frac{1}{2}(x+2)^2-3$ (blue).",
        "width": "8cm",
        "height": "6cm"
       },
       "problems": [
        "$y=\\frac{1}{2}(x+2)^2-3$ (use the graph above to confirm your description)",
        "$y=3(x-4)^2-1$",
        "$y=-\\frac{1}{3}(x+2)^2+5$"
       ]
      }
     ],
     "procedure": [
      "Start from the parent function $y=x^2$.",
      "Identify $h$: shift left if the equation has $(x+h)$, right if $(x-h)$.",
      "Identify $k$: shift up if positive, down if negative.",
      "Check the sign of $a$: negative means reflect over the x-axis.",
      "Check the size of $|a|$: greater than 1 means narrower (stretch), between 0 and 1 means wider (compression).",
      "Combine all transformations to state the final vertex and shape."
     ],
     "optionalExtra": [
      "Describe the transformations, in order, that turn $y=x^2$ into $y=-4(x+3)^2-7$."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "Two functions, $y=5(x-2)^2+1$ and $y=\\frac{1}{5}(x-2)^2+1$, share the same vertex. Without graphing, explain in words how their steepness compares, and describe what the graphs would look like side by side.",
     "why": "This isolates the effect of $|a|$ from shifts, requiring students to reason about width/steepness independent of location -- a common misconception area."
    },
    "exitTicket": [
     "Describe all transformations applied to $y=x^2$ to produce $y=3(x-2)^2-4$.",
     "State the final vertex of $y=3(x-2)^2-4$."
    ],
    "answerKey": [
     {
      "section": "Warm-Up: Shifts",
      "answers": [
       "Shifts up 4; vertex $(0,4)$.",
       "Shifts right 3; vertex $(3,0)$.",
       "Shifts left 5; vertex $(-5,0)$.",
       "Shifts down 2; vertex $(0,-2)$."
      ]
     },
     {
      "section": "Reflections and Stretches",
      "answers": [
       "Reflects over the x-axis; no stretch (a=-1).",
       "Stretches narrower by a factor of 4; no reflection.",
       "Compresses wider by a factor of $\\frac{1}{4}$; no reflection.",
       "Reflects over the x-axis and compresses wider by a factor of $\\frac{1}{2}$."
      ]
     },
     {
      "section": "Combined Transformations",
      "answers": [
       "Shift left 2, compress wider by $\\frac{1}{2}$ (no reflection), shift down 3; vertex $(-2,-3)$ -- matches the graph shown.",
       "Shift right 4, stretch narrower by 3 (no reflection), shift down 1; vertex $(4,-1)$.",
       "Shift left 2, reflect over the x-axis and compress wider by $\\frac{1}{3}$, shift up 5; vertex $(-2,5)$."
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "In order from the parent $y=x^2$: (1) $(x+3)$ shifts the graph left 3 units; (2) the negative sign reflects it over the x-axis; (3) $|a|=4>1$ stretches it narrower by a factor of 4; (4) the $-7$ shifts it down 7 units. Final vertex: $(-3,-7)$, opening down."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.4",
     "title": "Characteristics of Polynomial Graphs"
    }
   },
   "Thu": {
    "type": "worksheet",
    "hook": "A vendor's profit, a rocket's height, the area of a fenced garden -- all of them are modeled by quadratics, and every one of those real problems has the same question at its heart: what's the best (or worst) it can possibly get?",
    "objective": "Students will find the maximum or minimum value of a quadratic function from its vertex and use it to solve real-world optimization problems.",
    "bellRinger": "For $y=-(x-3)^2+9$, does the function have a maximum or minimum value? What is that value, and at what $x$ does it occur?",
    "agenda": [
     "Bell ringer (5 min)",
     "Mini-lesson: max/min value = $k$, occurs at $x=h$ (8 min)",
     "Video: Khan Academy real-world max/min problems (6 min)",
     "We-do: solve a real-world optimization problem (10 min)",
     "Worksheet: applied max/min problems (15 min)",
     "Exit ticket (4 min)"
    ],
    "assessment": "Worksheet and exit ticket require students to translate a word problem into a quadratic model, find its vertex, and correctly interpret the max/min value in context (units and meaning).",
    "video": {
     "short": {
      "title": "Khan Academy: Maximum and Minimum Values of Quadratic Functions",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+maximum+minimum+value+quadratic+function",
      "note": "Short explanation of reading max/min value directly from the vertex."
     },
     "long": {
      "title": "The Organic Chemistry Tutor: Quadratic Word Problems (Max/Min Applications)",
      "url": "https://www.youtube.com/results?search_query=Organic+Chemistry+Tutor+quadratic+word+problems+maximum+minimum",
      "note": "Extended set of real-world optimization problems (projectile motion, area, revenue)."
     },
     "questions": [
      "How do you know whether a quadratic function has a maximum or a minimum value?",
      "What part of the vertex $(h,k)$ tells you the max/min value itself?",
      "In a real-world problem, why does the sign of $a$ matter before you even find the vertex?",
      "Why is it important to include units when stating a max/min answer in context?"
     ]
    },
    "videoPlacement": "after mini-lesson, before we-do example",
    "script": [
     {
      "min": 5,
      "title": "Bell Ringer",
      "do": "Students determine max/min and value for $y=-(x-3)^2+9$.",
      "options": [
       "Cold-call for the value and one for the location"
      ],
      "say": "Since $a<0$, this opens down, so it has a maximum. That maximum value is $k=9$, occurring at $x=3$."
     },
     {
      "min": 8,
      "title": "Mini-Lesson",
      "do": "Establish that the max/min VALUE is $k$ (the y-coordinate of the vertex), occurring at $x=h$; sign of $a$ tells you which one it is.",
      "options": [
       "Have students state 'max' or 'min' before revealing the sign of $a$ each time"
      ],
      "say": "The vertex isn't just a point on the graph -- $k$ IS the maximum or minimum value the function can produce. If $a>0$, that's the smallest value (minimum). If $a<0$, that's the largest value (maximum). And it happens exactly at $x=h$."
     },
     {
      "min": 6,
      "title": "Video",
      "do": "Play the Khan Academy short video on max/min values.",
      "options": [
       "Pause to predict whether the example is a max or min problem before it's revealed"
      ],
      "say": "Watch how the vertex answers the real-world question directly, once you know what $x$ and $y$ represent in that context."
     },
     {
      "min": 10,
      "title": "We-Do Example",
      "do": "Solve: 'A farmer has 40 ft of fencing for a rectangular pen against a barn wall (no fence needed on that side). Width $=x$, and area $A=x(40-2x)$. Find the maximum area.' Expand to vertex form or use $x=-b/2a$, then interpret.",
      "options": [
       "Ask students to predict whether area increases or decreases as width grows very large, before solving"
      ],
      "say": "Expand: $A=40x-2x^2=-2x^2+40x$. This opens down, so it has a maximum. The vertex occurs at $x=-\\frac{40}{2(-2)}=10$. Plug back in: $A=-2(10)^2+40(10)=200$. So the maximum area is 200 square feet, when the width is 10 feet."
     },
     {
      "min": 15,
      "title": "Worksheet",
      "do": "Students complete applied max/min problems independently or in pairs.",
      "options": [
       "Provide a sentence frame: 'The maximum/minimum ___ is ___, occurring when ___'"
      ],
      "say": "For each problem, set up the quadratic model first, find the vertex, then answer the real-world question in a full sentence with units."
     },
     {
      "min": 4,
      "title": "Exit Ticket",
      "do": "Students complete the exit ticket.",
      "options": [
       "Collect at the door"
      ],
      "say": "State whether it's a max or min, find the value, and interpret it in context."
     }
    ],
    "doubleOption": false,
    "notes": "## Key Idea\nThe **maximum or minimum value** of a quadratic function is the y-coordinate of the vertex, $k$, occurring at $x=h$. If $a>0$ the function has a minimum; if $a<0$ it has a maximum. This lets us solve real-world optimization problems -- greatest area, highest point, maximum profit -- directly from the vertex.\n\n## Key Terms\n- **Maximum value**: the largest output value of a function, occurring at the vertex when $a<0$.\n- **Minimum value**: the smallest output value of a function, occurring at the vertex when $a>0$.\n- **Optimization**: finding the best (largest or smallest) possible outcome of a real-world quadratic model.\n\n## Worked Example\nA rectangular garden against a house uses 40 ft of fencing on the other three sides. If $x$ is the width, the area is $A(x)=-2x^2+40x$. Find the maximum area.\n- Step 1: Since $a=-2<0$, the function has a maximum.\n- Step 2: Vertex x-coordinate: $x=-\\dfrac{b}{2a}=-\\dfrac{40}{2(-2)}=10$.\n- Step 3: Maximum value: $A(10)=-2(10)^2+40(10)=-200+400=200$.\n- Answer: The maximum area is 200 square feet, occurring when the width is 10 feet.\n\n## You Try\nA ball's height in feet is modeled by $h(t)=-16t^2+64t+5$, where $t$ is time in seconds. Find the maximum height and the time it occurs.",
    "guidedNotes": {
     "title": "Guided Notes: Maximum/Minimum Value and Applications",
     "vocab": [
      {
       "term": "Maximum Value",
       "def": "The greatest output of a function; occurs at the vertex when $a$ is {{negative|2.5cm}}."
      },
      {
       "term": "Minimum Value",
       "def": "The least output of a function; occurs at the vertex when $a$ is {{positive|2.5cm}}."
      },
      {
       "term": "Optimization",
       "def": "Using a quadratic model to find the best possible ({{largest|2cm}} or smallest) outcome of a real situation."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "-16*(x-2)^2+69",
        "domain": [
         1.4,
         2.6
        ],
        "color": "blue"
       }
      ],
      "xmin": 0,
      "xmax": 4.5,
      "ymin": 0,
      "ymax": 80,
      "points": [
       [
        2,
        69,
        "max $(2,69)$",
        "red"
       ]
      ],
      "caption": "Height model $h(t)=-16t^2+64t+5$ reaching a maximum of 69 ft at $t=2$ s.",
      "width": "8cm",
      "height": "6cm"
     },
     "youTry": [
      {
       "prompt": "A company's profit is modeled by $P(x)=-3x^2+24x-20$, where $x$ is the number of items (in hundreds) sold. Find the maximum profit and the number of items that produce it.",
       "answer": "$x=-\\frac{24}{2(-3)}=4$; $P(4)=-3(16)+96-20=28$. Maximum profit is $28$ (hundred dollars) when $400$ items are sold."
      }
     ],
     "summary": "The maximum or minimum value of a quadratic function is the y-coordinate of the vertex, {{$k$|1cm}}, which occurs at $x=$ {{$h$|1cm}}. If $a$ is negative the function has a {{maximum|2.5cm}}; if $a$ is positive it has a {{minimum|2.5cm}}. In real-world problems, always interpret the answer with correct units.",
     "formulas": [
      {
       "name": "Vertex x",
       "formula": "$x=-\\dfrac{b}{2a}$ (standard form)"
      },
      {
       "name": "Max or min",
       "formula": "$a<0$ → max · $a>0$ → min; the VALUE is $k$"
      }
     ],
     "examples": [
      {
       "label": "Max/min from a real-world model",
       "prompt": "A ball's height is modeled by $h(t)=-16t^2+64t+5$. Find the maximum height and when it occurs.",
       "steps": [
        "Since $a=-16$ is {{negative|2cm}}, the function has a {{maximum|2cm}}.",
        "Find the time: $t=-\\dfrac{b}{2a}=-\\dfrac{64}{2(-16)}=$ {{$2$|1cm}}.",
        "Substitute $t=2$: $h(2)=-16(2)^2+64(2)+5=-64+128+5=$ {{$69$|1.5cm}}.",
        "The maximum height is {{$69$|1.5cm}} feet, occurring at $t=$ {{$2$|1cm}} seconds."
       ],
       "graph": {
        "kind": "parabola",
        "a": -16,
        "b": 64,
        "c": 5,
        "domain": [
         0,
         4.2
        ],
        "marks": [
         {
          "x": 2,
          "y": 69,
          "label": "max (2, 69)"
         }
        ]
       }
      }
     ]
    },
    "notesExit": "A quadratic model for revenue is $R(x)=-2x^2+80x$, where $x$ is price increase in dollars. Find the maximum revenue and the price increase that produces it.",
    "vocab": [
     {
      "term": "Maximum Value",
      "definition": "The greatest possible output of a function; occurs at the vertex when the parabola opens down."
     },
     {
      "term": "Minimum Value",
      "definition": "The least possible output of a function; occurs at the vertex when the parabola opens up."
     },
     {
      "term": "Optimization Problem",
      "definition": "A real-world problem solved by finding the maximum or minimum value of a mathematical model."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Max/Min Value and Real-World Applications",
     "slides": [
      {
       "type": "define",
       "heading": "Max/min lives at the vertex",
       "bullets": [
        "$a<0$ → the vertex is the **maximum** value $k$.",
        "$a>0$ → the vertex is the **minimum** value $k$.",
        "From standard form, find the vertex with $x=-\\dfrac{b}{2a}$ first, then substitute."
       ],
       "graph": {
        "kind": "parabola",
        "a": -16,
        "b": 64,
        "c": 5,
        "domain": [
         0,
         4.2
        ],
        "marks": [
         {
          "x": 2,
          "y": 69,
          "label": "max (2, 69)"
         }
        ]
       },
       "graphCaption": "h(t) = −16t² + 64t + 5 — a thrown ball"
      },
      {
       "type": "example",
       "heading": "We do: the thrown ball",
       "example": "$h(t)=-16t^{2}+64t+5$ (height in ft, time in s).\n**1.** $t=-\\dfrac{b}{2a}=-\\dfrac{64}{2(-16)}=2$ seconds.\n**2.** $h(2)=-16(4)+128+5=69$ feet.\n**3.** Maximum height **69 ft**, reached at **2 s**.",
       "graph": {
        "kind": "parabola",
        "a": -16,
        "b": 64,
        "c": 5,
        "domain": [
         0,
         4.2
        ],
        "marks": [
         {
          "x": 2,
          "y": 69,
          "label": "(2, 69)"
         }
        ]
       },
       "graphCaption": "the vertex answers the word problem"
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "A company's profit is $P(x)=-3x^{2}+24x-2$ (x = price in dollars).\nWhat price gives the **maximum profit**, and what is that profit?",
       "graph": {
        "kind": "parabola",
        "a": -3,
        "b": 24,
        "c": -2,
        "domain": [
         0,
         8
        ],
        "marks": [
         {
          "x": 4,
          "y": 46,
          "label": "(4, 46)"
         }
        ]
       },
       "graphCaption": "check your answer at the peak"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "A ball is thrown so its height is modeled by $h(t)=-16t^2+48t+6$. Find the maximum height and when it occurs.",
      "steps": [
       "$a=-16<0$, so this is a maximum.",
       "$t=-\\frac{48}{2(-16)}=1.5$.",
       "$h(1.5)=-16(1.5)^2+48(1.5)+6=42$."
      ],
      "answer": "Maximum height is 42 feet, occurring at $t=1.5$ seconds."
     }
    ],
    "worksheet": {
     "title": "Maximum/Minimum Value and Real-World Applications",
     "instructions": "For each problem, determine whether the function has a maximum or minimum value, find that value using the vertex, and interpret your answer in context with correct units.",
     "sections": [
      {
       "type": "Warm-Up: Max or Min?",
       "space": "s",
       "workedExample": "**Example:** For $y=4(x-2)^2+7$, since $a=4>0$, the function has a minimum value of $7$.",
       "directions": "State whether each function has a maximum or minimum, and give that value.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=-2(x+1)^2+10$",
        "$y=5(x-3)^2-6$",
        "$y=-(x-4)^2+1$",
        "$y=\\frac{1}{2}(x+2)^2-8$"
       ]
      },
      {
       "type": "Find the Vertex from Standard Form",
       "space": "m",
       "workedExample": "**Example:** For $y=-3x^2+12x+2$, find $x=-\\dfrac{b}{2a}=-\\dfrac{12}{2(-3)}=2$, then $y=-3(2)^2+12(2)+2=14$. Maximum value is 14.",
       "directions": "Find the x-coordinate of the vertex, then the max/min value for each function.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=-x^2+6x-3$",
        "$y=2x^2-8x+5$",
        "$y=-4x^2+16x+1$"
       ]
      },
      {
       "type": "Real-World Applications",
       "space": "l",
       "workedExample": "**Example:** A vendor's profit is $P(x)=-x^2+30x-50$, where $x$ is the price in dollars. The vertex occurs at $x=-\\dfrac{30}{-2}=15$, giving $P(15)=175$. The maximum profit is $175 dollars at a price of $15.",
       "directions": "Set up the vertex for each model, find the max/min value, and interpret the result in a full sentence with units.",
       "figure": null,
       "diagram": {
        "plots": [
         {
          "expr": "-1*(x-15)^2+175",
          "domain": [
           7,
           23
          ],
          "color": "blue"
         }
        ],
        "xmin": 0,
        "xmax": 30,
        "ymin": 0,
        "ymax": 200,
        "points": [
         [
          15,
          175,
          "max profit $(15,175)$",
          "red"
         ]
        ],
        "caption": "Profit model $P(x)=-x^2+30x-50$ reaching a maximum of \\$175 at $x=15$.",
        "width": "8cm",
        "height": "6cm"
       },
       "problems": [
        "A rocket's height is $h(t)=-16t^2+96t+10$ (feet, $t$ in seconds). Find the maximum height and when it occurs.",
        "A rectangular pen against a barn uses 60 ft of fencing on 3 sides: $A(x)=-2x^2+60x$. Find the maximum area and the width that produces it."
       ]
      }
     ],
     "procedure": [
      "Determine whether the function opens up (minimum) or down (maximum) from the sign of $a$.",
      "Find the x-coordinate of the vertex using $x=h$ (vertex form) or $x=-\\dfrac{b}{2a}$ (standard form).",
      "Substitute that x-value back into the function to find the max/min value, $k$.",
      "Interpret the result in the context of the problem, including correct units.",
      "State your final answer as a full sentence: the maximum/minimum [quantity] is [value], occurring at [x-value]."
     ],
     "optionalExtra": [
      "A company's cost to produce $x$ items is $C(x)=2x^2-40x+300$. Find the minimum cost and the number of items that produce it."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "A farmer has 100 ft of fencing to build a rectangular pen with NO wall to lean on this time (fencing needed on all 4 sides). Set up the area function in terms of one side length, find the maximum area, and compare your process to the barn-wall version from class today.",
     "why": "Removing the free wall forces students to re-derive the model from scratch rather than pattern-match, deepening their understanding of how constraints shape the quadratic model."
    },
    "exitTicket": [
     "A quadratic model for revenue is $R(x)=-2x^2+80x$. Find the maximum revenue and the price increase that produces it.",
     "State whether this problem involves a maximum or a minimum, and explain how you know before solving."
    ],
    "answerKey": [
     {
      "section": "Warm-Up: Max or Min?",
      "answers": [
       "Maximum value of $10$ (since $a=-2<0$).",
       "Minimum value of $-6$ (since $a=5>0$).",
       "Maximum value of $1$ (since $a=-1<0$).",
       "Minimum value of $-8$ (since $a=\\frac{1}{2}>0$)."
      ]
     },
     {
      "section": "Find the Vertex from Standard Form",
      "answers": [
       "$x=-\\frac{6}{-2}=3$; $y=-9+18-3=6$. Maximum value is $6$.",
       "$x=-\\frac{-8}{4}=2$; $y=8-16+5=-3$. Minimum value is $-3$.",
       "$x=-\\frac{16}{-8}=2$; $y=-16+32+1=17$. Maximum value is $17$."
      ]
     },
     {
      "section": "Real-World Applications",
      "answers": [
       "$t=-\\frac{96}{-32}=3$; $h(3)=-144+288+10=154$. The maximum height is 154 feet, occurring at 3 seconds.",
       "$x=-\\frac{60}{-4}=15$; $A(15)=-450+900=450$. The maximum area is 450 square feet, occurring when the width is 15 feet."
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "$C(x)=2x^2-40x+300$ has $a=2>0$, so it opens up and has a minimum. Vertex x-coordinate: $x=-\\frac{-40}{2(2)}=\\frac{40}{4}=10$. Minimum cost: $C(10)=2(10)^2-40(10)+300=200-400+300=100$. The minimum cost is $100, achieved when 10 items are produced."
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.14",
     "title": "Polynomial Models"
    }
   },
   "Fri": {
    "type": "worksheet",
    "hook": "This week you learned to read a parabola's DNA from its equation, draw it, transform it, and use it to solve real problems. Today's about proving you can do all four -- fast and without notes.",
    "objective": "Students will demonstrate mastery of vertex form, graphing, transformations, and max/min applications from this week through mixed practice and a short quiz-style check.",
    "bellRinger": "Without using your notes, state the vertex and direction of opening for $y=-3(x-2)^2+5$.",
    "agenda": [
     "Bell ringer (5 min)",
     "Quick review: 4 stations, one per day's skill (16 min)",
     "Video: Khan Academy quadratics mixed review (5 min)",
     "Mixed practice worksheet (14 min)",
     "Quiz-style check (8 min)"
    ],
    "assessment": "Quiz-style check (4 short problems, one per skill from the week) is graded for mastery; worksheet performance informs who needs reteaching next week.",
    "video": {
     "short": {
      "title": "Khan Academy: Quadratic Functions Mixed Review",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+quadratic+functions+mixed+review",
      "note": "Fast-paced review touching vertex form, graphing, and max/min in one video."
     },
     "long": {
      "title": "Mathispower4u: Quadratic Functions Review Playlist",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+quadratic+functions+review",
      "note": "Longer review set for students who need a deeper refresher before the quiz-style check."
     },
     "questions": [
      "Which skill from this week do you feel least confident about?",
      "What's one strategy that helped you remember the sign flip for $h$?",
      "How do you decide whether a real-world problem is asking for a max or a min?",
      "What's the first thing you should identify when given any quadratic equation?"
     ]
    },
    "videoPlacement": "after station review, before mixed practice",
    "script": [
     {
      "min": 5,
      "title": "Bell Ringer",
      "do": "Students state vertex and direction of opening for $y=-3(x-2)^2+5$ with no notes.",
      "options": [
       "Quick thumbs up/down self-check against the revealed answer"
      ],
      "say": "No notes today -- let's see where we stand before we review."
     },
     {
      "min": 16,
      "title": "Station Review",
      "do": "Run 4 quick stations (4 min each), one per day this week: (1) vertex form ID, (2) graphing, (3) transformations, (4) max/min word problem.",
      "options": [
       "Have students rotate in pre-assigned small groups",
       "Post one representative problem per station on index cards"
      ],
      "say": "Each station is a 4-minute reminder of one skill from this week. Move when I call time -- the goal is to jog your memory, not solve everything perfectly."
     },
     {
      "min": 5,
      "title": "Video",
      "do": "Play the Khan Academy mixed review video.",
      "options": [
       "Let students choose to instead watch the longer Mathispower4u playlist independently if they need more depth"
      ],
      "say": "This ties all four skills together in one quick pass. Watch for anything that still feels shaky."
     },
     {
      "min": 14,
      "title": "Mixed Practice",
      "do": "Students complete the mixed practice worksheet covering all four skills.",
      "options": [
       "Allow partner work for the first half, independent for the second half"
      ],
      "say": "Work through all four problem types. Flag any question you want to ask about before the quiz-style check."
     },
     {
      "min": 8,
      "title": "Quiz-Style Check",
      "do": "Students complete a short, independent quiz-style check (4 problems, one per skill) with no talking.",
      "options": [
       "Offer a retake next class for students who show a gap in one specific skill"
      ],
      "say": "This is just you and the problem -- no partners, no notes. Show your work for full credit."
     }
    ],
    "doubleOption": true,
    "notes": "## Key Idea\nThis week's quadratic skills build on each other: **identify** the vertex and direction from an equation, **graph** it using vertex/axis/y-intercept, **transform** it from the parent function $y=x^2$, and **apply** the vertex to find a maximum or minimum in a real-world problem.\n\n## Key Terms\n- **Vertex form**: $y=a(x-h)^2+k$.\n- **Axis of symmetry**: $x=h$.\n- **Transformation**: shift, reflection, stretch/compression from $y=x^2$.\n- **Max/min value**: the y-coordinate of the vertex, $k$.\n\n## Worked Example\nFor $y=-2(x+3)^2+6$: identify all four skills at once.\n- Step 1 (vertex form): $a=-2$, vertex $(-3,6)$, opens down.\n- Step 2 (graph): axis of symmetry $x=-3$; y-intercept $y=-2(3)^2+6=-12$, point $(0,-12)$, mirror point $(-6,-12)$.\n- Step 3 (transform): shift left 3, reflect over x-axis, stretch narrower by 2, shift up 6.\n- Step 4 (max/min): maximum value is $6$, occurring at $x=-3$.\n- Answer: all four descriptions agree -- vertex $(-3,6)$ is the anchor for every skill.\n\n## You Try\nFor $y=(x-1)^2-4$, identify the vertex/direction, the y-intercept and its mirror point, the transformations from $y=x^2$, and the max/min value.",
    "guidedNotes": {
     "title": "Guided Notes: Week 1 Mixed Review -- Quadratic Functions",
     "vocab": [
      {
       "term": "Vertex Form",
       "def": "{{$y=a(x-h)^2+k$|3.5cm}}, showing the vertex $(h,k)$ directly."
      },
      {
       "term": "Axis of Symmetry",
       "def": "The vertical line {{$x=h$|2cm}} through the vertex."
      },
      {
       "term": "Max/Min Value",
       "def": "The y-coordinate of the vertex, {{$k$|1cm}}, occurring at $x=h$."
      }
     ],
     "diagram": {
      "plots": [
       {
        "expr": "-2*(x+3)^2+6",
        "domain": [
         -4.2,
         -1.8
        ],
        "color": "blue"
       }
      ],
      "xmin": -6,
      "xmax": 1,
      "ymin": -14,
      "ymax": 8,
      "points": [
       [
        -3,
        6,
        "vertex $(-3,6)$",
        "red"
       ],
       [
        0,
        -12,
        "$(0,-12)$",
        "purple"
       ]
      ],
      "caption": "$y=-2(x+3)^2+6$ showing vertex and y-intercept together.",
      "width": "8cm",
      "height": "6cm"
     },
     "youTry": [
      {
       "prompt": "For $y=(x-1)^2-4$, find the vertex, y-intercept, and max/min value.",
       "answer": "Vertex $(1,-4)$, opens up; y-intercept: $y=(0-1)^2-4=-3$, point $(0,-3)$, mirror point $(2,-3)$; minimum value $-4$ at $x=1$."
      }
     ],
     "summary": "This week's four skills all connect back to one idea: the vertex $(h,k)$ of {{$y=a(x-h)^2+k$|3.5cm}}. From it you can graph the parabola, describe its transformations from $y=x^2$, and identify its {{maximum or minimum|3.5cm}} value.",
     "formulas": [
      {
       "name": "Vertex form",
       "formula": "$y=a(x-h)^{2}+k$"
      },
      {
       "name": "Anchors",
       "formula": "vertex · axis $x=h$ · $f(0)$ + mirror"
      },
      {
       "name": "Standard form vertex",
       "formula": "$x=-\\dfrac{b}{2a}$"
      }
     ],
     "examples": [
      {
       "label": "Everything on one function",
       "prompt": "For $y=-2(x+3)^2+6$, find the vertex, y-intercept, transformations, and max/min value.",
       "steps": [
        "Vertex: $a=-2$, $h=-3$, $k=6$, so vertex $=$ {{$(-3,6)$|2.5cm}}.",
        "y-intercept: $y=-2(0+3)^2+6=-2(9)+6=$ {{$-12$|2cm}}, point $(0,-12)$.",
        "Transformations from $y=x^2$: shift left 3, reflect over x-axis, {{stretch|2cm}} narrower by 2, shift up 6.",
        "Since $a=-2<0$, this is a {{maximum|2.5cm}} value of {{$6$|1cm}}, occurring at $x=-3$."
       ],
       "graph": {
        "kind": "parabola",
        "a": -2,
        "b": 4,
        "c": 6,
        "domain": [
         -2,
         4
        ],
        "marks": [
         {
          "x": 1,
          "y": 8,
          "label": "max (1, 8)"
         },
         {
          "x": 0,
          "y": 6,
          "label": "(0, 6)"
         }
        ]
       }
      }
     ]
    },
    "notesExit": "For $y=2(x+1)^2-3$, state the vertex, direction of opening, and the max/min value with its location.",
    "vocab": [
     {
      "term": "Vertex Form",
      "definition": "$y=a(x-h)^2+k$, showing the vertex $(h,k)$ directly in the equation."
     },
     {
      "term": "Axis of Symmetry",
      "definition": "The vertical line $x=h$ through the vertex of a parabola."
     },
     {
      "term": "Transformation",
      "definition": "A shift, reflection, or stretch/compression applied to the parent function $y=x^2$."
     },
     {
      "term": "Max/Min Value",
      "definition": "The y-coordinate of the vertex, representing the greatest or least output of the function."
     }
    ],
    "presentation": {
     "kind": "build",
     "title": "Week 1 Mixed Review: Quadratic Functions",
     "slides": [
      {
       "type": "recap",
       "heading": "Everything this week, one problem",
       "bullets": [
        "Read $a$, $h$, $k$ from **vertex form** → vertex + direction.",
        "Graph with the **three anchors**: vertex, axis, y-intercept + mirror.",
        "Describe the **transformations** from $y=x^{2}$.",
        "Answer the **max/min** question with the vertex."
       ]
      },
      {
       "type": "example",
       "heading": "We do:  y = −2(x − 1)² + 8",
       "example": "**1.** $a=-2$: opens down, stretch ×2. Vertex $(1,8)$ → **maximum 8**.\n**2.** Axis: $x=1$. y-intercept: $y=-2(1)+8=6$ → $(0,6)$, mirror $(2,6)$.\n**3.** From $y=x^{2}$: right 1, stretch ×2, flip, up 8.",
       "graph": {
        "kind": "parabola",
        "a": -2,
        "b": 4,
        "c": 6,
        "domain": [
         -2,
         4
        ],
        "marks": [
         {
          "x": 1,
          "y": 8,
          "label": "max (1, 8)"
         },
         {
          "x": 0,
          "y": 6,
          "label": "(0, 6)"
         }
        ]
       },
       "graphCaption": "y = −2(x−1)² + 8"
      },
      {
       "type": "youtry",
       "heading": "Your turn — quiz warm-up",
       "youTry": "$y=\\tfrac{1}{2}(x+2)^{2}-3$: vertex and direction, axis, y-intercept + mirror, all transformations, and the min value.",
       "graph": {
        "kind": "parabola",
        "a": 0.5,
        "b": 2,
        "c": -1,
        "domain": [
         -8,
         4
        ],
        "marks": [
         {
          "x": -2,
          "y": -3,
          "label": "min (−2, −3)"
         },
         {
          "x": 0,
          "y": -1,
          "label": "(0, −1)"
         }
        ]
       },
       "graphCaption": "everything checks out here"
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "For $y=3(x-2)^2-1$, identify vertex, transformations from $y=x^2$, and max/min value.",
      "steps": [
       "Vertex: $(2,-1)$, opens up.",
       "Transformations: shift right 2, stretch narrower by 3, shift down 1.",
       "Since $a=3>0$, minimum value is $-1$ at $x=2$."
      ],
      "answer": "Vertex $(2,-1)$; shift right 2, stretch by 3, shift down 1; minimum value $-1$."
     }
    ],
    "worksheet": {
     "title": "Mixed Practice + Quiz-Style Check: Quadratic Functions",
     "instructions": "Complete the mixed practice problems below, drawing on all four skills from this week. Then complete the quiz-style check independently.",
     "sections": [
      {
       "type": "Mixed Practice: Vertex Form and Graphing",
       "space": "m",
       "workedExample": "**Example:** For $y=2(x-1)^2-3$: vertex $(1,-3)$, opens up; y-intercept $y=2(0-1)^2-3=-1$, point $(0,-1)$, mirror point $(2,-1)$.",
       "directions": "For each function, find the vertex, direction of opening, y-intercept, and its mirror point.",
       "figure": null,
       "diagram": null,
       "problems": [
        "$y=(x+2)^2-1$",
        "$y=-3(x-1)^2+4$",
        "$y=\\frac{1}{2}(x-4)^2+2$",
        "$y=-(x+3)^2+2$"
       ]
      },
      {
       "type": "Mixed Practice: Transformations and Max/Min",
       "space": "l",
       "workedExample": "**Example:** For $y=-(x+4)^2+7$: transformations are shift left 4, reflect over x-axis, shift up 7; since $a=-1<0$, maximum value is $7$ at $x=-4$.",
       "directions": "Describe the transformations from $y=x^2$ and state the max/min value for each function.",
       "figure": null,
       "diagram": {
        "plots": [
         {
          "expr": "1.5*(x-2)^2-2",
          "domain": [
           0.7,
           3.3
          ],
          "color": "blue"
         }
        ],
        "xmin": -1,
        "xmax": 5,
        "ymin": -4,
        "ymax": 8,
        "points": [
         [
          2,
          -2,
          "vertex $(2,-2)$",
          "red"
         ]
        ],
        "caption": "Reference graph of $y=1.5(x-2)^2-2$.",
        "width": "8cm",
        "height": "6cm"
       },
       "problems": [
        "$y=1.5(x-2)^2-2$ (use the graph above to confirm the vertex)",
        "$y=-2(x+1)^2+5$",
        "$y=3(x-2)^2-1$",
        "A ball's height is $h(t)=-16t^2+32t+4$. Find the maximum height and when it occurs."
       ]
      },
      {
       "type": "Quiz-style check — one problem per skill this week (graded)",
       "directions": "Independent, no notes. One problem per skill from the week.",
       "problems": [
        "$y=-3(x+1)^{2}+7$: identify $a$, the vertex, and the direction of opening.",
        "$y=(x-2)^{2}-4$: give the vertex, axis of symmetry, y-intercept, and its mirror point.",
        "Describe every transformation from $y=x^{2}$ to $y=\\tfrac{1}{2}(x-3)^{2}+1$.",
        "$h(t)=-16t^{2}+32t+6$ models a ball's height (ft) after $t$ seconds. Find the maximum height and when it occurs."
       ]
      }
     ],
     "procedure": [
      "Identify $a$, $h$, and $k$ from the equation.",
      "State the vertex, direction of opening, and axis of symmetry.",
      "Find the y-intercept by substituting $x=0$, and its mirror point across the axis of symmetry.",
      "Describe the transformations from $y=x^2$: shifts, reflection, stretch/compression.",
      "State the max/min value ($k$) and where it occurs ($x=h$), interpreting units for word problems."
     ],
     "optionalExtra": [
      "Create your own vertex-form equation with a maximum value of $10$ at $x=-2$, and describe all its transformations from $y=x^2$."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "A quadratic function has axis of symmetry $x=4$, opens down, and passes through $(1,0)$. Using only symmetry (no expanding equations), find another point the graph must pass through, and explain how you know the function has a maximum rather than a minimum.",
     "why": "This end-of-week challenge requires synthesizing symmetry reasoning and direction-of-opening reasoning together without a full equation, testing conceptual transfer rather than rote substitution."
    },
    "exitTicket": [
     "For $y=2(x+1)^2-3$, state the vertex and direction of opening.",
     "State the max/min value of $y=2(x+1)^2-3$ and where it occurs."
    ],
    "answerKey": [
     {
      "section": "Mixed Practice: Vertex Form and Graphing",
      "answers": [
       "Vertex $(-2,-1)$, opens up; y-intercept $y=(0+2)^2-1=3$, point $(0,3)$, mirror point $(-4,3)$.",
       "Vertex $(1,4)$, opens down; y-intercept $y=-3(0-1)^2+4=1$, point $(0,1)$, mirror point $(2,1)$.",
       "Vertex $(4,2)$, opens up; y-intercept $y=\\frac{1}{2}(0-4)^2+2=10$, point $(0,10)$, mirror point $(8,10)$.",
       "Vertex $(-3,2)$, opens down; y-intercept $y=-(0+3)^2+2=-7$, point $(0,-7)$, mirror point $(-6,-7)$."
      ]
     },
     {
      "section": "Mixed Practice: Transformations and Max/Min",
      "answers": [
       "Shift right 2, stretch narrower by 1.5, shift down 2; vertex $(2,-2)$, minimum value $-2$ -- matches the graph shown.",
       "Shift left 1, reflect over x-axis, stretch narrower by 2, shift up 5; maximum value $5$ at $x=-1$.",
       "Shift right 2, stretch narrower by 3, shift down 1; vertex $(2,-1)$, minimum value $-1$.",
       "$t=-\\frac{32}{-32}=1$; $h(1)=-16+32+4=20$. Maximum height is 20 feet, occurring at 1 second."
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "A maximum value of $10$ at $x=-2$ means the vertex is $(-2,10)$ with $a<0$, so $h=-2$, $k=10$. One valid answer: $y=-(x+2)^2+10$. Transformations from $y=x^2$: shift left 2, reflect over the x-axis, shift up 10 (any $a<0$ works, e.g. $y=-3(x+2)^2+10$ would also add a narrowing stretch by 3)."
      ]
     },
     {
      "section": "Quiz-style check — one problem per skill this week",
      "answers": [
       "$a=-3$; vertex $(-1,7)$; opens down (so the vertex is a maximum)",
       "Vertex $(2,-4)$; axis $x=2$; y-intercept $(0,0)$ since $y=(0-2)^{2}-4=0$; mirror point $(4,0)$",
       "Shift right 3, vertical compression by $\\tfrac{1}{2}$ (wider), shift up 1; vertex moves to $(3,1)$",
       "$t=-\\dfrac{b}{2a}=-\\dfrac{32}{-32}=1$ s; $h(1)=-16+32+6=22$ ft — maximum height 22 ft at 1 second"
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.7",
     "title": "The Fundamental Theorem of Algebra for Quadratics"
    }
   }
  }
 },
 "precal3": {
  "teks": [
   "P.2"
  ],
  "sped": "",
  "ell": "",
  "days": {
   "Mon": {
    "type": "intro",
    "hook": "Every graph you met last week is about to MOVE — same shape, new address.",
    "objective": "Students will describe and apply vertical and horizontal shifts of the parent functions, and state the domain and range of the shifted graph.",
    "bellRinger": "Sketch $y=x^{2}$ and $y=|x|$ from memory. Label each vertex/corner. (60 seconds — no calculator.)",
    "agenda": "Bell ringer (5) · Go over (5) · Launch: shifts (12) · Video (6) · Guided notes (8) · Worksheet start (9) · Exit ticket (3)",
    "assessment": "Exit ticket: describe every shift of a translated reciprocal function and give its domain and range.",
    "video": {
     "short": {
      "title": "Shifting functions — Khan Academy",
      "url": "https://www.youtube.com/results?search_query=Khan+Academy+shifting+functions+graphs",
      "note": "~5 min"
     },
     "long": {
      "title": "Graphing translations of parent functions — Mathispower4u",
      "url": "https://www.youtube.com/results?search_query=Mathispower4u+translations+parent+functions",
      "note": "~11 min, optional"
     },
     "questions": [
      "Which part of the equation moved the graph sideways — inside or outside the function?",
      "Why does $f(x-3)$ move RIGHT even though it says minus?",
      "What happens to the domain and range when a graph slides?"
     ]
    },
    "videoPlacement": "After the launch deck, before guided notes — it re-explains the inside/outside rule in a second voice.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Post the two parent sketches task; circulate and spot who still confuses x² and |x|.",
      "options": [
       "Have two students sketch on the board while others work"
      ],
      "say": "Where does the vertex of each one live?"
     },
     {
      "min": 5,
      "title": "Go over bellwork",
      "do": "Fix the two sketches on the board; mark (0,0) on both.",
      "options": [
       "Cold-call for domain and range of each parent"
      ],
      "say": "Both live at the origin — keep that picture; today we make them MOVE."
     },
     {
      "min": 12,
      "title": "Launch deck — shifts",
      "do": "Run the launch presentation: hook, the two shift rules, vocab, worked example, the inside-sign trap, you-try.",
      "options": [
       "Have students chorally answer the you-try before revealing"
      ],
      "say": "Inside the function lies to you — outside tells the truth."
     },
     {
      "min": 6,
      "title": "Video",
      "do": "Play the short video; students answer the 3 video questions on their bell-ringer sheet.",
      "options": [
       "Skip if the deck ran long; assign the long video as reinforcement"
      ],
      "say": "Watch for WHY the minus sign moves it right."
     },
     {
      "min": 8,
      "title": "Guided notes",
      "do": "Fill the notes together: formula bank, both examples, students try the You-Trys solo.",
      "options": [
       "Pair the You-Trys: partner A describes, partner B writes the equation"
      ],
      "say": "Say the move out loud before you write it."
     },
     {
      "min": 9,
      "title": "Worksheet",
      "do": "Start the worksheet; Types 1-2 solo, Type 3 with a partner if needed.",
      "options": [
       "Early finishers take the Challenge point-tracking problem"
      ],
      "say": "Restrictions and ranges move WITH the graph."
     },
     {
      "min": 3,
      "title": "Exit ticket",
      "do": "Collect the reciprocal-shift exit ticket at the door.",
      "options": [],
      "say": "Name the moves, then the domain and range."
     }
    ],
    "doubleOption": false,
    "notes": "## Shifting Parent Functions\nA **translation** slides a graph without changing its shape.\n- **Outside** the function: $f(x)+k$ moves UP $k$; $f(x)-k$ moves DOWN $k$ (as written).\n- **Inside** the function: $f(x-h)$ moves RIGHT $h$; $f(x+h)$ moves LEFT $h$ (opposite!).\n\n**Worked:** $y=\\sqrt{x-2}+3$ → right 2, up 3; the start point $(0,0)$ lands at $(2,3)$; domain $x\\ge 2$, range $y\\ge 3$.\n\n**You try:** describe $y=x^{3}+5$, then write the equation for $|x|$ shifted right 3.",
    "guidedNotes": {
     "title": "Shifting the Parent Functions",
     "formulas": [
      {
       "name": "Outside (up/down)",
       "formula": "$f(x)+k$ up $k$ · $f(x)-k$ down $k$ — as written"
      },
      {
       "name": "Inside (left/right)",
       "formula": "$f(x-h)$ RIGHT $h$ · $f(x+h)$ LEFT $h$ — opposite"
      },
      {
       "name": "Domain & range",
       "formula": "slide WITH the graph"
      }
     ],
     "vocab": [
      {
       "term": "Transformation",
       "def": "any change made to a {{parent function|3.2cm}}'s graph"
      },
      {
       "term": "Translation",
       "def": "a {{slide|2cm}} — the shape and size stay exactly the same"
      }
     ],
     "examples": [
      {
       "label": "Type 1 — describe the shift",
       "prompt": "Describe every shift of $y=\\sqrt{x-2}+3$ and name the new start point.",
       "steps": [
        "Inside: $x-2$ moves the graph {{right 2|2.4cm}} (inside is opposite).",
        "Outside: $+3$ moves it {{up 3|2cm}} (outside is as written).",
        "The start point $(0,0)$ lands at {{$(2,3)$|2.2cm}}."
       ],
       "graph": {
        "kind": "sqrt",
        "a": 1,
        "h": 2,
        "k": 3,
        "domain": [
         -1,
         11
        ],
        "marks": [
         {
          "x": 2,
          "y": 3,
          "label": "start (2, 3)"
         }
        ]
       },
       "answer": "Right 2, up 3; start point $(2,3)$."
      },
      {
       "label": "Type 2 — write the equation",
       "prompt": "Write the equation: $y=|x|$ shifted left 4 and down 1.",
       "steps": [
        "Left 4 goes INSIDE with the opposite sign: $|x$ {{$+4$|1.6cm}}$|$.",
        "Down 1 goes OUTSIDE as written: {{$-1$|1.6cm}}.",
        "Equation: {{$y=|x+4|-1$|3.2cm}}"
       ],
       "answer": "$y=|x+4|-1$"
      },
      {
       "label": "Type 3 — domain & range after the shift",
       "prompt": "State the domain and range of $y=\\sqrt{x-2}+3$.",
       "steps": [
        "The graph starts at $(2,3)$ and runs right and up, so the domain is $x\\ge$ {{$2$|1.4cm}}.",
        "The lowest output is the start height: range $y\\ge$ {{$3$|1.4cm}}."
       ],
       "answer": "Domain $x\\ge 2$; range $y\\ge 3$."
      }
     ],
     "youTry": [
      {
       "prompt": "Describe every shift of $y=x^{3}+5$.",
       "answer": "Up 5 only; the center point moves to $(0,5)$."
      },
      {
       "prompt": "Write the equation: $y=\\sqrt{x}$ shifted right 6 and down 2, then give its domain and range.",
       "answer": "$y=\\sqrt{x-6}-2$; domain $x\\ge 6$, range $y\\ge -2$."
      }
     ],
     "summary": "Inside the function moves {{opposite|2.6cm}}; outside moves {{as written|2.8cm}}. The domain and range {{slide with the graph|3.6cm}}."
    },
    "notesExit": "Describe every shift of $y=\\dfrac{1}{x+5}-2$ and give its domain and range.",
    "vocab": [
     {
      "term": "Transformation",
      "definition": "any change to a parent function's graph"
     },
     {
      "term": "Translation",
      "definition": "a slide — same shape, new location"
     }
    ],
    "presentation": {
     "kind": "launch",
     "title": "Shifting the Parent Functions",
     "slides": [
      {
       "type": "hook",
       "heading": "Same U, new address",
       "bullets": [
        "Both of these are $y=x^{2}$ — **identical shape**.",
        "One of them just... moved. Where did it go, and what in the equation moved it?",
        "By the end of class you'll slide ANY parent anywhere on the grid."
       ],
       "graph": {
        "kind": "parabola",
        "a": 1,
        "b": 0,
        "c": 0,
        "domain": [
         -4,
         6
        ],
        "expr2": "(x-3)^2+2",
        "yrange": [
         -1,
         12
        ]
       },
       "graphCaption": "y = x² (indigo) and its twin (gold) — same shape, new address"
      },
      {
       "type": "define",
       "heading": "The two shift rules",
       "bullets": [
        "**Outside** the function → vertical, **as written**: $f(x)+k$ up, $f(x)-k$ down.",
        "**Inside** the function → horizontal, **opposite**: $f(x-h)$ RIGHT, $f(x+h)$ LEFT.",
        "The shape never changes — only the address."
       ],
       "graph": {
        "kind": "curve",
        "expr": "sqrt(x)",
        "expr2": "sqrt(x+5)+2",
        "domain": [
         -6,
         9
        ],
        "marks": [
         {
          "x": 0,
          "y": 0,
          "label": "(0, 0)"
         },
         {
          "x": -5,
          "y": 2,
          "label": "(−5, 2)"
         }
        ]
       },
       "graphCaption": "y = √x slid left 5, up 2 — the start point carries the whole graph"
      },
      {
       "type": "vocab",
       "heading": "Today's words",
       "vocab": [
        {
         "term": "Transformation",
         "definition": "any change to a parent's graph"
        },
        {
         "term": "Translation",
         "definition": "a slide — shape and size unchanged"
        }
       ]
      },
      {
       "type": "example",
       "heading": "We do:  y = √(x − 2) + 3",
       "example": "**1.** Inside: $x-2$ → RIGHT 2 (inside is opposite).\n**2.** Outside: $+3$ → UP 3 (outside is as written).\n**3.** Start point: $(0,0)\\to(2,3)$.\n**4.** Domain $x\\ge 2$; range $y\\ge 3$ — they slide with the graph.",
       "graph": {
        "kind": "sqrt",
        "a": 1,
        "h": 2,
        "k": 3,
        "domain": [
         -1,
         11
        ],
        "marks": [
         {
          "x": 2,
          "y": 3,
          "label": "(2, 3)"
         }
        ]
       },
       "graphCaption": "y = √(x−2) + 3"
      },
      {
       "type": "mistake",
       "heading": "The inside sign lies",
       "mistake": "$y=(x-3)^{2}$ moves **RIGHT** 3 — not left.\nThe inside asks \"what $x$ makes this zero?\" $x=3$ does, so the vertex now lives at $x=3$.",
       "note": "Read the inside as: the value that makes it zero is the new home."
      },
      {
       "type": "youtry",
       "heading": "Your turn",
       "youTry": "(a) Describe every shift: $y=x^{3}+5$\n(b) Write the equation: $y=|x|$ shifted right 3",
       "graph": {
        "kind": "cubic",
        "a": 1,
        "b": 0,
        "c": 0,
        "d": 5,
        "domain": [
         -2.5,
         2.5
        ],
        "marks": [
         {
          "x": 0,
          "y": 5,
          "label": "(0, 5)"
         }
        ]
       },
       "graphCaption": "(a) to check against"
      },
      {
       "type": "roadmap",
       "heading": "Where this week goes",
       "bullets": [
        "**Tue** — reflections and stretches (the $a$ out front).",
        "**Wed** — combine moves + write equations from a graph.",
        "**Thu** — graph any transformed parent from scratch.",
        "**Fri** — mixed practice + quiz-style check."
       ]
      }
     ]
    },
    "procedureExamples": [
     {
      "prompt": "Describe every shift of $y=|x+2|-5$.",
      "steps": [
       "Inside: $x+2$ → LEFT 2 (opposite of the sign).",
       "Outside: $-5$ → DOWN 5 (as written).",
       "Corner moves $(0,0)\\to(-2,-5)$."
      ],
      "answer": "Left 2, down 5; corner at $(-2,-5)$."
     },
     {
      "prompt": "Write the equation: $y=\\dfrac{1}{x}$ shifted right 4 and down 3.",
      "steps": [
       "Right 4 → inside becomes $x-4$.",
       "Down 3 → append $-3$ outside.",
       "Equation: $y=\\dfrac{1}{x-4}-3$."
      ],
      "answer": "$y=\\dfrac{1}{x-4}-3$"
     },
     {
      "prompt": "State the domain and range of $y=\\dfrac{1}{x-4}-3$.",
      "steps": [
       "The vertical asymptote moves to $x=4$: domain $x\\neq 4$.",
       "The horizontal asymptote moves to $y=-3$: range $y\\neq -3$."
      ],
      "answer": "Domain $x\\neq 4$; range $y\\neq -3$."
     }
    ],
    "worksheet": {
     "title": "Shifting the Parent Functions",
     "instructions": "Use the two shift rules: outside moves as written, inside moves opposite. Domains and ranges slide with the graph.",
     "sections": [
      {
       "type": "Describe the shift",
       "space": "s",
       "workedExample": "**Example:** $y=(x-3)^{2}+2$ — inside $x-3$ moves RIGHT 3, outside $+2$ moves UP 2. The vertex lands at $(3,2)$.",
       "directions": "Name the parent, then describe every shift.",
       "diagram": {
        "plots": [
         {
          "expr": "x^2"
         },
         {
          "expr": "(x-3)^2+2"
         }
        ],
        "xmin": -4,
        "xmax": 7,
        "ymin": -1,
        "ymax": 9,
        "points": [
         [
          0,
          0,
          "parent (0,0)"
         ],
         [
          3,
          2,
          "new vertex (3, 2)"
         ]
        ],
        "caption": "y = x² (indigo) vs y = (x−3)² + 2 (gold)"
       },
       "problems": [
        "$y=x^{2}+3$",
        "$y=\\sqrt{x-4}$",
        "$y=|x+2|-5$",
        "$y=\\dfrac{1}{x}+6$"
       ]
      },
      {
       "type": "Write the equation",
       "space": "s",
       "why": "Reverse the rules: the described move tells you exactly what to write inside (opposite) and outside (as written).",
       "directions": "Write the equation for each described shift.",
       "problems": [
        "$y=x^{3}$ shifted down 7",
        "$y=|x|$ shifted right 3",
        "🌶 $y=\\dfrac{1}{x}$ shifted right 4 and down 3",
        "$y=\\sqrt{x}$ shifted left 5 and up 2"
       ]
      },
      {
       "type": "Domain and range after the shift",
       "space": "m",
       "why": "The domain and range slide exactly as far as the graph does.",
       "directions": "State the domain AND range of each shifted function.",
       "problems": [
        "$y=\\sqrt{x-4}$",
        "🌶 $y=\\dfrac{1}{x-4}-3$",
        "$y=|x+2|-5$"
       ]
      }
     ],
     "procedure": [
      "Find the inside move (opposite of the sign) and the outside move (as written).",
      "Track ONE key point — vertex, corner, or start point.",
      "Slide the domain and range with the graph.",
      "For reciprocal graphs, slide both asymptotes."
     ],
     "optionalExtra": [
      "🌶 The point $(1,1)$ sits on $y=\\sqrt{x}$. Exactly where does it land on $y=\\sqrt{x+5}+2$? Explain both moves."
     ]
    },
    "drawing": null,
    "extension": {
     "title": "Challenge",
     "prompt": "Pick ANY parent function and write an equation that lands its key point (vertex, corner, or start) exactly at $(4,-1)$. Prove it by naming the two moves.",
     "why": "applying both shift rules in reverse"
    },
    "exitTicket": [
     "Describe every shift of $y=\\dfrac{1}{x+5}-2$, then give its domain and range."
    ],
    "answerKey": [
     {
      "section": "Describe the shift",
      "answers": [
       "Quadratic parent; up 3 (vertex $(0,3)$)",
       "Square-root parent; right 4 (start $(4,0)$)",
       "Absolute-value parent; left 2 and down 5 (corner $(-2,-5)$)",
       "Reciprocal parent; up 6 (horizontal asymptote $y=6$)"
      ]
     },
     {
      "section": "Write the equation",
      "answers": [
       "$y=x^{3}-7$",
       "$y=|x-3|$",
       "$y=\\dfrac{1}{x-4}-3$",
       "$y=\\sqrt{x+5}+2$"
      ]
     },
     {
      "section": "Domain and range after the shift",
      "answers": [
       "Domain $x\\ge 4$; range $y\\ge 0$",
       "Domain $x\\neq 4$; range $y\\neq -3$",
       "Domain: all real numbers; range $y\\ge -5$"
      ]
     },
     {
      "section": "Challenge",
      "answers": [
       "$(1,1)\\to(-4,3)$: inside $x+5$ slides left 5 ($1\\to-4$), outside $+2$ slides up 2 ($1\\to3$)"
      ]
     }
    ],
    "scannable": true,
    "ck12": {
     "section": "1.2",
     "title": "Graphical Transformations",
     "url": "https://flexbooks.ck12.org/cbook/ck-12-precalculus-concepts-2.0/section/1.2/"
    },
    "ck12Alts": [
     {
      "section": "1.4",
      "title": "Domain and Range",
      "url": "https://flexbooks.ck12.org/cbook/ck-12-precalculus-concepts-2.0/section/1.4/"
     }
    ]
   },
   "Tue": {
    "type": "worksheet",
    "objective": "Students will apply reflections and vertical stretches/compressions of parent functions.",
    "bellRinger": "Describe every shift of $y=\\sqrt{x+3}-1$.",
    "agenda": "Bell (5) · Go over (5) · Mini-lesson: reflections & stretches (10) · Notes (8) · Practice (17) · Exit (3)",
    "assessment": "Exit ticket on identifying a from a description.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Post the retrieval warm-up.",
      "options": [],
      "say": ""
     },
     {
      "min": 5,
      "title": "Go over",
      "do": "Work the bell ringer on the board.",
      "options": [],
      "say": ""
     },
     {
      "min": 10,
      "title": "Mini-lesson",
      "do": "Teach today's addition (generate materials for the deck + notes).",
      "options": [],
      "say": ""
     },
     {
      "min": 8,
      "title": "Guided notes",
      "do": "Fill the guided notes together.",
      "options": [],
      "say": ""
     },
     {
      "min": 17,
      "title": "Practice",
      "do": "Worksheet / stations.",
      "options": [],
      "say": ""
     },
     {
      "min": 3,
      "title": "Exit ticket",
      "do": "Collect at the door.",
      "options": [],
      "say": ""
     }
    ],
    "notes": null,
    "guidedNotes": null,
    "video": null,
    "videoPlacement": null,
    "presentation": null,
    "procedureExamples": null,
    "worksheet": null,
    "vocab": null,
    "exitTicket": null,
    "answerKey": null,
    "extension": null,
    "drawing": null
   },
   "Wed": {
    "type": "worksheet",
    "objective": "Students will combine shifts, reflections, and stretches, and write the equation of a transformed parent from its description or graph.",
    "bellRinger": "Write the equation: $|x|$ reflected over the x-axis, then up 4.",
    "agenda": "Bell (5) · Go over (5) · Mini-lesson: combining moves (10) · Notes (8) · Practice (17) · Exit (3)",
    "assessment": "Exit ticket: write one equation from a described combination.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Post the retrieval warm-up.",
      "options": [],
      "say": ""
     },
     {
      "min": 5,
      "title": "Go over",
      "do": "Work the bell ringer on the board.",
      "options": [],
      "say": ""
     },
     {
      "min": 10,
      "title": "Mini-lesson",
      "do": "Teach today's addition (generate materials for the deck + notes).",
      "options": [],
      "say": ""
     },
     {
      "min": 8,
      "title": "Guided notes",
      "do": "Fill the guided notes together.",
      "options": [],
      "say": ""
     },
     {
      "min": 17,
      "title": "Practice",
      "do": "Worksheet / stations.",
      "options": [],
      "say": ""
     },
     {
      "min": 3,
      "title": "Exit ticket",
      "do": "Collect at the door.",
      "options": [],
      "say": ""
     }
    ],
    "notes": null,
    "guidedNotes": null,
    "video": null,
    "videoPlacement": null,
    "presentation": null,
    "procedureExamples": null,
    "worksheet": null,
    "vocab": null,
    "exitTicket": null,
    "answerKey": null,
    "extension": null,
    "drawing": null
   },
   "Thu": {
    "type": "worksheet",
    "objective": "Students will graph transformed parent functions from scratch by tracking the key point and applying each move in order.",
    "bellRinger": "Sketch $y=-(x-2)^{2}+3$ — start from the vertex.",
    "agenda": "Bell (5) · Go over (5) · Mini-lesson: graphing from scratch (10) · Notes (8) · Practice (17) · Exit (3)",
    "assessment": "Exit ticket: one full sketch, labeled key point.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Post the retrieval warm-up.",
      "options": [],
      "say": ""
     },
     {
      "min": 5,
      "title": "Go over",
      "do": "Work the bell ringer on the board.",
      "options": [],
      "say": ""
     },
     {
      "min": 10,
      "title": "Mini-lesson",
      "do": "Teach today's addition (generate materials for the deck + notes).",
      "options": [],
      "say": ""
     },
     {
      "min": 8,
      "title": "Guided notes",
      "do": "Fill the guided notes together.",
      "options": [],
      "say": ""
     },
     {
      "min": 17,
      "title": "Practice",
      "do": "Worksheet / stations.",
      "options": [],
      "say": ""
     },
     {
      "min": 3,
      "title": "Exit ticket",
      "do": "Collect at the door.",
      "options": [],
      "say": ""
     }
    ],
    "notes": null,
    "guidedNotes": null,
    "video": null,
    "videoPlacement": null,
    "presentation": null,
    "procedureExamples": null,
    "worksheet": null,
    "vocab": null,
    "exitTicket": null,
    "answerKey": null,
    "extension": null,
    "drawing": null
   },
   "Fri": {
    "type": "worksheet",
    "objective": "Students will demonstrate mastery of transformations of parent functions in a mixed quiz-style check.",
    "bellRinger": "Two quick describes: $y=x^{3}-6$ and $y=\\dfrac{1}{x+1}$.",
    "agenda": "Bell (5) · Go over (5) · Station review (15) · Quiz-style check (8, graded) · Wrap (15)",
    "assessment": "Quiz-style check (4 problems, one per skill this week) graded for mastery.",
    "script": [
     {
      "min": 5,
      "title": "Bell ringer",
      "do": "Post the retrieval warm-up.",
      "options": [],
      "say": ""
     },
     {
      "min": 5,
      "title": "Go over",
      "do": "Work the bell ringer on the board.",
      "options": [],
      "say": ""
     },
     {
      "min": 10,
      "title": "Mini-lesson",
      "do": "Teach today's addition (generate materials for the deck + notes).",
      "options": [],
      "say": ""
     },
     {
      "min": 8,
      "title": "Guided notes",
      "do": "Fill the guided notes together.",
      "options": [],
      "say": ""
     },
     {
      "min": 17,
      "title": "Practice",
      "do": "Worksheet / stations.",
      "options": [],
      "say": ""
     },
     {
      "min": 3,
      "title": "Exit ticket",
      "do": "Collect at the door.",
      "options": [],
      "say": ""
     }
    ],
    "notes": null,
    "guidedNotes": null,
    "video": null,
    "videoPlacement": null,
    "presentation": null,
    "procedureExamples": null,
    "worksheet": null,
    "vocab": null,
    "exitTicket": null,
    "answerKey": null,
    "extension": null,
    "drawing": null
   }
  }
 }
};
