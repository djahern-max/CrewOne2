const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const db = require("../config/db");

exports.uploadCsv = (req, res) => {
  const tableName = req.body.tableName; // Get the table name from the request body
  const filePath = path.join(__dirname, "../uploads", req.file.filename);
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      if (results.length === 0) {
        return res.status(400).send("CSV file is empty");
      }

      // Dynamically construct query based on the first row (keys) and table name
      const columns = Object.keys(results[0]);
      const query = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES ?`;
      const values = results.map((row) => columns.map((column) => row[column]));

      db.query(query, [values], (err) => {
        if (err) {
          console.error("Error inserting data:", err);
          return res.status(500).send("Error processing CSV file");
        }
        res.send("CSV file processed and data inserted into database");
      });

      // Delete the file after processing
      fs.unlinkSync(filePath);
    });
};
