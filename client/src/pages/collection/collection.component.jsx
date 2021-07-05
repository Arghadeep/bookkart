import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CollectionItem from '../../components/molecules/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { styles } from './collection.styles';

const useStyles = makeStyles(styles);

const CollectionPage = ({ collection }) => {
  const classes = useStyles();
  const { title, items } = collection;
  return (
    <div>
      <h2 className={classes.title}>{title}</h2>
      <Grid container  spacing={2}>
        {items.map(item => (
          <Grid item xs={12} md={3} spacing={2}>
             <CollectionItem key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
