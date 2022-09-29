abstract class HttpError extends Error {
  protected _statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this._statusCode = statusCode;
  }

  public get statusCode() { return this._statusCode; }
}

export default HttpError;
