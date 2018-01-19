"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = {
    Client: {
        class: require("../socket/client.js").Client
    },
    Broadcast: {
        class: require("../socket/broadcast.js").Broadcast, dependencies: ["Client"]
    },
    App: {
        class: require("../kernel/app.js").App, dependencies: ["Client", "Broadcast", "RequestHandler"]
    },
    QueryTransformer: {
        class: require("../data-transformers/query.js").QueryTransformer
    },
    ControllerResolver: {
        class: require("../kernel/resolver.js").ControllerResolver, dependencies: ["Container"]
    },
    RequestHandler: {
        class: require("../kernel/handler.js").RequestHandler, dependencies: ["QueryTransformer", "ControllerResolver"]
    },
    Hello: {
        class: require("../controllers/hello.js").HelloController
    },
    Test: {
        class: require("../controllers/test.js").TestClass
    },
    rootDir: require('path').dirname(require.main.filename)
};
exports.Container = Container;
