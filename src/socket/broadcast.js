"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Broadcast = /** @class */ (function () {
    function Broadcast(_client) {
        this._client = _client;
    }
    Broadcast.prototype.send = function (data, sender) {
        this._client.getClientsExceptOne(sender).forEach(function (client) {
            client.write(data);
        });
        process.stdout.write(data);
    };
    return Broadcast;
}());
exports.Broadcast = Broadcast;
