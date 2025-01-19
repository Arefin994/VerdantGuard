const Prediction = require('../models/prediction.model');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Uploads directory created.');
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save files in 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Controller for saving prediction
const savePrediction = async (req, res) => {
    try {
      console.log('Request Body:', req.body);
      console.log('Uploaded File:', req.file);
  
      const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
      const { prediction } = req.body;
  
      if (!imagePath || !prediction) {
        return res.status(400).json({ message: 'Image and prediction are required.' });
      }
  
      const newPrediction = new Prediction({ image: imagePath, prediction });
      await newPrediction.save();
  
      res.status(201).json({
        message: 'Prediction saved successfully!',
        data: newPrediction,
      });
    } catch (error) {
      console.error('Error in savePrediction:', error.message);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };
  

// Controller for getting all predictions
const getPredictions = async (req, res) => {
  try {
    const predictions = await Prediction.find();

    if (predictions.length === 0) {
      return res.status(404).json({ message: 'No predictions found.' });
    }

    res.status(200).json({
      message: 'Predictions retrieved successfully!',
      data: predictions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { savePrediction, getPredictions, upload };
