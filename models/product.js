// models/product.js
const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Category = require("./category");
const Supplier = require("./supplier");
const Product = sequelize.define(
  "Product",
  {
    productID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Supplier,
        key: "supplierID",
      },
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "categoryID",
      },
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Relasi Dengan Tabel Category
Product.belongsTo(Category, { foreignKey: "categoryID" });
Category.hasMany(Product, { foreignKey: "categoryID" });

// Relasi Dengan Tabel Supplier
Product.belongsTo(Supplier, { foreignKey: "supplierID" });
Supplier.hasMany(Product, { foreignKey: "supplierID" });

module.exports = Product;
