const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.register = (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    const userData = { username, email, password: hash };
    User.create(userData, (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send("User registered successfully");
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, users) => {
    if (err) return res.status(500).send(err);
    if (users.length === 0) return res.status(404).send("User not found");

    const user = users[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) return res.status(401).send("Invalid credentials");

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    });
  });
};
