import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import NewsPage from './pages/NewsPage';
// import OrderList from './pages/OrderList';
// import OrderForm from './pages/OrderForm';

function App() {
  return (
    
    <div className="App">
         {/* <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/order/new" element={<OrderForm />} />
      </Routes>
    </Router> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
      </header>
    </div>
  );
}






export default App;
