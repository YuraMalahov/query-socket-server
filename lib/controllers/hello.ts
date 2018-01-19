import { ControllerInterface } from "../kernel/controller";
import { Request } from "../data-transformers/request";
import { Response } from "../data-transformers/response";

class HelloController extends ControllerInterface {
  public handle(request: Request): Response {
    let response = new Response();
    var waitTill = new Date(new Date().getTime() + 5 * 1000);
    while(waitTill > new Date()){}
    response.addItem("shit", "happens");
    return response;
  }
}

export { HelloController }