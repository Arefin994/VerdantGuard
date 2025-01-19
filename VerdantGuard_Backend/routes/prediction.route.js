const express = require('express');
const router = express.Router();
const { savePrediction, getPredictions, upload } = require('../controllers/prediction.controller');

// Route to save a prediction (POST request with file upload)
router.post('/predictions', upload.single('image'), savePrediction);

// Route to get all predictions (GET request)
router.get('/predictions', getPredictions);

module.exports = router;
