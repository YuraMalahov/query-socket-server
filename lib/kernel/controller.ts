import { Request } from "../data-transformers/request";
import { Response } from "../data-transformers/response";

class ControllerInterface {
  public handle(request: Request, callback: Function) {}
}

export { ControllerInterface }