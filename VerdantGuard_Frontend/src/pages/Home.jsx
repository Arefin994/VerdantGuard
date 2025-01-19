import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Home = () => {
  // Fade-in animation for sections
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  const animation1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 800 },
  });

  const animation2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 800 },
  });

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#f5f5f5', color: '#333' }}>
      {/* Carousel Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', // Ensures full width for centering
          margin: '0 auto', // Centers the div itself if required
        }}
      >
        <AwesomeSlider
          bullets={false}
          style={{
            height: '60vh',
            width: '90%', // Adjust this to fit the screen nicely
          }}
        >
          <div>
            <img
              src="1_Banner.png"
              alt="Banner 1"
              style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="2_Banner.png"
              alt="Banner 1"
              style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="3_Banner.png"
              alt="Banner 1"
              style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
            />
          </div>
        </AwesomeSlider>
      </div>


      {/* What the Website Does Section */}
      <animated.div ref={ref1} style={animation1}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '40px 20px',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            What We Do
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Card sx={{ width: 300, padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Precision Agriculture
              </Typography>
              <Typography>Real-time data-driven crop analysis to boost yields.</Typography>
            </Card>
            <Card sx={{ width: 300, padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Environmental Monitoring
              </Typography>
              <Typography>Track and analyze environmental health seamlessly.</Typography>
            </Card>
            <Card sx={{ width: 300, padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Sustainability Insights
              </Typography>
              <Typography>Promoting sustainable farming practices.</Typography>
            </Card>
            <Card sx={{ width: 300, padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Custom Solutions
              </Typography>
              <Typography>Tailored tools to meet the unique needs of your farm.</Typography>
            </Card>
          </Box>
        </Box>
      </animated.div>

      {/* FAQ / Why Us Section */}
      <animated.div ref={ref2} style={animation2}>
        <Box
          sx={{
            backgroundColor: '#e8f5e9',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '40px' }}>
            Our mission is to empower farmers and protect the environment with the most advanced technology.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Card sx={{ width: '80%', padding: '20px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                How do you use VerdantGuard?
              </Typography>
              <Typography>
                Simply sign up, upload your data, and let our tools provide insights and predictions.
              </Typography>
            </Card>
            <Card sx={{ width: '80%', padding: '20px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                What makes us unique?
              </Typography>
              <Typography>We blend cutting-edge AI with deep agricultural expertise.</Typography>
            </Card>
          </Box>
        </Box>
      </animated.div>
    </div>
  );
};

export default Home;