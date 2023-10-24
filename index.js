import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Connect to database
db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Set port
const port = process.env.PORT || 3000;

// Middlewares

// Enable PUG
app.set('view engine', 'pug');

// Set sitename in locals
app.use((req, res, next) => {
  res.locals.sitename = 'Travel Agency';

  next(); // 'return next' force the execution of the next middleware
});

// Add body parser to read form data
app.use(express.urlencoded({ extended: true }));

// Define public folder
app.use(express.static('public'));

// Adding router
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
