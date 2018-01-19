"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("../kernel/controller");
var response_1 = require("../data-transformers/response");
var TestClass = /** @class */ (function (_super) {
    __extends(TestClass, _super);
    function TestClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestClass.prototype.handle = function (request) {
        var response = new response_1.Response();
        response.addItem("test", "test");
        return response;
    };
    return TestClass;
}(controller_1.ControllerInterface));
exports.TestClass = TestClass;
