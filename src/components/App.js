import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<h1>Checkout Page</h1>}></Route>
          <Route path="/login" element={<h1>Login</h1>}></Route>
          {/* This is default route */}
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
