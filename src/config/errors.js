"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["INPUT_PARAMS"] = 1] = "INPUT_PARAMS";
    ErrorCodes[ErrorCodes["QUERY_FORMAT"] = 2] = "QUERY_FORMAT";
    ErrorCodes[ErrorCodes["EMPTY_METHOD"] = 3] = "EMPTY_METHOD";
    ErrorCodes[ErrorCodes["INVALID_METHOD"] = 4] = "INVALID_METHOD";
    ErrorCodes[ErrorCodes["INVALID_CONTROLLER"] = 5] = "INVALID_CONTROLLER";
})(ErrorCodes || (ErrorCodes = {}));
exports.ErrorCodes = ErrorCodes;
