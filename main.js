const express = require("express");
const bodyParser = require("body-parser");

const port = 8000;

const app = express();

app.post("/sign-in", bodyParser.json(), (req, res) => {
  const body = req.body;
  console.log(body);
  // Processing sign in (4s)
  res.json({ message: body["username"] });
});

app.post("/sign-up", bodyParser.json(), (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({ message: body["username"] });
});

app.listen(port, () => {
  console.log(`Server is ready on port ${port}`);
});
