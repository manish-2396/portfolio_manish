import React from "react";
import "../Style/FooterStyles.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <div>
              <p>Word No 11 Baihar</p>
              <p>Balaghat MP , 481111 India</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              +91 7020949932
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              manishchouhan2396@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About</h4>
          <p>This is me Manish and Social Media Site</p>
          <div className="social">
            <div className="phone">
              <FaGithub
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              <FaLinkedinIn
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
