import React from 'react';

const Home = () => (
  <div className="hero">
    <div className="hero-img">
      {/* Replace with your profile image if available */}
      <span role="img" aria-label="profile">👤</span>
    </div>
    <h1 style={{ fontWeight: 700, fontSize: '2.6rem', margin: 0, letterSpacing: 1 }}>Aayush Vijay <span style={{ fontSize: 18, color: '#aaa', fontWeight: 400 }}>(He/Him)</span></h1>
    <h2 style={{ fontWeight: 500, color: 'var(--primary)', margin: '12px 0 0 0', fontSize: '1.4rem' }}>Data Scientist at Mercedes-Benz</h2>
    <h3 style={{ fontWeight: 400, color: '#bbb', margin: '4px 0' }}>NIT Trichy | ISI MStat AIR-31</h3>
    <p style={{ color: '#ccc', margin: '8px 0' }}>South Delhi, Delhi, India</p>
    <p style={{ maxWidth: 600, textAlign: 'center', marginTop: 16, color: '#eee', fontSize: '1.1rem' }}>
      Impact-driven Data Scientist with a proven track record of leveraging advanced analytics to drive business insights and generate more revenue for organizations.
    </p>
    <a href="/projects" className="cta-btn">View My Work</a>
    <div style={{ marginTop: 32, display: 'flex', gap: 18 }}>
      <a href="https://github.com/aayushvijay" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="GitHub"><i className="fab fa-github"></i>🐙</a>
      <a href="https://linkedin.com/in/aayushvijay" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="LinkedIn"><i className="fab fa-linkedin"></i>💼</a>
      <a href="mailto:aayush@email.com" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="Email"><i className="fas fa-envelope"></i>✉️</a>
    </div>
  </div>
);

export default Home; 