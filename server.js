const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


app.set('port', process.env.PORT || 3001);

app.locals.title = 'Unstuck API';

app.locals.thinkingStrategies = require('./thinkingStrategies');
app.locals.randRStrategies = require('./r&rStrategies');

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



app.use(express.json());
