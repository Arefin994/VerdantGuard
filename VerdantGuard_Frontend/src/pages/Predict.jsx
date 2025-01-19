// src/pages/Predict.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

const Predict = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handlePredict = async () => {
    if (!image) {
      Swal.fire({
        icon: 'error',
        title: 'No image selected',
        text: 'Please upload an image to predict the plant disease.',
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const predictedDisease = response.data.prediction;
      setPrediction(predictedDisease);
      setLoading(false);

      Swal.fire({
        icon: 'success',
        title: 'Prediction Result',
        text: `The predicted disease is: ${predictedDisease}`,
      });

      const saveFormData = new FormData();
      saveFormData.append('prediction', predictedDisease);
      saveFormData.append('image', image);

      console.log('Data being sent to backend:', {
        prediction: predictedDisease,
        image: image.name,
      });

      await axios.post('http://localhost:3000/api/predictions/predictions', saveFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f7fafc',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          width: '100%',
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2d3748' }}>
          Predict Plant Disease
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#4a5568' }}>
          Upload an image of the plant leaf, and our AI model will predict the disease it might have.
        </Typography>

        <Box sx={{ marginBottom: 3 }}>
          <TextField
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            fullWidth
            inputProps={{ style: { cursor: 'pointer' } }}
            sx={{
              '& input[type="file"]': { cursor: 'pointer' },
              backgroundColor: '#ffffff',
              borderRadius: 1,
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handlePredict}
          disabled={loading}
          fullWidth
          sx={{
            padding: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Predict Disease'}
        </Button>

        {prediction && (
          <Card
            sx={{
              marginTop: 4,
              padding: 2,
              backgroundColor: '#edf2f7',
              borderRadius: 2,
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#2d3748',
                  fontWeight: 'bold',
                  marginBottom: 1,
                }}
              >
                Prediction Result
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a5568' }}>
                {prediction}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Paper>

      {image && (
        <Card
          sx={{
            marginTop: 4,
            maxWidth: 600,
            width: '100%',
            borderRadius: 2,
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={URL.createObjectURL(image)}
            alt="Uploaded Plant Leaf"
            sx={{
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0',
            }}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: '#4a5568' }}>
              Uploaded Image Preview
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Predict;
