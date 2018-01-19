"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bottle = require("bottlejs");
var config_1 = require("../config/config");
var bottle = new Bottle();
exports.bottle = bottle;
Object.keys(config_1.Container).forEach(function (serviceName) {
    var service = config_1.Container[serviceName];
    if (!service.hasOwnProperty("class")) {
        bottle.service(serviceName, service);
        return;
    }
    if (!service.hasOwnProperty("dependencies")) {
        bottle.service(serviceName, service["class"]);
        return;
    }
    var args = [serviceName, service["class"]];
    bottle.factory(serviceName, function (container) {
        var dependencies = [];
        service["dependencies"].forEach(function (dependencyName) {
            if (dependencyName == "Container") {
                dependencies.push(container);
                return;
            }
            dependencies.push(container[dependencyName]);
        });
        return new ((_a = service["class"]).bind.apply(_a, [void 0].concat(dependencies)))();
        var _a;
    });
});
