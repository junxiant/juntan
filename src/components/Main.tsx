import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImg from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Jun Tan" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/junxiant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/junxiant/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:junxiantjx@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Jun Tan</h1>
          <p className="title">AI & Software Engineer</p>
          <p className="bio">Passionate about building robust, cloud-native machine learning systems and intelligent healthcare solutions.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/junxiant" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/junxiant/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:junxiantjx@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
