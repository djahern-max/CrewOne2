const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/upload-csv", upload.single("file"), uploadController.uploadCsv);

module.exports = router;
