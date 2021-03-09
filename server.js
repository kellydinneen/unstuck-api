const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.locals.title = 'Unstuck API';

app.locals.strategySubmissions = [];

app.locals.thinkingStrategies = [
  {
    id: 1,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Honour thy error as a hidden intention.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 2,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Work at a different speed.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 3,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "What would your closest friend do?",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 4,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "State the problem in words as clearly as possible.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 5,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Use something nearby as a model.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 6,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Faced with a choice, do both.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 7,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Discard an axiom.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 8,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Turn it upside down.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 9,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Balance the consistency principle with the inconsistency principle.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 9,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "Change nothing and continue with immaculate consistency.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 10,
    type: ['oblique', 'research'],
    name: "an Oblique Research Strategy",
    content: "Once the search is in progress, something will be found",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 11,
    type: ['oblique'],
    name: "an Oblique Strategy",
    content: "The most important thing is the thing most easily forgotten",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 12,
    type: ['ideation'],
    name: 'Diffuse Thinking',
    content: 'As she lost consciousness of outer things…her mind kept throwing up from its depths, scenes, and names, and sayings, and memories and ideas, like a fountain spurting. — Virginia Woolf, To the Lighthouse',
    resource: 'https://fs.blog/2019/10/focused-diffuse-thinking/',
    contentMedium: 'text',
  },
  {
    id: 13,
    type: ['ideation'],
    name: 'coming up with a bad idea',
    content: 'Try to think of the worst possible idea you can. Anywhere to go from there?',
    resource: 'https://www.interaction-design.org/literature/article/introduction-to-the-essential-ideation-techniques-which-are-the-heart-of-design-thinking',
    contentMedium: 'text',
  },
  {
    id: 14,
    type: ['ideation'],
    name: 'an Analogy',
    content: "Start with an analogy. Put what you're doing in a new conceptual form",
    resource: 'https://www.interaction-design.org/literature/article/introduction-to-the-essential-ideation-techniques-which-are-the-heart-of-design-thinking',
    contentMedium: 'text',
  },
  {
    id: 23,
    type: ['science-backed'],
    name: "the Feynman Learning Technique",
    content: 're the thing you want to learn: (1) try teaching it to a child or a rubberduck (like me!); (2) Identify gaps in your explanation; (3) Organize and simplify; (4) Run it by a real person (not a rubberduck)',
    resource: 'https://fs.blog/2021/02/feynman-learning-technique/',
    contentMedium: 'text',
  },
  {
    id: 24,
    type: ['science-backed'],
    name: 'Second-Order Thinking',
    content: 'Failing to consider second- and third-order consequences is the cause of a lot of painfully bad decisions, and it is especially deadly when the first inferior option confirms your own biases. Never seize on the first available option, no matter how good it seems, before you’ve asked questions and explored. - Ray Dalio',
    resource: 'https://fs.blog/2016/04/second-order-thinking/',
    contentMedium: 'text',
  },
  {
    id: 25,
    type: ['science-backed'],
    name: 'Double-Loop Learning',
    content: 'Reflect on a problem you had in the past. What did you learn from it? Now, what can you learn from what you learnt?',
    resource: 'https://fs.blog/2018/06/double-loop-learning/',
    contentMedium: 'text',
  },
  {
    id: 26,
    type: ['science-backed'],
    name: 'turning your problem into play',
    content: "That is the way to learn the most, that when you are doing something with such enjoyment that you don’t notice that the time passes. - Albert Einstein",
    resource: 'https://fs.blog/2015/02/albert-einstein-learning/',
    contentMedium: 'text',
  },
  {
    id: 27,
    type: ['science-backed'],
    name: 'avoiding stupidity, instead of aiming for brilliance',
    content: "We often focus on trying to be brilliant, yet many great people get far more mileage out of avoiding making stupid mistakes. Amateurs win the game when their opponent loses points, experts win the game by gaining points. ",
    resource: "https://fs.blog/2014/06/avoiding-stupidity/",
    contentMedium: 'text',
  },
  {
    id: 28,
    type: ['science-backed', 'bias-busting'],
    name: 'resisting confirmation bias',
    content: 'Ask yourself, are you looking only for what you already think you know? Are you only looking for one kind of answer?',
    resource: 'https://courses.lumenlearning.com/wsu-sandbox/chapter/problem-solving/',
    contentMedium: 'text',
  },
  {
    id: 29,
    type: ['science-backed'],
    name: 'Trial and Error',
    content: 'Stop thinking so hard. Try something and fail and try again.',
    resource: 'https://en.wikipedia.org/wiki/Trial_and_error',
    contentMedium: 'text',
  },
  {
    id: 30,
    type: ['science-backed'],
    name: 'metacognition',
    content: "I can't read your mind, but you can. Think about how you're thinking. Why are you thinking that way?",
    resource: 'https://en.wikipedia.org/wiki/Metacognition',
    contentMedium: 'text',
  },
  {
    id: 1,
    type: ['research'],
    name: 'testing an edge-case',
    content: "Have you been thinking about this problem through the first example you came up? Why not try a case that's more unruly, that pushes the envelope of what you're dealing with?",
    resource: 'https://en.wikipedia.org/wiki/Edge_case',
    contentMedium: 'text',
  },
  {
    id: 1,
    type: ['science-backed'],
    name: 'hypothesis testing',
    content: 'Come up with a hypothesis about how this works. How would you prove or disprove that hypothesis?',
    resource: 'https://en.wikipedia.org/wiki/Statistical_hypothesis_testing',
    contentMedium: 'text',
  }
];

