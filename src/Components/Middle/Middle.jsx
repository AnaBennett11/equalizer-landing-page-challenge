import React from 'react';
import '../Middle/Middle.scss'
import bgpattern2 from '../../assets/bgpattern2.svg'

const Middle = () => {
    return (
      <>
        <section className="middle-section">
          <img className="middle-section-image"src={bgpattern2} />
        </section>
      </>
    );
};

export default Middle;