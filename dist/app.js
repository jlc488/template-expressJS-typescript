"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routes = new routes_1.default();
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.routes.setRouter(express.Router());
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map