app.locals.randRStrategies = [
  {
    id: 1,
    type: ['rest'],
    name: "some Oblique R&R",
    content: "Do nothing for as long as possible.",
    resource: 'https://en.wikipedia.org/wiki/Oblique_Strategies',
    contentMedium: 'text',
  },
  {
    id: 2,
    type: ['rest'],
    name: "going to bed",
    content: "If you need help, hava cup of tea first and listen to an audiobook",
    resource: '',
    contentMedium: 'text',
  },
  {
    id: 3,
    type: ['rest'],
    name: "taking a cat nap",
    content: "set a timer: at least 15 minutes",
    resource: '',
    contentMedium: 'text',
  },
  {
    id: 4,
    type: ['nourishment'],
    name: "having something sweet",
    content: "sugar isn't always the answer, but today it might just be what you need",
    resource: "",
    contentMedium: 'text',
  },
  {
    id: 5,
    type: ['nourishment'],
    name: "drinking water",
    content: "if you're a millenial who can't drink tap water, go get a la croix or something",
    resource: "",
    contentMedium: 'text',
  },
  {
    id: 6,
    type: ['nourishment'],
    name: "having some real food",
    content: "With protein in it. Take some time to cook for yourself. It is NOT a waste of time.",
    resource: "",
    contentMedium: 'text',
  },
  {
    id: 7,
    type: ['movement'],
    name: "yoga",
    content: "breathe in, breath out. Now...forward fold, halfway lift, downward dog, mountain pose x 3",
    resource: 'https://www.popsugar.com/fitness/Five-Minute-Yoga-Sequence-34770047',
    contentMedium: 'text',
  },
  {
    id: 8,
    type: ['movement'],
    name: "getting your blood pumping!",
    content: "Try this: 3x 20 jumping jacks + 20 sit-ups",
    resource: '',
    contentMedium: 'text',
  },
  {
    id: 9,
    type: ['movement'],
    name: "stretching",
    content: "just feel your body for a few minutes, maybe it has better ideas than you",
    resource: '',
    contentMedium: 'text',
  }
];

app.get('/', (request, response) => {
  response.send('hey there, you stuck?');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/api/v1/thinking/oblique', (request, response) => {
  const strategies = app.locals.thinkingStrategies.filter(strat => strat.type.includes('oblique'));
  const selection = strategies[Math.floor(Math.random() * strategies.length)]
  response.json({selection});
});

app.get('/api/v1/thinking/science', (request, response) => {
  const strategies = app.locals.thinkingStrategies.filter(strat => strat.type.includes('science-backed'));
  const selection = strategies[Math.floor(Math.random() * strategies.length)]
  response.json({selection});
});

app.get('/api/v1/thinking/ideation', (request, response) => {
  const strategies = app.locals.thinkingStrategies.filter(strat => strat.type.includes('ideation'));
  const selection = strategies[Math.floor(Math.random() * strategies.length)]
  response.json({selection});
});

app.get('/api/v1/rr/rest', (request, response) => {
  const strategies = app.locals.randRStrategies.filter(strat => strat.type.includes('rest'));
  const selection = strategies[Math.floor(Math.random() * strategies.length)]
  response.json({selection});
});

app.get('/api/v1/rr/nourishment', (request, response) => {
  const strategies = app.locals.randRStrategies.filter(strat => strat.type.includes('nourishment'));
  const selection = strategies[Math.floor(Math.random() * strategies.length)]
  response.json({selection});
});

app.get('/api/v1/rr/movement', (request, response) => {
  const strategies = app.locals.randRStrategies.filter(strat => strat.type.includes('movement'));
  const selection = strategies[Math.floor(Math.random() * strategies.length)]
  response.json({selection});
});

app.get('/api/v1/submissions', (request, response) => {
  const strategies = app.locals.strategySubmissions;
  response.json({strategies});
});

app.post('/api/v1/submissions', (request, response) => {
  const newSubmission = request.body;
  app.locals.strategySubmissions.push(newSubmission)
  response.status(201).json(app.locals.strategySubmissions);
});


app.use(express.json());
