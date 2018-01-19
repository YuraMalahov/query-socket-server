"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var os = require("os");
var container_1 = require("./kernel/container");
var app = container_1.bottle.container.App;
var server = net.createServer(function (socket) {
    app.listener(socket);
});
var networkInterfaces = os.networkInterfaces();
var address = Object.keys(networkInterfaces)
    .map(function (propName) { return networkInterfaces[propName].filter(function (x) { return x.family === 'IPv4' && !x.internal; })[0]; })
    .filter(function (x) { return x; })[0].address;
server.listen({
    "host": address,
    "port": 9005,
    "exclusive": true
}, function () {
    console.log('opened server on', server.address());
});
