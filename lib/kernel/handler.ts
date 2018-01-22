import { DataTransformer } from '../data-transformers/interfaces';
import { ControllerResolver } from "./resolver";

class RequestHandler {
  public constructor(private _dataTransformer: DataTransformer, private _controllerResolver: ControllerResolver)
  {
    
  }
  
  public handle(data: Buffer, callback: Function)
  {
    let request = this._dataTransformer.decode(data);
    let controller = this._controllerResolver.resolve(request);
    // async
    controller.handle(request, (error, response) => {
      let responseBody = response.getBody();
      let stringResponse = [];
      Object.keys(responseBody).forEach((key: string) => {
        stringResponse.push(key + "=" + responseBody[key]);
      });

      callback(null, stringResponse.join("&"));
    });
  }
}

export { RequestHandler }