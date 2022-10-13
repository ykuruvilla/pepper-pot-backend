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

  static getProductData = () => {
    return productData;
  };

  static getProductsByCategory = (category) => {
    return this.getProductData().filter(
      (product) => product.category === category
    );
  };

  static getProductById = (id) => {
    return this.getProductData().find((product) => product.id === id);
  };
}
