import React from 'react';
import ProductCardListSkeleton from './ProductCardListSkeleton';

/**
 * On the basis of type different skeleton body is returned
 */
const SkeletonView = (props) => {
  const locator = `${props.type}-skeleton-wrapper`;
  switch (props.type) {
    case 'ProductCardList':
      return (
        <ProductCardListSkeleton
          count={props.count}
          data-locator={locator}
          {...props}
        />
      );
    default:
      return null;
  }
};

export default SkeletonView;
