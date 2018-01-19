"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(method, data) {
        this.method = method;
        this.data = data;
        this.attributes = new Object();
    }
    Request.prototype.getMethod = function () {
        return this.method;
    };
    Request.prototype.getData = function () {
        return this.data;
    };
    Request.prototype.getAttributes = function () {
        return this.attributes;
    };
    return Request;
}());
exports.Request = Request;
