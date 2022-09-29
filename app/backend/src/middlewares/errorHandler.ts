import { ErrorRequestHandler } from 'express';
import ExpressError from '../errors/ExpressError';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof ExpressError) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ message });
  }

  return res.status(500).json(error);
};

export default errorHandler;
