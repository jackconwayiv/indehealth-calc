import express from "express";
const app = express();
const port = 8080;

// default route
app.get("/api", (_, res) => {
  res.send("Hello world!");
});

// operation routes
app.get("/api/add", (req, res) => {
  const { operandA, operandB } = req.body.params;
  console.log(operandA, operandB);
  res.send(parseInt(operandA) + parseInt(operandB));
});

app.get("/api/subtract", (req, res) => {
  const { operandA, operandB } = req.body.params;
  res.send(parseInt(operandA) - parseInt(operandB));
});

app.get("/api/multiply", (req, res) => {
  const { operandA, operandB } = req.body.params;
  res.send(parseInt(operandA) * parseInt(operandB));
});

app.get("/api/divide", (req, res) => {
  const { operandA, operandB } = req.body.params;
  res.send(parseInt(operandA) / parseInt(operandB));
});

// start the server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`InDeHealth Calculator listening on port ${port}...`);
});
