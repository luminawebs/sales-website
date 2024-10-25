import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [orderData, setOrderData] = useState({
    customerName: '',
    itemName: '',
    quantity: 1,
    unitPrice: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fakeapi.com/orders', orderData)
      .then((response) => {
        console.log('Order created:', response.data);
      })
      .catch((error) => console.error('Error creating order:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create New Order</h1>
      <input type="text" name="customerName" placeholder="Customer Name" onChange={handleInputChange} />
      <input type="text" name="itemName" placeholder="Item Name" onChange={handleInputChange} />
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleInputChange} />
      <input type="number" name="unitPrice" placeholder="Unit Price" onChange={handleInputChange} />
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default OrderForm;