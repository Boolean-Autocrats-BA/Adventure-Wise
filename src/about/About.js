import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
   return (
      <div className="aboutContainer">
         <div className="aboutThisApp">
            <h3>About This App</h3>
            <p id="aboutParagraph">
               This application was built for you to plan your next adventure using a modular UI and an auto-complete
               enabled search fetching from Google Maps API. We implemented an AGILE environment to guide us from
               wireframe to deployment. The front end is running on ReactJS using various npm packages to aid us in
               creating a seamless experience. The backend is running on Express, NodeJS and PostgreSQL. The PostgreSQL
               database has been migrated using AWS for a central working database for us to build and test our
               application without the need of creating the database locally.
            </p>
            <div className="about-repoDiv">
               <a
                  id="repoBtn"
                  href="https://github.com/Boolean-Autocrats-BA/Adventure-Wise"
                  target="_blank"
                  rel="noreferrer"
               >
                  <FaGithub />
                  Repo
               </a>
            </div>
         </div>
         <br />
         <div className="about-Collaborators">
            <h3 id="collabTitle">Collaborators</h3>
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
                  <a href="https://www.linkedin.com/in/lexie-jin/" target="_blank" rel="noreferrer">
                     <FaLinkedin />
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
