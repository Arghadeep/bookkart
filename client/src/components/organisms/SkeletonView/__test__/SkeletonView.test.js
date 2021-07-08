/*9fbef606107a605d69c0edbcd8029e5d*/
import React from 'react';
import { configure } from '@testing-library/dom';
import mediaQuery from 'css-mediaquery';

import SkeletonView from '../index';
import { cleanup, render } from '../../../../utils/test-utils';
import { breakpoints } from '../../../../../styles/themes/constants';

configure({ testIdAttribute: 'data-locator' });

function createMatchMedia(width) {
  return query => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const props = {
  type: 'SearchCard',
  count: 6,
};
const props1 = {
  type: 'RelatedProductList',
  count: 6,
  settings: {
    arrows: false,
  },
};
const props2 = {
  type: 'RelatedArticlesList',
  count: 6,
};
const props3 = {
  type: 'DynamicTagList',
};
const props4 = {
  type: 'MapCardSkeleton',
  count: 6,
};
const props5 = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};
const props6 = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: false,
};
const props7 = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'press',
  hasImage: true,
  hasDate: true,
};
const props8 = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'press',
  hasImage: true,
  hasDate: false,
};
const props9 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};
const props9Mobile = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};
const props9Desktop = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};
const props10 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: false,
};
const props11 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: false,
  hasDate: true,
};
const props12 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: false,
  hasDate: false,
};
const props12Mobile = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: false,
  hasDate: false,
};

const props22Desktop = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: false,
};

const props22Desktop_withDate = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};

const props22Mobile = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};

const props22Mobile_withoutDate = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: false,
};

const props12Desktop = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: false,
  hasDate: false,
};
const props13 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'press',
  hasImage: true,
  hasDate: true,
};
const props14 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'press',
  hasImage: true,
  hasDate: false,
};
const props15 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'press',
  hasImage: false,
  hasDate: true,
};
const props16 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'articleCards',
  hasImage: true,
  hasDate: true,
};
const props17 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'articleCards',
  hasImage: true,
  hasDate: false,
};
const props18 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'news',
  hasImage: false,
  hasDate: true,
};
const props19 = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'news',
  hasImage: false,
  hasDate: true,
};
const props20 = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'articleCards',
  hasImage: true,
  hasDate: true,
};
const props21 = {
  type: 'ArticleSubtypeGridView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};
const props22 = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'csrCards',
  hasImage: true,
  hasDate: true,
};
const propsLiveArticleGrid = {
  type: 'ArticleSubtypeGridView',
  count: 6,
};
const propsLiveArticleGrid_count_none = {
  type: 'ArticleSubtypeGridView',
};
const propsLiveArticleList = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'articleCards',
  hasImage: true,
  hasDate: false,
};
const propsLiveArticleList_count_none = {
  type: 'ArticleSubtypeListView',
  designVariation: 'articleCards',
  hasImage: true,
  hasDate: false,
};

const propsLiveArticleList_mobile = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'articleCards',
  hasImage: true,
  hasDate: false,
};

const propsLiveArticleList_desktop = {
  type: 'ArticleSubtypeListView',
  count: 6,
  designVariation: 'articleCards',
  hasImage: true,
  hasDate: false,
};
const propsTableSkeleton = {
  type: 'TableSkeleton',
};
const propsDynamicCardList = {
  type: 'DynamicCardList',
};
const propsProductCardList = {
  type: 'ProductCardList',
};
const propsWithoutContentSubType = {
  type: 'ArticleSubtypeListView',
  count: 6,
  hasImage: false,
  hasDate: false,
};

