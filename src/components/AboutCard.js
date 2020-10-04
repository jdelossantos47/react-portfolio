import React from "react";
import Profile from "../assets/HomeProfile.jpg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="" className="profile float-left"></img>
            <div>

                <div className="mt-3">
             
                <p>I am a Branch Banker IV for Truist Financial living in Charlotte, North Carolina. I have worked in various financial institutions and Sales world, and recently decided to pursue a deeper knowledge of programming languages on the web by becoming a Full Stack Web Developer, and currently enrolled in UNC Bootcamp.
          </p>
          <p> Away from work, my family and I spend our free time trying out new restaurants in town or traveling in or out of the country when times allow. I recently competed in a Jui Jitsu tournament as a way to test my skill in the gentle art.</p>
             </div>
          </div>
      </div>
 

   
    );
    
}

export default AboutCard;
