import React from "react";
import "../Footer/Footer.scss";
import logo from "../../assets/logo.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";





const Footer = () => {
    return (
      <>
        <footer className="footer">
          <section className="footer-description-section">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-paragraph">
            All rights reserved © Equalizer 2021<br></br> Have any problems? Contact us
            via social media or email us at <br></br>
            <a href="mailto:equalizer@example.com">equalizer@example.com</a>
          </p>
          </section>
          <section className="footer-icon-section">
            <img
              src={facebookIcon}
              alt="Facebook icon"
              className="facebookIcon"
            />
            <img
              src={instagramIcon}
              alt="Instagram icon"
              className="instagramIcon"
            />
            <img
              src={twitterIcon}
              alt="Twitter icon"
              className="Twitter Icon"
            />
          </section>
        </footer>
      </>
    );
}


export default Footer;