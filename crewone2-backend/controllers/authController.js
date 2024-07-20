const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.register = (req, res) => {
  const { username, email, password, role } = req.body; // Include role in request body
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).send(err);
    }
    const userData = { username, email, password: hash, role };
    console.log("Registering user:", userData);
    User.create(userData, (err, result) => {
      if (err) {
        console.error("Error registering user:", err);
        return res.status(500).send(err);
      }
      res.status(201).send("User registered successfully");
    });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  console.log("Attempting to log in user:", username);
  User.findByUsername(username, (err, user) => {
    if (err) {
      console.error("Error finding user:", err);
      return res.status(500).send(err);
    }
    if (!user) {
      console.log("User not found:", username);
      return res.status(404).send("User not found");
    }

    console.log("User found:", user);
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).send(err);
      }
      if (!isMatch) {
        console.log("Invalid credentials for user:", username);
        return res.status(401).send("Invalid credentials");
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json({ token, role: user.role }); // Include role in response
    });
  });
};
