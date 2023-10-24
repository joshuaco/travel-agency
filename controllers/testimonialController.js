import { Testimonial } from '../models/Testimonial.js';

const saveTestimonial = async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  const errors = [];

  if (name.trim() === '') {
    errors.push({ message: 'Empty name' });
  }
  if (email.trim() === '') {
    errors.push({ message: 'Empty email' });
  }
  if (message.trim() === '') {
    errors.push({ message: 'Empty message' });
  }

  if (errors.length > 0) {
    res.render('testimonials', {
      page: 'Testimonios',
      errors,
      name,
      email,
      message,
    });
  } else {
    // Save to DB

    try {
      await Testimonial.create({
        name,
        email,
        message,
      });

      res.redirect('/testimonials');
    } catch (error) {
      console.log(error);
    }
  }
};

export { saveTestimonial };
