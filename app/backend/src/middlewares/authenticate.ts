import { RequestHandler } from 'express';
import ValidationError from '../errors/ValidationError';
import Token from '../utilities/Token';
import { JwtPayload } from '../@types';

const authenticate: RequestHandler = async (req, _res, next) => {
  const { headers: { authorization } } = req;

  if (!authorization) return next(ValidationError.tokenNotFound);

  try {
    const { id } = Token.validate(authorization) as JwtPayload;
    req.headers.userId = id;
    return next();
  } catch (error) {
    return next(ValidationError.invalidToken);
  }
};

export default authenticate;
