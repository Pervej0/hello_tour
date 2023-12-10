import express from 'express';
import { CreateTour, GetAllTour, GetSingleTour } from './tour.controller';
import GloabalValidationCheck from '../config/middleware/GlobalValidationCheck';
import { TourValidationSchema } from './tour.validation';
const router = express.Router();

router.post(
 '/create-tour',
 GloabalValidationCheck(TourValidationSchema),
 CreateTour
);
router.get('/', GetAllTour);
router.get('/:tourId', GetSingleTour);
router.patch('/:tourId');

const TourRouteHandler = router;

export default TourRouteHandler;
