import React from 'react';

const Contact = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', justifyContent: 'center' }}>
    <div className="hero-img" style={{ width: 100, height: 100, marginBottom: 20 }}>
      <span role="img" aria-label="profile">👤</span>
    </div>
    <h2 style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '2rem', marginBottom: 8 }}>Contact Me</h2>
    <div style={{ marginBottom: 18, display: 'flex', gap: 18, justifyContent: 'center' }}>
      <a href="https://github.com/aayushvijay" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="GitHub">🐙</a>
      <a href="https://linkedin.com/in/aayushvijay" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="LinkedIn">💼</a>
      <a href="mailto:aayush@email.com" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="Email">✉️</a>
    </div>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows={4} required />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact; 