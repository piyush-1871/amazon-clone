import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>}></Route>
          <Route path="/login" element={<h1>Login</h1>}></Route>
          {/* This is default route */}
          <Route path="/" element={<><Header /><Home /></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
