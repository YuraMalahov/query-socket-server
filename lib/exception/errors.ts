import { ErrorCodes } from '../config/errors'

class Exception
{
  public stack;
  
  constructor (private message: string, private _code: ErrorCodes) {
    Error.captureStackTrace(this);
  }
  
  public getCode(): ErrorCodes
  {
    return this._code;
  }
  
  public getMessage(): string
  {
    return this.message;
  }
}

export { Exception }