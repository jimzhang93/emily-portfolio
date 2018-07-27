import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              <span className="highlight"><b>Emily Zhang</b></span> is a Chinese-American visual artist, photographer, and student from Atlanta, Georgia. A 2017 National YoungArts foundation finalist and 2018 Scholastic Art and Writing Awards national gold medalist, she has been recognized by the Alliance for Young Artists and Writers, and has been published in The Adroit Journal and TRACK//FOUR journal. Her work has appeared in exhibitions at Savannah College of Art and Design, Miami Art District’s YoungArts Foundation, Pratt Institute, and New York University’s Steinhardt Rosenberg Gallery, among others.
            </p>
            <p>
              Because her work primarily focuses on her own family roots, Chinese history, and the “model minority” experience, much of her inspiration comes from her experiences exploring areas of old Shanghai.
            </p>
            <p>
              She has received mentorship from master multidisciplinary artists such as Derrick Adams, Naomi Fisher, and Watermark Contemporary Gallery artist and RISD Alum Kristen Glosser. In addition, her work has been featured in galleries curated by Director of Perez Art Museum Miami, Franklin Sirmans.
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
