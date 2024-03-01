const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email sudah terdaftar" });
    }

    const salting = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salting);

    const data = { name, email, password: hashedPassword };
    await User.create(data);

    res
      .status(201)
      .json({ success: true, message: "User berhasil ditambah!", user: data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server Problem!" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found!" });
    }

    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong Password!" });
    }
    res.status(201).json({ success: true, message: "Login berhasil!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Internal Server Problem" });
  }
};

module.exports = { getAllUsers, registerUser, loginUser };
