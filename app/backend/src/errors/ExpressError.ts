import { ValidationError } from 'joi';

class ExpressError extends Error {
  protected _statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this._statusCode = statusCode;
  }

  public get statusCode() { return this._statusCode; }

  public static fromJoiError(error: ValidationError): ExpressError {
    const [code, message] = error.details[0].message.split('|');
    return new ExpressError(Number(code), message);
  }
}

export default ExpressError;
