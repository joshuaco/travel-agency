/**
 * req - Lo que enviamos.
 * res - Lo que express devuelve (sirve al cliente).
 */
const homepage = (req, res) => {
  res.render('home', {
    page: 'Inicio',
  });
};

const aboutpage = (req, res) => {
  res.render('about', {
    page: 'Nosotros',
  });
};

const contactpage = (req, res) => {
  res.render('contact', {
    page: 'Contacto',
  });
};

const travelpage = (req, res) => {
  res.render('travels', {
    page: 'Viajes',
  });
};

const testimonialpage = (req, res) => {
  res.render('testimonials', {
    page: 'Testimonios',
  });
};

export { homepage, aboutpage, contactpage, travelpage, testimonialpage };
