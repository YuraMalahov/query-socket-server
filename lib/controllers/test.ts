import { ControllerInterface } from "../kernel/controller";
import { Request } from "../data-transformers/request";
import { Response } from "../data-transformers/response";

class TestClass extends ControllerInterface {
  public handle(request: Request): Response {
    let response = new Response();
    response.addItem("test", "test");
    return response;
  }
}

export { TestClass }