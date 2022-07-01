import React from "react";
import "../Style/AboutPageStyles.css";
import {TbBrandJavascript} from "react-icons/tb"
import {TiHtml5 , TiCss3} from "react-icons/ti"
import {FaReact , FaJava} from "react-icons/fa"
import {SiRedux} from "react-icons/si"

const AboutPage = () => {
  return (
    <div className="about-page">
      <div>
        <h1>About Me</h1>
        <p class="about-text">
          Hello stranger! 👋, my name is{" "}
          <span class="gradient-text">Manish Singh Chouhan</span> and I am a{" "}
          <span class="gradient-text">Full Stack Developer</span>, passionate
          about building digital products that improve everyday experience for
          people.
        </p>
        <br />
        <h1>Tool I use</h1>
        <div className="tool">
            <div><TbBrandJavascript/></div>
            <div><TiHtml5/> </div>
            <div><TiCss3/> </div>
            <div><FaReact/> </div>
            <div><SiRedux/> </div>
            <div><FaJava/></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
