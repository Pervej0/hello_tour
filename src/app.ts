import cors from 'cors';
import express, { Application, Request, Response } from 'express';
// import app from './app/route';
import routesHandler from './app/route';
import GlobalErrorHandler from './app/config/middleware/GlobalErrorHandler';
import NotFound from './app/config/middleware/notFound';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// routes handler
app.use(routesHandler);

// not found route
app.use('*', NotFound);

// testing router
app.get('/', async (req: Request, res: Response) => {
 res.send('Welcome to Hello Tour Server Side!');
});

// global error handler
app.use(GlobalErrorHandler);

export default app;
