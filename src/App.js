import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';
import OrderList from './pages/OrderList';
import OrderForm from './pages/OrderForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
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
  );
}

export default App;