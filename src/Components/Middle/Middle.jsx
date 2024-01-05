import React from 'react';
import '../Middle/Middle.scss'
import bgpattern2 from '../../assets/bgpattern2.svg'
import illustration from '../../assets/illustration.png';
const Middle = () => {
    return (
      <>
        <section className="middle-section"> 
          <img className="middle-section-image"src={bgpattern2} />
          <img className="middle-section-phone" src={illustration} />
        </section>
      </>
    );
};

export default Middle;