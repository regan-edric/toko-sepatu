const express = require("express");
const { getAllUsers, registerUser } = require("../controllers.js/users");
const router = express.Router();

router.get("/users", getAllUsers);

router.post("/register", registerUser);

router.get("/register", (req, res) => {
  res.send();
});

router.post("/login");

router.get("/login", (req, res) => {
  res.send("Halo, ini login");
});

module.exports = router;
