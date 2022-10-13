require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRouter");

const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
