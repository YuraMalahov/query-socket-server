import { DataTransformer } from '../data-transformers/interfaces';
import { ControllerResolver } from "./resolver";

class RequestHandler {
  public constructor(private _dataTransformer: DataTransformer, private _controllerResolver: ControllerResolver)
  {
    
  }
  
  public handle(data: Buffer): any
  {
    let request = this._dataTransformer.decode(data);
    let controller = this._controllerResolver.resolve(request);
    let response = controller.handle(request).getBody();
    let stringResponse = [];
    Object.keys(response).forEach((key: string) => {
      stringResponse.push(key + "=" + response[key]);
    });
    return stringResponse.join("&");
  }
}

export { RequestHandler }