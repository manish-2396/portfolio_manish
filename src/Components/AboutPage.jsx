import React from "react";
import "../Style/AboutPageStyles.css";
// import { TbBrandJavascript } from "react-icons/tb";
// import { TiHtml5, TiCss3 } from "react-icons/ti";
// import { FaReact, FaJava } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div>
        <h1>About Me</h1>
        <br />
        <br />
        <p class="about-text">
          Hello stranger! 👋, my name is
          <span class="gradient-text">Manish Singh Chouhan</span> and I am a
          <span class="gradient-text">MERN Full Stack Developer</span>,
          passionate about building digital products that improve everyday
          experience for people.
        </p>
        <br />
        <h1>Tool I use</h1>
        <div className="tool">
          <div>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.w3.org/html/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://reactjs.org/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.w3schools.com/css/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/css3.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://getbootstrap.com" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://chakra-ui.com/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/chakra-ui.png" alt="" />
            </a>
          </div>

          <div>
            <a href="https://www.mongodb.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="48"
                height="48"
              />
            </a>
          </div>

          <div>
            <a href="https://postman.com" target="_blank">
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="45"
                height="45"
              />
            </a>
          </div>
          <div>
            <a href="https://git-scm.com/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/git.png" alt="" />
            </a>
          </div>
          <div>
            <a href="https://redux.js.org" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/redux.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="https://expressjs.com" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/express.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="https://icons8.com/icon/111953/json">
              <img src="https://img.icons8.com/material-outlined/48/000000/json.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="https://icons8.com/icon/24895/npm">
              <img src="https://img.icons8.com/color/48/000000/npm.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="https://icons8.com/icon/gFw7X5Tbl3ss/material-ui">
              <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
