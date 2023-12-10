import { RequestHandler } from 'express';
import { CreateTourDB, GetAllTourDB, GetSingleTourDB } from './tour.service';
import { StatusCodes } from 'http-status-codes';

export const CreateTour: RequestHandler = async (req, res, next) => {
 try {
  const tourData = req.body;
  const result = await CreateTourDB(tourData);
  res.status(200).json({
   success: true,
   message: 'Tour successfully created',
   data: result,
  });
 } catch (error) {
  return next(error);
 }
};

export const GetAllTour: RequestHandler = async (req, res, next) => {
 try {
  const result = await GetAllTourDB();
  res.status(200).json({
   success: true,
   message: 'Tours successfully retrieved!',
   data: result,
  });
 } catch (error) {
  next(error);
 }
};

export const GetSingleTour: RequestHandler = async (req, res, next) => {
 try {
  const id = req.params.tourId;
  const result = await GetSingleTourDB(id);
  res.status(StatusCodes.OK).json({
   success: true,
   message: 'Tours successfully retrieved!',
   data: result,
  });
 } catch (err) {
  next(err);
 }
};
