import React from 'react';
import '../Hero/Hero.scss';
import apple from '../../assets/apple.svg';
import android from '../../assets/android.svg';
const Hero = () => {
    return (
      <>
        <section className="hero-section">
          <h2 className="hero-title">Premium EQ</h2>
          <p className="hero-paragraph">
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <p className="hero-price">
            <span className="hero-price-bold">$4</span>/month
          </p>
          <div className="hero-buttons">
            <button className="download-button">
              <img src={apple} alt="iOS" className="button-icon" />
              iOS Download
            </button>
            <button className="download-button">
              <img
                src={android}
                alt="Android"
                className="button-icon"
              />
              Android Download
            </button>
          </div>
        </section>
      </>
    );
};

export default Hero;