import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ mt: 5, py: 3, backgroundColor: 'primary.main', color: 'primary.contrastText', textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Sales Site. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;