import React from "react";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      {/* <ul className="footerMenu">
        <li><a href="#" className="">Home</a></li>
        <li><a href="#" className="">About</a></li>
        <li><a href="#" className="">Skills</a></li>
        <li><a href="#" className="">Projects</a></li>
        <li><a href="#" className="">Blog</a></li>
        <li><a href="#" className="">Contact</a></li>
      </ul> */}
      <li className="social-icon footerIcons positionFooterSocials">
        <a href="https://github.com/ste3ve3" target="_blank" rel="noreferrer" className=""><img src={navIcon2} alt="" /></a>
        <a href="https://www.linkedin.com/in/steve-ndicunguye-89bb6822b/" target="_blank" rel="noreferrer" className=""><img src={navIcon1} alt="" /></a>
        <a href="https://twitter.com/did3rot" target="_blank" rel="noreferrer" className=""><img src={navIcon3} alt="" /></a>
      </li>
      
      <p className = "footerCopyRight">&copy; 2023 <span className="footerName">Steve Ndicunguye</span> | All rights reserved.</p>
    </footer>
      
  );
};

