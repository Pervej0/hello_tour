/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const GlobalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
 console.log('globaaaaaaa');
 if (err instanceof ZodError) {
  console.log('globaaaaaaa zod errrooor');
  res.status(500).json({
   zodErrrro: err,
  });
 }
 res.status(500).json({
  myError: err,
 });
};

export default GlobalErrorHandler;
