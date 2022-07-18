import React from "react";
import "../Style/HearoImgStyles.css";
import { Link } from "react-router-dom";
import pic from "../picture/intropic.jpg"
import profile from "../picture/manish.jpg"

const HearoImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img 
        className="into-img"
          src={pic}
          alt="into-img"
        />
      </div>

      <div className="content">
        <img className="profile-img" src={profile} alt="" />
        <p>Hi I'M Manish Singh Chouhan</p>
        <h1>MERN Full Stack Web Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HearoImg;
