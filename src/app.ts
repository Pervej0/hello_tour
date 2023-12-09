import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CreateTour } from './app/modules/tour.service';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// testing router
app.get('/', async (req: Request, res: Response) => {
  res.send('Welcome to Hello Tour Server Side!');
});

app.post('/create-tour', async (req, res) => {
  const tourData = req.body;
  const result = await CreateTour(tourData);
  res.status(200).json({
    success: true,
    message: 'Tour successfully created',
    data: result,
  });
});

export default app;
