const cloudinary = require('../config/cloudinary');
const multer = require('multer');
const streamifier = require('streamifier');
const path = require('path');

// Setup in-memory file storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Handle single image upload
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded!' });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'e-commerce',
        public_id: path.parse(req.file.originalname).name,
        use_filename: true,
        unique_filename: false,
      },
      (error, result) => {
        if (error) {
          return res.status(500).json({
            error: 'Image upload failed!',
            details: error,
          });
        }

        // ✅ Return imageUrl as expected by frontend
        return res.status(200).json({
          message: 'Image uploaded successfully!',
          imageUrl: result.secure_url,
        });
      }
    );

    // Pipe buffer to Cloudinary stream
    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// Optional: leave this stub for multiple images if needed later
const uploadMultipleImages = (req, res) => {
  res.status(501).json({ message: 'Multiple image upload not implemented.' });
};

module.exports = {
  upload,
  uploadImage,
  uploadMultipleImages,
};
