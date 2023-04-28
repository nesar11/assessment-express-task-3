const express = require('express');
const app = express();
const productRoutes = express.Router();
// const extractFile = require('../middleware/file')

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

productRoutes.post(
  '/upload',
  upload.single('ProductImage'),
  async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    try {
      res.send({ status: 200, success: true, msg: 'success' });
    } catch (error) {
      res.send({ status: 400, success: false, msg: 'success' });
    }
  }
);

module.exports = productRoutes;
