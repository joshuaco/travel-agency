import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 3000;

// Adding router
app.use('/', router);

// Enable PUG
app.set('view engine', 'pug');

// Define public folder
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
