"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var errors_1 = require("../config/errors");
var errors_2 = require("../exception/errors");
var QueryTransformer = /** @class */ (function () {
    function QueryTransformer() {
    }
    QueryTransformer.prototype.decode = function (data) {
        if (data.length < 1) {
            throw new errors_2.Exception("Invalid input params", errors_1.ErrorCodes.INPUT_PARAMS);
        }
        var query = data.toString("ascii").trim();
        var args = query.split("&");
        if (args.length < 1) {
            throw new errors_2.Exception("Invalid query format: '" + query.toString() + "'", errors_1.ErrorCodes.QUERY_FORMAT);
        }
        var params = new Object();
        var method = new String();
        args.forEach(function (arg) {
            var _a = arg.split("="), paramName = _a[0], paramValue = _a[1];
            if (paramName === "method") {
                method = new String(paramValue);
                return;
            }
            if (!paramName.endsWith("[]")) {
                params[paramName] = paramValue;
                return;
            }
            paramName = paramName.slice(0, -2);
            if (!params.hasOwnProperty(paramName)) {
                params[paramName] = new Array();
            }
            params[paramName].push(paramValue);
        });
        if (method.length < 1) {
            throw new errors_2.Exception("Empty method is not allowed", errors_1.ErrorCodes.EMPTY_METHOD);
        }
        return new request_1.Request(method, params);
    };
    QueryTransformer.prototype.encode = function (data) {
        return data.getBody().toString();
    };
    return QueryTransformer;
}());
exports.QueryTransformer = QueryTransformer;
