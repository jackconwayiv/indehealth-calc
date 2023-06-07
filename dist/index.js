"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
// default route
app.get("/api", (_, res) => {
    res.send("indeHealth calculator API ready to calculate!");
});
// operation routes
app.post("/api/calculate", (req, res) => {
    const { operandA, operandB, operator } = req.body.params;
    const opA = parseInt(operandA, 10);
    const opB = parseInt(operandB, 10);
    if (operator === "+") {
        res.send((opA + opB).toString());
    }
    if (operator === "-") {
        res.send((opA - opB).toString());
    }
    if (operator === "*") {
        res.send((opA * opB).toString());
    }
    if (operator === "/") {
        res.send((opA / opB).toString());
    }
});
// start the server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`indeHealth Calculator listening on port ${port}...`);
});
//# sourceMappingURL=index.js.map