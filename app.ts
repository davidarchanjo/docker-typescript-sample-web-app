import express from 'express';

const app = express();
const port = 8080;

app.get('/', (_, res) => {
  res.send('🚀 Hello World from TypeScript 🚀');
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});