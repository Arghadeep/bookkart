import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { addItem } from '../../../redux/cart/cart.actions';
import { styles } from './collection-styles.styles';


const useStyles = makeStyles(styles);

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.imageContainer}>
        <CardMedia
          component="img"
          alt={name}
          image={imageUrl}
          title={name}
          className={classes.image}
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={() => addItem(item)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
