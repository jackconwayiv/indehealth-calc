"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8080;
// default route
app.get("/api", (_, res) => {
    res.send("Hello world!");
});
// operation routes
app.get("/api/add", (req, res) => {
    const { operandA, operandB } = req.body.params;
    res.send(operandA + operandB);
});
app.get("/api/subtract", (req, res) => {
    const { operandA, operandB } = req.body.params;
    res.send(operandA - operandB);
});
app.get("/api/multiply", (req, res) => {
    const { operandA, operandB } = req.body.params;
    res.send(operandA * operandB);
});
app.get("/api/divide", (req, res) => {
    const { operandA, operandB } = req.body.params;
    res.send(operandA / operandB);
});
// start the server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`InDeHealth Calculator listening on port ${port}...`);
});
//# sourceMappingURL=index.js.map