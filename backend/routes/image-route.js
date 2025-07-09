const express = require('express');
const router = express.Router();

const {
  upload,
  uploadImage,
  uploadMultipleImages,
} = require('../controllers/image-upload-controller');

router.post('/', upload.single('avatar'), uploadImage);

router.post('/multiple', upload.array('images', 10), uploadMultipleImages);

module.exports = router;
