const sequelize = require("sequelize");
// //(nomeBanco, usuario, senha )
const database = new sequelize("ApiNode", "sa", "123456", {
  dialect: "mssql",
  host: "localhost",
  port: 1433,
});

// //Se as tabelas não existirem, essa linha cria
database.sync();

module.exports = database;
