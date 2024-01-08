import React from "react";
import "../Footer/Footer.scss";
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
      <>
        <footer className="footer">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-paragraph">
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at{" "}
            <a href="mailto:equalizer@example.com">equalizer@example.com</a>
          </p>
        </footer>
      </>
    );
}


export default Footer;