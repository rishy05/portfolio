// components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
      </div>
      <div className="section-content">
        <div className="project-card">
          {"PHOTO SHARING SITE"}
          <br/>
          <br/>
          {"Tech Stack - React, TensorFlow, DeepFace, GCP, Flask."}
          <br/>
          {"● Seamlessly sync attendee selfies with professional photos for prompt delivery, ensuring a seamless event experience."}
          <br/>
          {"● Our advanced AI accurately matches faces across event photos, guaranteeing personalized collections for each attendee."}
        </div>
        <div className='project-card'>
          {"POINT OUT PROBLEM"}
          <br/>
          <br/>
          {"Tech Stack - Python, YOLOv5, OpenCV, DeepFace, React Native, GCP."}
          <br/>
          {"● Implemented an app where users can submit their problem as photos (Crime suspicion, Road issues, violent animals etc.)."}
          <br/>
          {"● Leverages advanced AI to detect criminal’s faces and uses generative AI to create pictures when image is not available."}
        </div>

        </div>
    </section>
  );
}

export default Projects;