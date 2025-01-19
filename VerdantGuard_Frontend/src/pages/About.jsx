// src/pages/About.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        About VerdantGuard
      </Typography>
      <Typography variant="body1">
        VerdantGuard is your one-stop platform for monitoring, predicting, and visualizing climate data trends. 
        Join us in making a positive impact on the environment!
      </Typography>
    </Box>
  );
};

export default About;
