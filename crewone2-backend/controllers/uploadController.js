const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const db = require("../config/db");

exports.uploadCsv = (req, res) => {
  const filePath = path.join(__dirname, "../uploads", req.file.filename);
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // Assuming CSV has columns: Item_Code and Description
      const query = "INSERT INTO materials (Item_Code, Description) VALUES ?";
      const values = results.map((row) => [row.Item_Code, row.Description]);

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
