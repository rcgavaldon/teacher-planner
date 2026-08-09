/* A full Pre-Calculus week authored in the NEW structured format the ported exporters consume.
   Cloze rule followed: never place {{...}} inside a $...$ span; math answers are wrapped in $...$. */
module.exports = {
  course: { name: "Pre-Calculus", periods: 1, roster: 0 },
  days: {
  // ---------------- MON: Function Families ----------------
  Mon: {
    type: "worksheet",
    objective: "Identify parent functions and their key features",
    ck12: { title: "Function Families" },
    guidedNotes: {
      title: "Parent Function Families",
      vocab: [
        { term: "Parent function", def: "the {{simplest|2cm}} form of a family --- no shifts, stretches, or reflections." },
        { term: "Domain / Range", def: "domain is the set of allowed {{$x$|1.2cm}}-values; range is the set of resulting {{$y$|1.2cm}}-values." }
      ],
      worked: {
        prompt: "Name the parent of $f(x)=\\sqrt{x}$ and give its domain.",
        steps: [
          "Match the rule to a known family: this is the {{square root|3cm}} parent.",
          "Recall its shape: it starts at the point {{$(0,0)$|1.8cm}} and curves up to the right.",
          "A square root needs a non-negative inside, so the domain is {{$x\\ge 0$|2cm}}."
        ]
      },
      diagramLead: "See it:",
      diagram: { plots:[{expr:"sqrt(x)",domain:[0,9],color:"blue"}], xmin:-1, xmax:9, ymin:-1, ymax:4,
                 points:[[0,0,"start $(0,0)$","red"]], caption:"$y=\\sqrt{x}$ --- starts at the origin, domain $x\\ge0$." },
      youTry: [
        { prompt:"Name the parent of $f(x)=\\dfrac{1}{x}$ and give its domain.", answer:"reciprocal (rational); domain $x\\ne 0$" },
        { prompt:"Name the parent of $f(x)=|x|$ and give its range.", answer:"absolute value; range $y\\ge 0$" }
      ],
      summary: "To name a parent: match the {{rule|1.5cm}} to a family, recall its {{shape|1.6cm}}, then state the {{domain|1.8cm}}."
    },
    worksheet: {
      title: "Function Families",
      sections: [{
        type: "Name the parent & give the domain", space: "m",
        workedExample: "$f(x)=2^{x}$ is the **exponential** parent: it passes through $(0,1)$, never touches the $x$-axis, and its domain is all real numbers.",
        directions: "Name the parent family and state the domain.",
        problems: ["$f(x)=x^{2}$","$f(x)=x^{3}$","$f(x)=\\sqrt{x}$","$f(x)=\\dfrac{1}{x}$","$f(x)=|x|$","$f(x)=x$","$f(x)=2^{x}$","$f(x)=\\sqrt[3]{x}$","$f(x)=\\dfrac{1}{x^{2}}$","$f(x)=5$","$f(x)=x^{4}$"]
      }],
      procedure: ["Match the rule to a known family","Recall the family's basic shape and a key point","State the domain --- watch square roots and denominators"],
      optionalExtra: ["$f(x)=\\log_{2} x$ --- name the family, give the domain, and the one point every log parent passes through."]
    },
    answerKey: [{ section:"Name the parent & give the domain", answers:[
      "Quadratic; domain all reals $(-\\infty,\\infty)$",
      "Cubic; domain all reals",
      "Square root; domain $x\\ge 0$",
      "Reciprocal (rational); domain $x\\ne 0$",
      "Absolute value; domain all reals",
      "Linear (identity); domain all reals",
      "Exponential; domain all reals",
      "Cube root; domain all reals",
      "Rational; domain $x\\ne 0$",
      "Constant; domain all reals",
      "Quartic (even power); domain all reals",
      "Logarithmic; domain $x>0$; passes through $(1,0)$"
    ]}],
    scannable: true
  },
  // ---------------- TUE: Transformations ----------------
  Tue: {
    type: "worksheet",
    objective: "Graph transformations of parent functions (shifts, reflections, stretches)",
    ck12: { title: "Function Transformations" },
    guidedNotes: {
      title: "Transformations of Functions",
      vocab: [
        { term: "Translation", def: "a {{slide|1.6cm}} of the graph --- $f(x)+k$ moves it {{up/down|2.2cm}}, and $f(x-h)$ moves it {{left/right|2.4cm}}." },
        { term: "Reflection", def: "a flip: $-f(x)$ flips over the {{$x$-axis|1.8cm}}, and $f(-x)$ flips over the {{$y$-axis|1.8cm}}." }
      ],
      worked: {
        prompt: "Describe how $g(x)=(x-3)^{2}+2$ transforms the parent $x^{2}$.",
        steps: [
          "Inside the square, $x-3$ shifts the graph {{right 3|1.8cm}} (opposite the sign).",
          "The $+2$ outside shifts it {{up 2|1.5cm}}.",
          "So the vertex moves from $(0,0)$ to {{$(3,2)$|1.8cm}}."
        ]
      },
      diagramLead: "See it:",
      diagram: { plots:[{expr:"x^2",domain:[-2,2],color:"gray",dashed:true},{expr:"(x-3)^2+2",domain:[1,5],color:"blue"}],
                 xmin:-3, xmax:6, ymin:-1, ymax:7, points:[[0,0,"$(0,0)$","gray"],[3,2,"$(3,2)$","red"]],
                 caption:"parent (dashed) $\\to$ right 3, up 2 (solid)." },
      youTry: [
        { prompt:"Describe $h(x)=-x^{2}$ from the parent.", answer:"reflection over the $x$-axis (opens down)" },
        { prompt:"Give the vertex of $y=(x+1)^{2}-4$.", answer:"$(-1,-4)$" }
      ],
      summary: "$f(x-h)+k$ shifts a graph {{$h$ right, $k$ up|3cm}}; a leading $-f(x)$ {{reflects|2cm}} it over the $x$-axis."
    },
    worksheet: {
      title: "Transformations",
      sections: [{
        type: "Describe the transformation & give the new vertex", space: "m",
        workedExample: "$g(x)=(x+4)^{2}-1$: inside $+4$ shifts **left 4**, outside $-1$ shifts **down 1**, so the vertex is $(-4,-1)$.",
        directions: "Describe each transformation from the parent $x^2$ and give the new vertex.",
        problems: ["$y=(x-2)^{2}$","$y=x^{2}+3$","$y=(x+5)^{2}-2$","$y=-(x-1)^{2}$","$y=(x-3)^{2}+4$","$y=x^{2}-6$","$y=(x+2)^{2}$","$y=-(x+4)^{2}+1$","$y=(x-1)^{2}-5$","$y=-x^{2}+2$"]
      }],
      procedure: ["Read the inside $(x-h)$: shift opposite the sign (left/right)","Read the outside $+k$: shift up/down","A leading $-$ reflects over the $x$-axis","Vertex lands at $(h,k)$"],
      optionalExtra: ["$y=-(x+2)^{2}+5$ --- describe every transformation, give the vertex, and state whether it opens up or down."]
    },
    answerKey: [{ section:"Describe the transformation & give the new vertex", answers:[
      "Right 2; vertex $(2,0)$",
      "Up 3; vertex $(0,3)$",
      "Left 5, down 2; vertex $(-5,-2)$",
      "Right 1, reflect over $x$-axis; vertex $(1,0)$, opens down",
      "Right 3, up 4; vertex $(3,4)$",
      "Down 6; vertex $(0,-6)$",
      "Left 2; vertex $(-2,0)$",
      "Left 4, up 1, reflect over $x$-axis; vertex $(-4,1)$, opens down",
      "Right 1, down 5; vertex $(1,-5)$",
      "Up 2, reflect over $x$-axis; vertex $(0,2)$, opens down",
      "Left 2, up 5, reflect over $x$-axis; vertex $(-2,5)$, opens down"
    ]}],
    scannable: true
  },
  // ---------------- WED: Domain & Range ----------------
  Wed: {
    type: "worksheet",
    objective: "State the domain and range of a function from its equation or graph",
    ck12: { title: "Domain and Range" },
    guidedNotes: {
      title: "Domain & Range",
      vocab: [
        { term: "Domain", def: "all the {{input|1.6cm}} values ($x$) a function is allowed to use." },
        { term: "Range", def: "all the {{output|1.8cm}} values ($y$) the function actually produces." }
      ],
      worked: {
        prompt: "Find the domain and range of $f(x)=\\sqrt{x-2}$.",
        steps: [
          "A square root can't hold a negative: set $x-2\\ge 0$, so the domain is {{$x\\ge 2$|1.8cm}}.",
          "The smallest output is at $x=2$, where $f(2)=$ {{$0$|1cm}}, then it grows.",
          "So the range is {{$y\\ge 0$|1.8cm}}."
        ]
      },
      diagramLead: "See it:",
      diagram: { plots:[{expr:"sqrt(x-2)",domain:[2,11],color:"blue"}], xmin:-1, xmax:11, ymin:-1, ymax:4,
                 points:[[2,0,"start $(2,0)$","red"]], caption:"$y=\\sqrt{x-2}$ --- domain $x\\ge2$, range $y\\ge0$." },
      youTry: [
        { prompt:"Give the domain of $f(x)=\\dfrac{1}{x-5}$.", answer:"$x\\ne 5$ (all reals except 5)" },
        { prompt:"Give the range of $f(x)=x^{2}+1$.", answer:"$y\\ge 1$" }
      ],
      summary: "Watch two traps: a {{denominator|2.6cm}} can't be $0$, and a {{square root|2.4cm}} can't hold a negative."
    },
    worksheet: {
      title: "Domain & Range",
      sections: [{
        type: "State the domain (and range where asked)", space: "m",
        workedExample: "$f(x)=\\dfrac{1}{x+3}$: the denominator can't be $0$, so $x\\ne -3$. Domain: all reals except $-3$.",
        directions: "State the domain. For #9 and #10 also state the range.",
        problems: ["$f(x)=\\dfrac{1}{x-4}$","$f(x)=\\sqrt{x+6}$","$f(x)=\\dfrac{x}{x^{2}-9}$","$f(x)=\\dfrac{1}{x+7}$","$f(x)=\\sqrt{x-1}$","$f(x)=\\dfrac{2}{x^{2}-16}$","$f(x)=\\sqrt{2x-8}$","$f(x)=\\dfrac{x+1}{x^{2}-x-6}$","$f(x)=x^{2}-5$","$f(x)=|x|+2$"]
      }],
      procedure: ["Denominator $\\ne 0$ --- exclude those $x$","Even root's inside must be $\\ge 0$ --- solve it","Otherwise the domain is all reals","Range: think about the lowest or highest output"],
      optionalExtra: ["$f(x)=\\dfrac{\\sqrt{x-1}}{x-4}$ --- give the domain (both traps apply at once)."]
    },
    answerKey: [{ section:"State the domain (and range where asked)", answers:[
      "$x\\ne 4$",
      "$x\\ge -6$",
      "$x\\ne \\pm 3$ (since $x^{2}-9=0$ at $\\pm 3$)",
      "$x\\ne -7$",
      "$x\\ge 1$",
      "$x\\ne \\pm 4$ (since $x^{2}-16=0$ at $\\pm 4$)",
      "$x\\ge 4$ (need $2x-8\\ge 0$)",
      "$x\\ne 3,\\ -2$ (denominator $(x-3)(x+2)=0$)",
      "Domain all reals; range $y\\ge -5$",
      "Domain all reals; range $y\\ge 2$",
      "$x\\ge 1$ and $x\\ne 4$ (root needs $x\\ge 1$; denominator excludes 4)"
    ]}],
    scannable: true
  },
  // ---------------- THU: Maximum & Minimum ----------------
  Thu: {
    type: "worksheet",
    objective: "Identify maximum or minimum and increasing/decreasing intervals of a quadratic",
    ck12: { title: "Maximums and Minimums" },
    guidedNotes: {
      title: "Maximum & Minimum",
      vocab: [
        { term: "Max / min", def: "the {{turning point|2.6cm}} of a parabola (the vertex); opens up gives a {{minimum|2cm}}, opens down gives a {{maximum|2cm}}." },
        { term: "Increasing / decreasing", def: "read left to right --- the graph goes {{up|1.2cm}} (increasing) or {{down|1.4cm}} (decreasing)." }
      ],
      worked: {
        prompt: "For $y=(x-2)^{2}-3$, give the vertex, state max or min, and the intervals.",
        steps: [
          "Vertex form $a(x-h)^{2}+k$ gives vertex {{$(2,-3)$|1.8cm}}.",
          "Leading coefficient is $+1$ (opens up), so the vertex is a {{minimum|1.8cm}}.",
          "It decreases for {{$x<2$|1.5cm}} and increases for {{$x>2$|1.5cm}}."
        ]
      },
      diagramLead: "See it:",
      diagram: { plots:[{expr:"(x-2)^2-3",domain:[-1,5],color:"blue"}], xmin:-2, xmax:6, ymin:-4, ymax:7,
                 points:[[2,-3,"min $(2,-3)$","red"]], caption:"opens up $\\Rightarrow$ minimum at $(2,-3)$." },
      youTry: [
        { prompt:"Give the vertex and max/min of $y=-x^{2}+4$.", answer:"vertex $(0,4)$, maximum" },
        { prompt:"Give the intervals of $y=x^{2}$.", answer:"decreasing $x<0$, increasing $x>0$" }
      ],
      summary: "Opens {{up|1cm}} $\\Rightarrow$ minimum; opens {{down|1.4cm}} $\\Rightarrow$ maximum; the graph turns at the {{vertex|1.6cm}}."
    },
    worksheet: {
      title: "Quadratic Functions: Vertex, Max & Min",
      sections: [{
        type: "State max or min, the vertex, and the intervals", space: "l",
        workedExample: "For $y=x^{2}-4$ the vertex is $(0,-4)$, a **minimum**. It decreases for $x<0$ and increases for $x>0$.",
        directions: "For each function state max or min, give the vertex, and the increasing / decreasing intervals.",
        diagram: { plots:[{expr:"x^2-4",domain:[-3,3],color:"blue"}], xmin:-3.5, xmax:3.5, ymin:-5.5, ymax:5.5,
                   xtick:"-3,-2,-1,1,2,3", ytick:"-4,-2,2,4", points:[[0,-4,"vertex $(0,-4)$","red"]], width:"8cm", height:"5cm" },
        problems: ["$y=x^{2}+2$","$y=-x^{2}+5$","$y=(x-3)^{2}$","$y=-(x+1)^{2}-2$","$y=(x+2)^{2}-1$","$y=-(x-4)^{2}+3$","$y=x^{2}-6x$","$y=2(x-1)^{2}+3$"]
      }],
      procedure: ["Opens up ($+x^{2}$) gives a minimum; opens down gives a maximum","Vertex form $a(x-h)^{2}+k$ has vertex $(h,k)$","The graph turns (changes direction) at the vertex"],
      optionalExtra: ["$y=(x-2)^{2}-9$ --- give the vertex, both intervals, and the two $x$-intercepts."]
    },
    answerKey: [{ section:"State max or min, the vertex, and the intervals", answers:[
      "Opens up $\\Rightarrow$ min; vertex $(0,2)$; dec $x<0$, inc $x>0$",
      "Opens down $\\Rightarrow$ max; vertex $(0,5)$; inc $x<0$, dec $x>0$",
      "Vertex $(3,0)$, opens up $\\Rightarrow$ min; dec $x<3$, inc $x>3$",
      "Vertex $(-1,-2)$, opens down $\\Rightarrow$ max; inc $x<-1$, dec $x>-1$",
      "Vertex $(-2,-1)$, opens up $\\Rightarrow$ min; dec $x<-2$, inc $x>-2$",
      "Vertex $(4,3)$, opens down $\\Rightarrow$ max; inc $x<4$, dec $x>4$",
      "Complete the square: $x^{2}-6x=(x-3)^{2}-9$; vertex $(3,-9)$ min; dec $x<3$, inc $x>3$",
      "$a=2>0$ opens up $\\Rightarrow$ min; vertex $(1,3)$; dec $x<1$, inc $x>1$",
      "Vertex $(2,-9)$ min; dec $x<2$, inc $x>2$; intercepts $x=-1,\\ 5$"
    ]}],
    scannable: true
  },
  // ---------------- FRI: Symmetry (even/odd) ----------------
  Fri: {
    type: "worksheet",
    objective: "Determine whether a function is even, odd, or neither, and use symmetry",
    ck12: { title: "Function Symmetry" },
    guidedNotes: {
      title: "Symmetry: Even & Odd Functions",
      vocab: [
        { term: "Even function", def: "symmetric across the {{$y$-axis|1.8cm}}; algebraically $f(-x)=$ {{$f(x)$|1.6cm}}." },
        { term: "Odd function", def: "symmetric about the {{origin|1.8cm}}; algebraically $f(-x)=$ {{$-f(x)$|1.8cm}}." }
      ],
      worked: {
        prompt: "Is $f(x)=x^{2}-3$ even, odd, or neither?",
        steps: [
          "Replace $x$ with $-x$: $f(-x)=(-x)^{2}-3=$ {{$x^{2}-3$|2cm}}.",
          "Compare to $f(x)$: they are {{equal|1.6cm}}, so $f(-x)=f(x)$.",
          "Therefore $f$ is {{even|1.4cm}} (symmetric across the $y$-axis)."
        ]
      },
      diagramLead: "See it (even = y-axis mirror):",
      diagram: { plots:[{expr:"x^2-3",domain:[-3,3],color:"blue"}], xmin:-3.5, xmax:3.5, ymin:-4, ymax:7,
                 caption:"$y=x^{2}-3$ --- the $y$-axis is a mirror line (even)." },
      youTry: [
        { prompt:"Is $f(x)=x^{3}$ even, odd, or neither?", answer:"odd: $f(-x)=-x^{3}=-f(x)$" },
        { prompt:"Is $f(x)=x^{2}+x$ even, odd, or neither?", answer:"neither" }
      ],
      summary: "Compute $f(-x)$: equals $f(x)\\Rightarrow$ {{even|1.2cm}}; equals $-f(x)\\Rightarrow$ {{odd|1.2cm}}; otherwise {{neither|1.6cm}}."
    },
    worksheet: {
      title: "Even, Odd, or Neither",
      sections: [{
        type: "Determine even, odd, or neither", space: "m",
        workedExample: "$f(x)=x^{4}-x^{2}$: $f(-x)=x^{4}-x^{2}=f(x)$, so it is **even**.",
        directions: "Compute $f(-x)$ and decide: even, odd, or neither. Show the substitution.",
        problems: ["$f(x)=x^{2}+1$","$f(x)=x^{3}-x$","$f(x)=x^{3}+2$","$f(x)=|x|$","$f(x)=2x$","$f(x)=x^{4}-3x^{2}$","$f(x)=x^{5}$","$f(x)=x^{2}+x$","$f(x)=\\dfrac{1}{x}$"]
      }],
      procedure: ["Replace every $x$ with $-x$ and simplify","If $f(-x)=f(x)$ it's even (y-axis symmetry)","If $f(-x)=-f(x)$ it's odd (origin symmetry)","Otherwise it's neither"],
      optionalExtra: ["$f(x)=x^{3}+x^{2}$ --- test $f(-x)$ and classify; explain why a single $x^{2}$ term breaks odd symmetry."]
    },
    answerKey: [{ section:"Determine even, odd, or neither", answers:[
      "$f(-x)=x^{2}+1=f(x)$: even",
      "$f(-x)=-x^{3}+x=-(x^{3}-x)=-f(x)$: odd",
      "$f(-x)=-x^{3}+2$: neither",
      "$f(-x)=|-x|=|x|=f(x)$: even",
      "$f(-x)=-2x=-f(x)$: odd",
      "$f(-x)=x^{4}-3x^{2}=f(x)$: even (all even powers)",
      "$f(-x)=-x^{5}=-f(x)$: odd",
      "$f(-x)=x^{2}-x$: neither",
      "$f(-x)=\\dfrac{1}{-x}=-\\dfrac{1}{x}=-f(x)$: odd",
      "$f(-x)=-x^{3}+x^{2}$: neither --- the even $x^{2}$ term stays $+$ while $x^{3}$ flips, so it can't equal $\\pm f(x)$"
    ]}],
    scannable: true
  }
  }
};
