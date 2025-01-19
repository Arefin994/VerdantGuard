// src/pages/Graphs.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Graphs = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Visualize Graphs
      </Typography>
      <Typography variant="body1">
        View interactive graphs that showcase climate data and predictions for a better understanding of trends.
      </Typography>
    </Box>
  );
};

export default Graphs;
