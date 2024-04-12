// components/projects.js
import React from 'react';

function projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>projects</h2>
      </div>
      <div className="section-content">
        <div className="project-card">
          <div className="project-details">
            <p>
              The Hindu (Prominent media company)
              <br />
              Role: Data Science & Automation Intern
              <br />
              Duration: Aug 2023 - Oct 2023 (2 months)
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-details">
            <p>
              AIROSSPACE R&D (Drone based start-up)
              <br />
              Role: AI Intern
              <br />
              Duration: Jul 2022 - Jul 2023 (12 months)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default projects;
