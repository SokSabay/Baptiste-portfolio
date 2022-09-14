import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Baptiste</h2>
        <div className="prompt">
          <p> Dev Web, with a passion for learning and creating</p>
          <GithubIcon />
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span></span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
