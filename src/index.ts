import express from "express";
const app = express();
const port = 8080;

app.use(express.json());

// default route
app.get("/api", (_, res) => {
  res.send("indeHealth calculator API ready to calculate!");
});

// operation routes
app.post("/api/calculate", (req, res) => {
  try {
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
  } catch (error) {
    res.send(`Could not complete calculation: ${error}`);
  }
});

// start the server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`indeHealth Calculator listening on port ${port}...`);
});
