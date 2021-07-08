import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import SkeletonView from '../SkeletonView';
import { selectCollectionsForPreview , selectIsCollectionFetching} from '../../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections, isLoading }) => (
  !isLoading?<CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
  :<SkeletonView count={12} type={'ProductCardList'} />
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching
});

export default connect(mapStateToProps)(CollectionsOverview);
