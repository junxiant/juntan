import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/junxiant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/junxiant/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:junxiantjx@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Jun Tan - Portfolio</p>
    </footer>
  );
}

export default Footer;
