import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '@components/PortfolioItem';
import ScrollToPrevious from '@components/ScrollToPrevious';
import portfolioItems from './portfolio-items';

import './style.scss';

const ArtPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="art-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Art</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: transparent;
              }
            `}
          </style>
          {/* <PortfolioItem /> */}
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

ArtPage.contextTypes = {
  theme: PropTypes.any
};

export default ArtPage;