describe('SkeletonView Component', () => {
  beforeEach(() => {
    if (global.document) {
      document.createRange = () => ({
        setStart: () => {},
        setEnd: () => {},
        commonAncestorContainer: {
          nodeName: 'BODY',
          ownerDocument: document,
        },
      });
    }

    window.matchMedia = createMatchMedia(breakpoints.values.xl);
  });

  afterEach(cleanup);

  const locator = `${props.type}-skeleton-wrapper`;
  test('Render Search Card Without props', () => {
    const { getByTestId } = render(<SkeletonView type={props.type} />);
    expect(getByTestId(locator)).toBeInTheDocument();
  });

  test('Render Search Card + showMoreSkelton', () => {
    const { getByTestId } = render(<SkeletonView type={props.type} showMoreSkelton={true} />);
    expect(getByTestId(locator)).toBeInTheDocument();
  });

  const locator1 = `${props1.type}-skeleton-wrapper`;
  test('Render RelatedProductList  articles  Card Without props', () => {
    const { getByTestId } = render(<SkeletonView type={props1.type} />);
    expect(getByTestId(locator1)).toBeInTheDocument();
  });

  test('Render RelatedArticlesList  articles  Card Without props', () => {
    const locator2 = `${props2.type}-skeleton-wrapper`;
    const { getByTestId } = render(<SkeletonView type={props2.type} />);
    expect(getByTestId(locator2)).toBeInTheDocument();
  });

  test('Render DynamicTagList Without props', () => {
    const locator3 = `${props3.type}-skeleton-wrapper`;
    const { getByTestId } = render(<SkeletonView type={props3.type} />);
    expect(getByTestId(locator3)).toBeInTheDocument();
  });
  test('Render MapCardSkeleton Without props', () => {
    const { container } = render(<SkeletonView type={props4.type} />);
    expect(
      container.querySelector('[data-locator="MapCardSkeleton-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Of CSR Variation With Date Without props', () => {
    const { container } = render(<SkeletonView type={props5.type} {...props5} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Of CSR Variation Without Date Without props', () => {
    const { container } = render(<SkeletonView type={props6.type} {...props6} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Of press Variation With Date Without props', () => {
    const { container } = render(<SkeletonView type={props7.type} {...props7} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Of press Variation Without Date Without props', () => {
    const { container } = render(<SkeletonView type={props8.type} {...props8} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of csr Variation With Date and image Without props', () => {
    const { container } = render(<SkeletonView type={props9.type} {...props9} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of csr Variation Without Date and With image Without props', () => {
    const { container } = render(<SkeletonView type={props10.type} {...props10} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of csr Variation With Date and Without image Without props', () => {
    const { container } = render(<SkeletonView type={props11.type} {...props11} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of csr Variation Without date and image Without props', () => {
    const { container } = render(<SkeletonView type={props12.type} {...props12} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of press Variation With Date and image Without props', () => {
    const { container } = render(<SkeletonView type={props13.type} {...props13} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of press Variation Without Date and With image Without props', () => {
    const { container } = render(<SkeletonView type={props14.type} {...props14} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of press Variation With Date and Without image Without props', () => {
    const { container } = render(<SkeletonView type={props15.type} {...props15} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of live Variation[Live Article List View] With Date  Without props', () => {
    const { container } = render(<SkeletonView type={props16.type} {...props16} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of live Variation[Live Article List View] Without Date Without props', () => {
    const { container } = render(<SkeletonView type={props17.type} {...props17} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Of news variation Without props', () => {
    const { container } = render(<SkeletonView type={props18.type} {...props18} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Of news variation Without props', () => {
    const { container } = render(<SkeletonView type={props19.type} {...props19} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Of live Variation', () => {
    const { container } = render(<SkeletonView type={props20.type} {...props20} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Mobile Version Without props', () => {
    const { container } = render(<SkeletonView type={props9Mobile.type} {...props9Mobile} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeGridView Desktop Version Without props', () => {
    const { container } = render(<SkeletonView type={props9Desktop.type} {...props9Desktop} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Mobile Version Without props', () => {
    const { container } = render(<SkeletonView type={props12Mobile.type} {...props12Mobile} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Mobile Version Without props', () => {
    const { container } = render(<SkeletonView type={props22Mobile.type} {...props22Mobile} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Mobile Version Without props', () => {
    const { container } = render(
      <SkeletonView type={props22Mobile_withoutDate.type} {...props22Mobile_withoutDate} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Desktop Version Without props', () => {
    const { container } = render(<SkeletonView type={props12Desktop.type} {...props12Desktop} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Desktop Version Without props', () => {
    const { container } = render(<SkeletonView type={props22Desktop.type} {...props22Desktop} />);
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render ArticleSubtypeListView Desktop Version Without props', () => {
    const { container } = render(
      <SkeletonView type={props22Desktop_withDate.type} {...props22Desktop_withDate} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render TableSkeleton', () => {
    const { container } = render(<SkeletonView type={propsTableSkeleton.type} />);
    expect(container.querySelector('[data-locator="TableSkeleton-skeleton-wrapper"]')).toBeTruthy();
  });

  test('Render TableSkeleton + mobile', () => {
    window.matchMedia = createMatchMedia(breakpoints.values.sm);
    const { container } = render(<SkeletonView type={propsTableSkeleton.type} />);
    expect(
      container.querySelector('[data-locator="TableSkeleton-skeleton-wrapper"] tr td')
    ).toHaveAttribute('width', '60%');
  });

  test('Render TableSkeleton + 30-40-30', () => {
    const { container } = render(
      <SkeletonView type={propsTableSkeleton.type} columns={'30,40,30'} />
    );

    expect(
      container.querySelector(
        '[data-locator="TableSkeleton-skeleton-wrapper"] tr:nth-child(2) td span'
      )
    ).toHaveStyle({ width: '20%' });
  });

  test('Render DynamicCardList', () => {
    const { container, debug } = render(<SkeletonView type={propsDynamicCardList.type} />);
    expect(
      container.querySelector('[data-locator="DynamicCardList-skeleton-wrapper"]')
    ).toBeTruthy();
  });

  test('Render ProductCardList', () => {
    const { container } = render(<SkeletonView type={propsProductCardList.type} />);
    expect(
      container.querySelector('[data-locator="ProductCardList-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render LiveArticleGridView', () => {
    const { container } = render(
      <SkeletonView type={propsLiveArticleGrid.type} {...propsLiveArticleGrid} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render LiveArticleGridView Without Count', () => {
    const { container } = render(
      <SkeletonView type={propsLiveArticleGrid.type} {...propsLiveArticleGrid_count_none} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeGridView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render LiveArticleListView', () => {
    const { container } = render(
      <SkeletonView type={propsLiveArticleList.type} {...propsLiveArticleList} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render LiveArticleListView Mobile View', () => {
    const { container } = render(
      <SkeletonView type={propsLiveArticleList_mobile.type} {...propsLiveArticleList_mobile} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render LiveArticleListView Desktop Version', () => {
    const { container } = render(
      <SkeletonView type={propsLiveArticleList_desktop.type} {...propsLiveArticleList_desktop} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
  test('Render LiveArticleListView without count', () => {
    const { container } = render(
      <SkeletonView type={propsLiveArticleList.type} {...propsLiveArticleList_count_none} />
    );
    expect(
      container.querySelector('[data-locator="ArticleSubtypeListView-skeleton-wrapper"]')
    ).toBeTruthy();
  });
});
