import { Request } from "../data-transformers/request";
import { Response } from "../data-transformers/response";

class ControllerInterface {
  public handle(request: Request): Response {
    return new Response();
  }
}

export { ControllerInterface }