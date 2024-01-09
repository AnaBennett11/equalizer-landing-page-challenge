import React from "react";
import "../Header/Header.scss";
import logo from "../../assets/logo.svg";
import bgpattern1 from "../../assets/bgpattern1.svg";

const Header = () => {




  return (
    <>
      <header className="header">
        <section className="header-left-section">
          <img src={logo} alt="Logo" className="header-logo" />
          <h1 className="header-statement">
            We make your music sound extraordinary.
          </h1>
          <p className="header-paragraph">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </section>
        <section className="header-right-section">
          <img className="header-pattern" src={bgpattern1} />
        </section>
      </header>
    </>
  );
};

export default Header;
