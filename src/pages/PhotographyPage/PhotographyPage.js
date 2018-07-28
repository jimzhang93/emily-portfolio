import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import portfolioItems from './portfolio-items';
import './style.scss';
import PortfolioItem from '@components/PortfolioItem';

const PhotographyPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="photography-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Photography</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-item a {
                color: ${textAlternate};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

PhotographyPage.contextTypes = {
  theme: PropTypes.any
};

export default PhotographyPage;
