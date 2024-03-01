const express = require("express");
const PORT = 3000;
const { Sequelize } = require("sequelize");
const routerUsers = require("./routes/users");
const cors = require("cors");
const app = express();

const sequelize = new Sequelize({
  username: "root",
  database: "toko-sepatu",
  dialect: "mysql",
  password: "regangacor123",
  host: "127.0.0.1",
});

app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["POST", "GET", "PATCH", "PUT"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the vault");
});

app.use(routerUsers);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is connected");
  } catch (error) {
    console.error("Failed to connect: ", error);
  }
};
connection();

app.listen(PORT, () => {
  console.log(`Server is listening on server ${PORT}`);
});
