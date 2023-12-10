import express, { Application } from 'express';
import TourRouteHandler from '../modules/tour.route';
const app: Application = express();

const allRoute = [{ path: '/api/v1/tours', route: TourRouteHandler }];

allRoute.forEach((item) => app.use(item.path, item.route));

const routesHandler = app;

export default routesHandler;
