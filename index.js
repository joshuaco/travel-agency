import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 3000;

// Middlewares

// Enable PUG
app.set('view engine', 'pug');

// Get current year
app.use((req, res, next) => {
  res.locals.sitename = 'Travel Agency';

  next(); // 'return next' force the execution of the next middleware
});

// Define public folder
app.use(express.static('public'));

// Adding router
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
