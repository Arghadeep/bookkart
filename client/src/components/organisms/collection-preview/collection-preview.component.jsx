import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CollectionItem from '../../molecules/collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 2000,
  arrows: false
};

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
        <Slider {...settings}>
          {items.map(item => (<CollectionItem key={item.id} item={item} />))}
        </Slider>
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
