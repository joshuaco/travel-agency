import express from 'express';

const router = express.Router();

/**
 * req - Lo que enviamos.
 * res - Lo que express devuelve (sirve al cliente).
 */
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/about', (req, res) => {
  res.send('About');
});

router.get('/contact', (req, res) => {
  res.send('Contact');
});

export default router;
