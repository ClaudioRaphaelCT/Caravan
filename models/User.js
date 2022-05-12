const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  locale: {
    type: DataTypes.STRING,
    required: true,
  },
  contact: {
    type: DataTypes.STRING,
    required: true,
  },
  item: {
    type: DataTypes.STRING,
    required: true,
  },
  quantity: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = User;
