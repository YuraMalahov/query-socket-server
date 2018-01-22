import { ControllerInterface } from "../kernel/controller";
import { Request } from "../data-transformers/request";
import { Response } from "../data-transformers/response";
import { setTimeout } from "timers";

class HelloController extends ControllerInterface {
  public handle(request: Request, callback: Function) {
    let response = new Response();
    
    // wait 5 sec
    setTimeout(()=> {
      response.addItem("shit", "happens");
      callback(null, response);
    }, 5000);    
  }
}

export { HelloController }