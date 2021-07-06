import React from 'react';

import ArrowForward from '../../../styles/svgIcons/ArrowForward';

const CarouselArrowButton = props => {
  const {
    dataLocator,
    color = 'white',
    className,
    onClick,
    style,
    ariaLabel = 'carousel-dir-buttons',
  } = props;

  return className ? (
    <button
      className={`${className} carouselarrowbuttonCommon carouselarrowbutton-${color}`}
      onClick={onClick}
      data-locator={dataLocator}
      aria-label={ariaLabel}
      style={style}
    >
      <ArrowForward />
    </button>
  ) : null;
};

export default CarouselArrowButton;