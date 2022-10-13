const productRouter = require("express").Router();
const productController = require("../controllers/productController");

//Get all products
productRouter.get("/", productController.getAllProducts);

//Get all products by category
productRouter.get("/:category", productController.getProductsByCategory);

//Get all products by ID
productRouter.get("/:productId", productController.getProductById);

module.exports = productRouter;
