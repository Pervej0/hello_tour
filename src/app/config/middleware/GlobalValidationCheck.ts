import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const GloabalValidationCheck = (validationData: AnyZodObject) => {
 return async (req: Request, res: Response, next: NextFunction) => {
  try {
   validationData.parse({
    body: req.body,
   });
  } catch (error) {
   next(error);
  }
 };
};

export default GloabalValidationCheck;
