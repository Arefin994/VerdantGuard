const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const prodRoute = require('./routes/prod.route');
const predictionRoute = require('./routes/prediction.route');
const app = express();
const cors = require('cors');

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('Uploads folder created!');
}
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allowed HTTP methods
    credentials: true // If using cookies/auth headers
  }));
// Static files for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get('/', (req, res) => {
  res.send('Hello From Node');
});
app.use('/api/prod', prodRoute);
app.use('/api/predictions', predictionRoute);

// MongoDB Connection
const MONGO_URI = "mongodb+srv://arefinamin994:ghA10XYZ1yHmLQ1v@cluster0.857uo.mongodb.net/Backend-Test?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('MongoDB Connection Failed!', err.message);
  });
