import cors from 'cors';
import express, { Application, Request, Response } from 'express';
// import app from './app/route';
import TourRouteHandler from './app/modules/tour.route';
const app: Application = express();

const allRoute = [{ path: '/api/v1/tour', route: TourRouteHandler }];

allRoute.forEach((item) => app.use(item.path, item.route));
// parser
app.use(express.json());
app.use(cors());

// testing router
app.get('/', async (req: Request, res: Response) => {
 res.send('Welcome to Hello Tour Server Side!');
});

export default app;
