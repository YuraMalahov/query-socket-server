"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../exception/errors");
var App = /** @class */ (function () {
    function App(_clientBag, _broadcast, _requestHandler) {
        this._clientBag = _clientBag;
        this._broadcast = _broadcast;
        this._requestHandler = _requestHandler;
    }
    App.prototype.listener = function (socket) {
        var _this = this;
        this._clientBag.addClient(socket);
        // Send a nice welcome message and announce
        socket.write("Welcome " + socket.remoteAddress + " " + socket.remotePort + "\n");
        this._broadcast.send(socket.remoteAddress + " joined the chat\n", socket);
        // Handle incoming messages from clients.
        socket.on('data', function (data) {
            _this._broadcast.send(socket.remoteAddress + "> " + data, socket);
            try {
                var response = _this._requestHandler.handle(data);
                socket.write(response.toString());
                socket.write("\n\r");
            }
            catch (exception) {
                if (exception instanceof errors_1.Exception) {
                    socket.write(exception.getCode().toString());
                }
                console.error(exception);
            }
        });
        // Remove the client from the list when it leaves
        socket.on('end', function () {
            _this._clientBag.removeClient(socket);
            _this._broadcast.send(socket.remoteAddress + " left the chat.\n", socket);
        });
        socket.pipe(socket);
    };
    return App;
}());
exports.App = App;
