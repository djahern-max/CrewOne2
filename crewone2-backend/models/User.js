const db = require("../config/db");

const User = {
  create: (data, callback) => {
    const query =
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [data.username, data.email, data.password, data.role],
      (err, result) => {
        if (err) {
          console.error("Error creating user:", err);
        }
        callback(err, result);
      }
    );
  },
  findByUsername: (username, callback) => {
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, results) => {
      if (err) {
        console.error("Error finding user by username:", err);
        return callback(err, null);
      }
      if (results.length === 0) {
        console.log("User not found by username:", username);
        return callback(null, null);
      }
      console.log("Query results for username:", username, results); // Debugging log
      callback(null, results[0]);
    });
  },
};

module.exports = User;
