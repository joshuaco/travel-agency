import express from 'express';
import {
  homepage,
  aboutpage,
  contactpage,
  travelpage,
  travelDetailPage,
  testimonialpage,
} from '../controllers/pagesController.js';

import { saveTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', homepage);

router.get('/about', aboutpage);

router.get('/contact', contactpage);

router.get('/travels', travelpage);

router.get('/travels/:slug', travelDetailPage);

router.get('/testimonials', testimonialpage);
router.post('/testimonials', saveTestimonial);

export default router;
