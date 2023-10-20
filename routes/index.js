import express from 'express';

const router = express.Router();

/**
 * req - Lo que enviamos.
 * res - Lo que express devuelve (sirve al cliente).
 */
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  const travels = 'Viaje a Cuba';

  res.render('about', {
    travels,
  });
});

router.get('/contact', (req, res) => {
  res.send('Contact');
});

export default router;
