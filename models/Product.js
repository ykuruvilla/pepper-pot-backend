const { newId } = require("../utils/helpers");
const productData = require("../data/products.json");

class Product {
  constructor(name, price, size, description, category, inStock) {
    this.id = getNewId();
    this.name = name;
    this.price = price;
    this.size = size;
    this.description = description;
    this.category = category;
    this.inStock = inStock;
  }

  static getAllProducts = () => {
    return productData;
  };

  static getProductsByCategory = (category) => {
    return this.getAllProducts().filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  };

  static getProductById = (id) => {
    return this.getAllProducts().find((product) => product.id === id);
  };
}

module.exports = Product;
