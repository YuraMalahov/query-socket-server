"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exception = /** @class */ (function () {
    function Exception(message, _code) {
        this.message = message;
        this._code = _code;
        Error.captureStackTrace(this);
    }
    Exception.prototype.getCode = function () {
        return this._code;
    };
    Exception.prototype.getMessage = function () {
        return this.message;
    };
    return Exception;
}());
exports.Exception = Exception;
