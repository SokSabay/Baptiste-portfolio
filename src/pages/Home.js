import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
import profil from "../assets/baptisteProfil.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <span></span>
        <div className="flex-horizon">
          <div className="roundedImg">
            <img className="profilPicture" src={profil} alt="profil "></img>
          </div>
          <div className="flex-start">
            <h2> Baptiste Chenot</h2>
            <p>
              Développeur Web | Full Stack, passionné par l'art et le numérique
            </p>
          </div>
        </div>

        <div className="prompt socialMedia homeSVG">
          <GithubIcon
            onClick={() => window.open("https://github.com/soksabay")}
          />
          <LinkedInIcon
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/baptiste-chenot-1152b0b0/"
              )
            }
          />

          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, SASS, NPM, BootStrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, C-Arduino</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
