"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../exception/errors");
var errors_2 = require("../config/errors");
var controller_1 = require("./controller");
var ControllerResolver = /** @class */ (function () {
    function ControllerResolver(_container) {
        this._container = _container;
    }
    ControllerResolver.prototype.resolve = function (request) {
        var method = request.getMethod();
        if (!this._container.hasOwnProperty(method.toString())) {
            throw new errors_1.Exception("Invalid method", errors_2.ErrorCodes.INVALID_METHOD);
        }
        var controller = this._container[method.toString()];
        if (!(controller instanceof controller_1.ControllerInterface)) {
            throw new errors_1.Exception("Invalid controller", errors_2.ErrorCodes.INVALID_CONTROLLER);
        }
        return controller;
    };
    return ControllerResolver;
}());
exports.ControllerResolver = ControllerResolver;
