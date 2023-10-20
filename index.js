import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 3000;

// Adding router
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
