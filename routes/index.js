import express from 'express';

const router = express.Router();

/**
 * req - Lo que enviamos.
 * res - Lo que express devuelve (sirve al cliente).
 */
router.get('/', (req, res) => {
  res.render('home', {
    page: 'Inicio',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    page: 'Nosotros',
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    page: 'Contacto',
  });
});

router.get('/travels', (req, res) => {
  res.render('travels', {
    page: 'Viajes',
  });
});

router.get('/testimonials', (req, res) => {
  res.render('testimonials', {
    page: 'Testimonios',
  });
});

export default router;
