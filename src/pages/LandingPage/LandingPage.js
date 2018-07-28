import React from 'react';
import PropTypes from 'prop-types';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import BrowserNotes from '@components/BrowserNotes';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Emily!</div>
          <div className="tagline">
            Student | Artist | Photographer | Life Enthusiast
          </div>
        </div>
      </main>
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
