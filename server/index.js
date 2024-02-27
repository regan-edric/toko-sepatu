const express = require("express");
const PORT = 3000;
const { Sequelize } = require("sequelize");
const app = express();

const sequelize = new Sequelize({
  username: "root",
  database: "toko-sepatu",
  dialect: "mysql",
  password: "regangacor123",
  host: "127.0.0.1",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is connected");
  } catch (error) {
    console.error("Failed to connect: ", error);
  }
};
connection();

app.listen(() => {
  console.log(`Server is listening on server ${PORT}`);
});
