// models/orderDetail.js
const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Product = require("./product");
const Order = require("./order");
const OrderDetail = sequelize.define("OrderDetail", {
  orderDetailID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: "orderID",
    }
  },
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: Product,
      key: "productID",
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Relasi Dengan Tabel Order
OrderDetail.belongsTo(Order, {foreignKey: "orderID"});
Order.hasMany(OrderDetail, {foreignKey: "orderID"});

// Relasi Dengan Tabel Product
OrderDetail.belongsTo(Product, {foreignKey: "productID"});
Product.hasMany(OrderDetail, {foreignKey: "productID"});
module.exports = OrderDetail;
