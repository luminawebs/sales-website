// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';




function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'grey' }}>
      <Toolbar>
        {/* Use an absolute path to reference the image */}
        <Box component="img" src="https://github.com/luminawebs/sales-website/blob/master/images/stlogo.png?raw=true" alt="Logo" sx={{ width: 120,  mr: 2 }} />
        <Typography variant="h2" sx={{ flexGrow: 1, fontSize: '1rem', fontWeight:'light' }}>
          Sales Site
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" component={Link} to="/sales-website">
            Home
          </Button>
          <Button color="inherit" component={Link} to="sales-website/news">
            News
          </Button>
          <Button color="inherit" component={Link} to="sales-website/order-form">
            Orders
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
