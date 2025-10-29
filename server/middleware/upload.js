const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, "../uploads"); // relative to middleware folder
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up storage destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // folder where images are stored
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.fieldname + path.extname(file.originalname)
    );
  },
});

// File filter (optional: only images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error("Only image files are allowed"));
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
