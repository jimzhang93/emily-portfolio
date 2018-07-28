import React from 'react';
import PropTypes from 'prop-types';
import './style';

const PortfolioItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;
  return props.render;
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;
