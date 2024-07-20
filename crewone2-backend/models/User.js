const db = require("../config/db");

const User = {
  create: (data, callback) => {
    const query =
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [data.username, data.email, data.password, data.role],
      callback
    );
  },
  findByEmail: (email, callback) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], callback);
  },
  findByUsername: (username, callback) => {
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], callback);
  },
};

module.exports = User;
