import express from 'express';
import {
  homepage,
  aboutpage,
  contactpage,
  travelpage,
  travelDetailPage,
  testimonialpage,
} from '../controllers/pagesController.js';

const router = express.Router();

router.get('/', homepage);

router.get('/about', aboutpage);

router.get('/contact', contactpage);

router.get('/travels', travelpage);

router.get('/travels/:slug', travelDetailPage);

router.get('/testimonials', testimonialpage);

export default router;
