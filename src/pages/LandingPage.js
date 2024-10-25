
import React from 'react';
import { Grid, Typography, Container, Button, Box } from '@mui/material';


function LandingPage() {
  return (
    <>
   
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to ST <b>Sales Operations</b>
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Discover the latest updates on our business, browse the news, and place your orders seamlessly on any device.
          </Typography>
          <Button variant="contained" color="primary" href="/orders">
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Placeholder for an image or graphic */}
          <Box
            component="img"
            src="https://img1.wsimg.com/isteam/ip/ed743e5a-1ed4-486f-b318-0d9cefbbab3e/IMG_2972%20Large.jpeg/:/rs=w:1160,h:763"
            alt="Sales Site Hero"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mt: 8 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Easy Ordering
          </Typography>
          <Typography variant="body1">
            Use our modern sales order process to quickly place and track your orders, fully optimized for mobile and desktop.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body1">
            Check out the latest news and business updates from our team. Stay informed and ahead of the curve.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            24/7 Support
          </Typography>
          <Typography variant="body1">
            We're here to assist you any time. Reach out to our support team for help with orders or any other inquiries.
          </Typography>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box
        sx={{
          mt: 8,
          py: 5,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to Place Your Order?
        </Typography>
        <Typography variant="body1" paragraph>
          Click below to start browsing and place your first order with us!
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="/orders">
          Start Now
        </Button>
      </Box>
    </Container>
    </>
  );
}

export default LandingPage;
