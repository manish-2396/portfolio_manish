import React from "react";
import "../Style/ContectPageStyles.css";

const ContectPage = () => {
  return (
    <div className="contect">
      <h1>Contect Us</h1>

      <div className="contect-page" >
        <div className="contectPage">
          <h1>Word No 11 Baihar Balaghat MP ,</h1>
          <h1> 481111 India</h1>
          <h1>Phone : 7020949932</h1>
          <h1>Email id : manishchouhan2396@gmail</h1>
        </div>
        <div className="form">
          <div>
            <span>Name :</span>
            <input type="text" placeholder="Enter Name..." />
          </div>
          <div>
            <span>Email :</span>
            <input type="text" placeholder="Enter Email..." />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContectPage;
