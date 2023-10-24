import { Travel } from '../models/Travel.js';
import { Testimonial } from '../models/Testimonial.js';

/**
 * req - Lo que enviamos.
 * res - Lo que express devuelve (sirve al cliente).
 */
const homepage = async (req, res) => {
  // Query 3 travels from database
  try {
    const travels = await Travel.findAll({ limit: 3 });

    res.render('home', {
      page: 'Inicio',
      clase: 'home',
      travels,
    });
  } catch (error) {
    console.log(error);
  }
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

  try {
    res.render('travels', {
      page: 'Viajes',
      travels,
    });
  } catch (error) {
    console.log(error);
  }
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
