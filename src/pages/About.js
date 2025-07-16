import React from 'react';

const About = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', justifyContent: 'center' }}>
    <div className="hero-img" style={{ width: 140, height: 140, marginBottom: 20 }}>
      {/* Replace with your profile image if available */}
      <span role="img" aria-label="profile">👤</span>
    </div>
    <h2 style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '2rem', marginBottom: 8 }}>About Me</h2>
    <div style={{ marginBottom: 18, display: 'flex', gap: 18, justifyContent: 'center' }}>
      <a href="https://github.com/aayushvijay" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="GitHub">🐙</a>
      <a href="https://linkedin.com/in/aayushvijay" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="LinkedIn">💼</a>
      <a href="mailto:aayush@email.com" style={{ color: 'var(--text)', fontSize: 28 }} aria-label="Email">✉️</a>
    </div>
    <p style={{ maxWidth: 700, textAlign: 'center', marginBottom: 16, color: '#eee', fontSize: '1.1rem' }}>
      Aayush is an impact-driven Data Scientist with a proven track record of leveraging advanced analytics to drive business insights and generate more revenue for the organization. He holds a Master's in Computer Science from NIT Trichy, along with a Bachelor's in Statistics (Honors) from the University of Delhi.
    </p>
    <p style={{ maxWidth: 700, textAlign: 'center', marginBottom: 16, color: '#ccc' }}>
      Currently, he is working on developing a tool that automatically parses engineering drawings for all the standards and tabular information using Image Segmentation & Vision Language Models. His work also includes analyzing digital services for Mercedes customers, calculating activation rates, user metrics, and generating key insights. He has also built comprehensive dashboards for stakeholders, optimized data pipelines, and collaborated cross-functionally with developers, product owners, and business leaders to improve customer experiences.
    </p>
    <div style={{ marginTop: 24, textAlign: 'center', color: '#bbb' }}>
      <strong>Education:</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>Master's in Computer Science, NIT Trichy (2021-2023, Grade: 8.49)</li>
        <li>Bachelor's in Statistics (Honors), Kirori Mal College, University of Delhi (2017-2020, Grade: 8.81)</li>
      </ul>
    </div>
    <div style={{ marginTop: 24, textAlign: 'center', color: '#bbb' }}>
      <strong>Internship:</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>Business Analyst, Wadhwani AI (Jun 2022 - Aug 2022, New Delhi)</li>
        <li>Worked on AI-enabled diagnosis and prognosis of cardiovascular diseases, collaborating with stakeholders and creating concept notes.</li>
      </ul>
    </div>
    <div style={{ marginTop: 24, textAlign: 'center', color: '#bbb' }}>
      <strong>Certifications:</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>Creating Great First Impressions (LinkedIn, Jun 2020)</li>
        <li>Understanding Business (LinkedIn, Jun 2020)</li>
      </ul>
    </div>
    <div style={{ marginTop: 24, textAlign: 'center', color: '#bbb' }}>
      <strong>Test Scores:</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>IIT JAM Mathematical Statistics: AIR 90 (Feb 2021)</li>
        <li>Indian Statistical Institute Master of Statistics: AIR 31 (Sep 2020)</li>
      </ul>
    </div>
    <div style={{ marginTop: 24, textAlign: 'center', color: '#bbb' }}>
      <strong>Courses:</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>Linear Models (Kirori Mal College, University of Delhi)</li>
        <li>Statistical Inference (Kirori Mal College, University of Delhi)</li>
      </ul>
    </div>
  </div>
);

export default About; 