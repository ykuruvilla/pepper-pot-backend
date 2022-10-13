const Product = require("../models/Product");

const getAllProducts = (req, res) => {
  const allProducts = Product.getAllProducts();
  allProducts
    ? res.status(200).json(allProducts)
    : res.status(500).json({ ErrorMessage: error.message });
};

const getProductsByCategory = (req, res) => {
  const requestedCategory = req.params.category;
  const categoryFound = Product.getProductsByCategory(requestedCategory);

  categoryFound
    ? res.status(200).json(categoryFound)
    : res.status(404).json({
        errorMessage: `Could not find products with category ${requestedCategory}`,
      });
};

const getProductById = (req, res) => {
  const requestedProduct = Number(req.params.productId);
  console.log(requestedProduct);
  const productFound = Product.getProductById(requestedProduct);

  productFound
    ? res.status(200).json(productFound)
    : res.status(404).json({
        errorMessage: `Could not find a product with id ${requestedProduct}`,
      });
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProductById,
};
