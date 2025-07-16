import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Bankruptcy Prediction',
    image: 'https://source.unsplash.com/120x120/?finance,chart',
    date: 'Jun 2022 - Jul 2022',
    org: 'National Institute of Technology, Tiruchirappalli',
    description: [
      'Dealt with missing values using Mean, KNN, and MICE Data Imputation techniques in a dataset of about 10,000 observations and 64 attributes.',
      'Tackled Data Imbalance using SMOTE Resampling and selected variables using Stepwise Regression and LASSO Regression.',
      'Built models using Logistic Regression and compared recall scores.'
    ],
    tech: ['Python', 'Statistical Modeling'],
    link: '#'
  },
  {
    id: 2,
    title: 'Efficient Business Strategies for Superstore',
    image: 'https://source.unsplash.com/120x120/?business,data',
    date: 'Mar 2022 - Apr 2022',
    org: 'National Institute of Technology, Tiruchirappalli',
    description: [
      'Analyzed sales data using Data Visualization (Feature Count Plot, Correlation Heatmap, Mean profit deviations).',
      'Conducted ANOVA T-test for dependencies between variables and profit target.',
      'Used K-means clustering to find clusters for maximum profit & sales.'
    ],
    tech: ['Python', 'Data Analysis'],
    link: '#'
  }
];

const Projects = () => (
  <div style={{ padding: '40px 0', minHeight: '60vh' }}>
    <h2 style={{ textAlign: 'center', color: 'var(--primary)', fontWeight: 700, fontSize: '2rem' }}>Projects</h2>
    <div className="projects-grid">
      {projects.map(project => (
        <div className="card" key={project.id}>
          <img src={project.image} alt={project.title} />
          <h3 style={{ margin: '12px 0 4px 0', color: 'var(--accent)' }}>{project.title}</h3>
          <p style={{ color: '#bbb', fontSize: '0.95rem', margin: 0 }}>{project.date}</p>
          <p style={{ color: '#aaa', fontSize: '0.95rem', margin: '0 0 8px 0' }}>{project.org}</p>
          <ul style={{ color: '#eee', fontSize: '1rem', margin: '0 0 8px 0', paddingLeft: 18 }}>
            {project.description.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '8px 0' }}>
            {project.tech.map((t, i) => (
              <span key={i} style={{ background: 'var(--primary)', color: 'var(--secondary)', borderRadius: 6, padding: '2px 10px', fontSize: '0.9rem', fontWeight: 500 }}>{t}</span>
            ))}
          </div>
          <a href={project.link} className="cta-btn" style={{ marginTop: 10 }}>View Project</a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects; 