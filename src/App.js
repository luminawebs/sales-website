import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';
import OrderList from './pages/OrderList';
import OrderForm from './pages/OrderForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B5E9B', // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Custom font family
  },
  spacing: 8, // Custom spacing unit (default is 8px)
  
  Container:{
    background:'red'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <>
        <Header />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/order-form" element={<OrderForm />} />
        </Routes>
        
        <Footer />
      </>
    </Router>
    </ThemeProvider>
  );
}

export default App;