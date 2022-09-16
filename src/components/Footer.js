import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon
          onClick={() => window.open("https://github.com/soksabay")}
        />
        <LinkedInIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/baptiste-chenot-1152b0b0/")
          }
        />

        <EmailIcon />
      </div>
      <p> &copy; 2022 soksabay</p>
    </div>
  );
}

export default Footer;
