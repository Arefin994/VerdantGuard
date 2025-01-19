const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  image: {
    type: String, // Path or URL of the uploaded image
    required: true,
  },
  prediction: {
    type: String, // The disease prediction
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Prediction', predictionSchema);
