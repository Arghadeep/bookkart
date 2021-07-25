import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './ProductCardListSkeleton.style';
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';
import Skeleton from '../../../molecules/skeleton/skeleton';

const useStyles = makeStyles(styles);
/**
 * @param {number} numberItems - Number of Skeleton cards to be displayed while fetching data from the API
 */
const ProductCardListSkeleton = (props) => {
  const classes = useStyles();
  let numberItems = props.count;
  const items = [...Array(numberItems).keys()];
  return (
    <>
      <Skeleton
        variant={'rect'}
        animation={'wave'}
        height={52}
        width={256}
        className={classes.titleContainer}
      />
      <Grid
        container
        spacing={2}
        data-locator={props['data-locator']}
        className={classes.productContainer}
      >
        {items.map((i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3} spacing={2}>
            <Card className={classes.root}>
              <div className={classes.imageContainer}>
                <Skeleton
                  variant={'rect'}
                  animation={'wave'}
                  className={classes.image}
                />
              </div>
              <CardContent>
                <Skeleton
                  variant={'rect'}
                  animation={'wave'}
                  className={classes.title}
                />
                <Skeleton
                  variant={'rect'}
                  animation={'wave'}
                  width={128}
                  className={classes.title}
                />
              </CardContent>
              <CardActions style={{ padding: '16px' }}>
                <Skeleton
                  variant={'rect'}
                  animation={'wave'}
                  height={24}
                  width={128}
                />
                <Skeleton
                  variant={'rect'}
                  animation={'wave'}
                  height={24}
                  width={128}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductCardListSkeleton;
