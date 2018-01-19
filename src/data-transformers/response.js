"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Response = /** @class */ (function () {
    function Response() {
        this.body = new Object();
    }
    Response.prototype.addItem = function (fieldName, fieldValue) {
        this.body[fieldName] = fieldValue;
    };
    Response.prototype.getBody = function () {
        return this.body;
    };
    return Response;
}());
exports.Response = Response;
