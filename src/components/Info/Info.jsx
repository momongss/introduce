import React from "react";

import "./Info.css";

function Info(props) {
  return (
    <div className="personal-info">
      <div className="contact info-item">
        <div className="item-title">Contact</div>
        <div className="item-content">
          <div className="sub-title">e-mail</div>
          <div className="sub-content">rkrp.app.maker@gmail.com</div>
        </div>
      </div>
      <div className="college info-item">
        <div className="item-title">졸업</div>
        <div className="item-content">
          <div className="sub-title">학교이름</div>
          <div className="sub-content">한국항공대학교</div>
        </div>
        <div className="item-content">
          <div className="sub-title">전공</div>
          <div className="sub-content">정보통신공학</div>
        </div>
        <div className="item-content">
          <div className="sub-title">재학기간</div>
          <div className="sub-content">2015-03 ~ 2021-02</div>
        </div>
      </div>
    </div>
  );
}

export default Info;
