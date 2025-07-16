import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: 32, padding: 24, background: '#f5f5f5', marginBottom: 32 }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>About</Link>
        <Link to="/projects" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>Projects</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
