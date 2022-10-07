require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { res, req } = require("express");

const PORT = process.env.port || 8080;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<h1> Server Is Up and Running!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
