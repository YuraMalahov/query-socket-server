"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    function Client() {
        this.clients = new Array();
    }
    Client.prototype.addClient = function (client) {
        if (this.clients.indexOf(client) != -1) {
            return false;
        }
        this.clients.push(client);
        return true;
    };
    Client.prototype.removeClient = function (client) {
        this.clients.splice(this.clients.indexOf(client), 1);
        return this;
    };
    Client.prototype.removeClients = function () {
        this.clients = new Array();
        return this;
    };
    Client.prototype.getClients = function () {
        return this.clients;
    };
    Client.prototype.getClientsExceptOne = function (exceptClient) {
        var clients = new Array();
        this.clients.forEach(function (client) {
            if (client === exceptClient) {
                return;
            }
            clients.push(client);
        });
        return clients;
    };
    return Client;
}());
exports.Client = Client;
