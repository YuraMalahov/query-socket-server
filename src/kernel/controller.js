"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_1 = require("../data-transformers/response");
var ControllerInterface = /** @class */ (function () {
    function ControllerInterface() {
    }
    ControllerInterface.prototype.handle = function (request) {
        return new response_1.Response();
    };
    return ControllerInterface;
}());
exports.ControllerInterface = ControllerInterface;
