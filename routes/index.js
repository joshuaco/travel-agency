import express from 'express';
import {
  homepage,
  aboutpage,
  contactpage,
  travelpage,
  testimonialpage,
} from '../controllers/pagesController.js';

const router = express.Router();

router.get('/', homepage);

router.get('/about', aboutpage);

router.get('/contact', contactpage);

router.get('/travels', travelpage);

router.get('/testimonials', testimonialpage);

export default router;
