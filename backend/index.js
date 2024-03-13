const express = require("express");
const app = express();
const cors = require("cors");
const Activities = require("./db");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("port at 3000");
});
