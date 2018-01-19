import { Request } from '../data-transformers/request';
import { Exception } from '../exception/errors';
import { ErrorCodes } from '../config/errors';
import { ControllerInterface } from "./controller";

class ControllerResolver {
  public constructor(private _container: any)
  {
    
  }
  public resolve(request: Request): ControllerInterface
  {
    let method = request.getMethod();
    if (!this._container.hasOwnProperty(method.toString())) {
       throw new Exception("Invalid method", ErrorCodes.INVALID_METHOD);
    }
    let controller = this._container[method.toString()];
    
    if (!(controller instanceof ControllerInterface)) {
      throw new Exception("Invalid controller", ErrorCodes.INVALID_CONTROLLER);
    }
    
    return controller;
  }
}

export { ControllerResolver }