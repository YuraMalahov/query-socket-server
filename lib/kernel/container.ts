import * as Bottle from "bottlejs";
import { Container } from "../config/config";

var bottle = new Bottle();

Object.keys(Container).forEach((serviceName) => {
  let service = Container[serviceName];
  if (!service.hasOwnProperty("class")) {
    bottle.service(serviceName, service);
    return;
  }
  if (!service.hasOwnProperty("dependencies")) {
      bottle.service(serviceName, service["class"]);
      return;
  }
  let args = [serviceName, service["class"]];
  
  bottle.factory(serviceName, (container: any) => {
    let dependencies = [];
    service["dependencies"].forEach((dependencyName: string) => {
      if (dependencyName == "Container") {
        dependencies.push(container);
        return;
      }
      dependencies.push(container[dependencyName]);
    });
    
    return new service["class"](...dependencies);
  });
});

export { bottle };