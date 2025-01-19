import React, { Component } from 'react';
import axios from 'axios';

export class Predicted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predictions: [], // To store fetched predictions
      loading: true, // Loading state
      error: null, // To handle errors
    };
  }

  componentDidMount() {
    // Fetch predictions when the component is mounted
    this.fetchPredictions();
  }

  async fetchPredictions() {
    try {
      const response = await axios.get('http://localhost:3000/api/predictions/predictions');
      const { data } = response.data; // Accessing 'data' field from the response
      this.setState({ predictions: data, loading: false });
    } catch (error) {
      console.error('Error fetching predictions:', error);
      this.setState({ error: 'Failed to fetch predictions.', loading: false });
    }
  }

  render() {
    const { predictions, loading, error } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '88%', 
          margin: '0 auto', 
        }}
      >
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px' }}>
          <h1>Predictions</h1>

          {/* Display loading state */}
          {loading && <p>Loading predictions...</p>}

          {/* Display error message if any */}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Display predictions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {predictions.map((prediction) => (
              <div
                key={prediction._id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '10px',
                  width: '250px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`http://localhost:3000${prediction.image}`} 
                  alt={prediction.prediction}
                  style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }}
                />
                <h3
                  style={{
                    fontSize: '16px',
                    marginTop: '10px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  title={prediction.prediction} 
                >
                  {prediction.prediction}
                </h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Created At: {new Date(prediction.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Predicted;
