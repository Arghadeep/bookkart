import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CollectionItem from '../../components/molecules/collection-item/collection-item.component';
import { selectCollection, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import { styles } from './collection.styles';
import SkeletonView from '../../components/organisms/SkeletonView';
const useStyles = makeStyles(styles);

const CollectionPage = ({ collection, isLoading }) => {
  const classes = useStyles();
  return (
    <div>
      {isLoading && <SkeletonView count={12} type={'ProductCardList'} />}
      {!isLoading && <div style={{padding: '0 40px'}}>
        <h2 className={classes.title}>{collection.title}</h2>
        <Grid container  spacing={2}>
          {collection.items.map(item => (
            <Grid item xs={12} md={3} spacing={2}>
              <CollectionItem key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </div>}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  isLoading: !selectIsCollectionsLoaded(state)
});

export default connect(mapStateToProps)(CollectionPage);
