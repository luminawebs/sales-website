// src/pages/OrderForm.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';

function OrderForm() {
  const [formValues, setFormValues] = useState({
    productName: '',
    quantity: '',
    price: '',
    originalPrice: '',
  });
  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Check mandatory fields
    if (!formValues.productName) {
      tempErrors.productName = "Product name is required.";
      isValid = false;
    }
    if (!formValues.quantity || formValues.quantity <= 0) {
      tempErrors.quantity = "Quantity is required and must be greater than 0.";
      isValid = false;
    }
    if (!formValues.price || formValues.price <= 0) {
      tempErrors.price = "Price is required and must be greater than 0.";
      isValid = false;
    }
    if (!formValues.originalPrice || formValues.originalPrice <= 0) {
      tempErrors.originalPrice = "Original price is required.";
      isValid = false;
    }

    // Check 10% price rule
    if (parseFloat(formValues.price) < parseFloat(formValues.originalPrice) * 0.1) {
      tempErrors.price = "Price cannot be lower than 10% of the original price.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here (e.g., sending data to an API)
      alert("Order submitted successfully!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{padding: '2rem 0'}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Order Form
      </Typography>

      {/* Step-by-Step Instructions */}
      <Box mb={3} p={2} bgcolor="background.default">
        <Typography variant="h6">Pkease follow our Guide:</Typography>
        <Typography variant="body2">1. Enter the product name.</Typography>
        <Typography variant="body2">2. Specify the quantity.</Typography>
        <Typography variant="body2">3. Input the original price of the product.</Typography>
        <Typography variant="body2">4. Set the price (must be at least 10% of the original price).</Typography>
      </Box>

      {/* Order Form */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Name"
              name="productName"
              value={formValues.productName}
              onChange={handleChange}
              error={!!errors.productName}
              helperText={errors.productName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Quantity"
              name="quantity"
              value={formValues.quantity}
              onChange={handleChange}
              error={!!errors.quantity}
              helperText={errors.quantity}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Original Price"
              name="originalPrice"
              value={formValues.originalPrice}
              onChange={handleChange}
              error={!!errors.originalPrice}
              helperText={errors.originalPrice}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Price"
              name="price"
              value={formValues.price}
              onChange={handleChange}
              error={!!errors.price}
              helperText={errors.price}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit Order
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default OrderForm;
