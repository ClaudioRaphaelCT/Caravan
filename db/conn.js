const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("caravan", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
