import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+7147860736" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto: toleto2013@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/jonathan-de-los-santos-abb7081a6/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/jdelossantos47" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="" className="resumePNG"></img>
          <a href="https://docs.google.com/document/d/1phXqZiDngJerZsaRynAxMy4aQ3hzpF1sfpzfhBDh80Q/edit?usp=sharing"><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}

export default Learn;
