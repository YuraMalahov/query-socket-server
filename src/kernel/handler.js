"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestHandler = /** @class */ (function () {
    function RequestHandler(_dataTransformer, _controllerResolver) {
        this._dataTransformer = _dataTransformer;
        this._controllerResolver = _controllerResolver;
    }
    RequestHandler.prototype.handle = function (data) {
        var request = this._dataTransformer.decode(data);
        var controller = this._controllerResolver.resolve(request);
        var response = controller.handle(request).getBody();
        var stringResponse = [];
        Object.keys(response).forEach(function (key) {
            stringResponse.push(key + "=" + response[key]);
        });
        return stringResponse.join("&");
    };
    return RequestHandler;
}());
exports.RequestHandler = RequestHandler;
