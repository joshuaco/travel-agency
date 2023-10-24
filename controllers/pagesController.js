import { Travel } from '../models/Travel.js';
import { Testimonial } from '../models/Testimonial.js';

/**
 * req - Lo que enviamos.
 * res - Lo que express devuelve (sirve al cliente).
 */
const homepage = (req, res) => {
  res.render('home', {
    page: 'Inicio',
    clase: 'home',
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

const travelpage = async (req, res) => {
  // Query database -> Consultar base de datos
  const travels = await Travel.findAll();

  res.render('travels', {
    page: 'Viajes',
    travels,
  });
};

// Show single travel by slug
const travelDetailPage = async (req, res) => {
  const { slug } = req.params;

  try {
    const travel = await Travel.findOne({ where: { slug } });

    res.render('travel', {
      page: 'Información del viaje',
      travel,
    });
  } catch (error) {
    console.log('No se pudo obtener la página' + error);
  }
};

const testimonialpage = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();

    res.render('testimonials', {
      page: 'Testimonios',
      testimonials,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  homepage,
  aboutpage,
  contactpage,
  travelpage,
  travelDetailPage,
  testimonialpage,
};
