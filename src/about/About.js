import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
   return (
      <div className="aboutContainer">
         <div className="aboutThisApp">
            <h3>About This App</h3>
            <p>ADD SOMETHING ABOUT THIS APP</p>
         </div>
         <h3>Collaborators</h3>
         <div className="about-Collaborators">
            <div className="collabCard">
               <div>Anthony Clay</div>
               <div className="social-links">
                  <a href="https://github.com/iicba" target="_blank" rel="noreferrer">
                     <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/anthonybclayii/" target="_blank" rel="noreferrer">
                     <FaLinkedin />
                  </a>
               </div>
            </div>
            <div className="collabCard">
               <div>Yanchao Jin</div>
               <div className="social-links">
                  <a href="https://github.com/yanchaoj" target="_blank" rel="noreferrer">
                     <FaGithub />
                  </a>
               </div>
            </div>
            <div className="collabCard">
               <div>Siddhant Bose</div>
               <div className="social-links">
                  <a href="https://github.com/pyrotechnicsid" target="_blank" rel="noreferrer">
                     <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/siddhantbose/" target="_blank" rel="noreferrer">
                     <FaLinkedin />
                  </a>
               </div>
            </div>
            <div className="collabCard">
               <div>Michael Howard</div>
               <div className="social-links">
                  <a href="https://github.com/howardmg" target="_blank" rel="noreferrer">
                     <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/michael-gene-howard/" target="_blank" rel="noreferrer">
                     <FaLinkedin />
                  </a>
               </div>
            </div>
            <div className="collabCard">
               <div>Magdiel Rosario</div>
               <div className="social-links">
                  <a href="https://github.com/magdielrosario97" target="_blank" rel="noreferrer">
                     <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/msro97" target="_blank" rel="noreferrer">
                     <FaLinkedin />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
