import express, { Response, Request } from 'express';
import { CreateTour } from './tour.controller';
const router = express.Router();

console.log('route');

router.post('/create-tour', (req: Request, res: Response) => {
 console.log(req.body);
});
// router.get('/');

const TourRouteHandler = router;

export default TourRouteHandler;
