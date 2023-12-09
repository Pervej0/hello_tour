import { RequestHandler, Response, Request } from 'express';
import { CreateTourDB } from './tour.service';

export const CreateTour = async (req: Request, res: Response) => {
 console.log(req.body);
};

// export const CreateTour: RequestHandler = async (req, res) => {
//  console.log('controller');
//  try {
//   const tourData = req.body;
//   console.log(tourData, 'd');
//   const result = await CreateTourDB(tourData);
//   res.status(200).json({
//    success: true,
//    message: 'Tour successfully created',
//    data: result,
//   });
//  } catch (error) {
//   console.log(error);
//  }
// };
