const productRouter = require("express").Router();
const {
  getAllProducts,
  getProductsByCategory,
  getProductById,
} = require("../controllers/productController");

//Get all products
productRouter.get("/", getAllProducts);

//Get all products by category
productRouter.get("/:category", getProductsByCategory);

//Get all products by ID
productRouter.get("/product/:productId", getProductById);

module.exports = productRouter;
