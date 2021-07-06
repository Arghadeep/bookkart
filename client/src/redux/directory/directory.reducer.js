const INITIAL_STATE = {
  sections: [
    {
      title: 'Fiction',
      imageUrl: 'https://i.ibb.co/dWStcJC/fictionjpeg.jpg',
      id: 1,
      linkUrl: 'shop/fiction',
    },
    {
      title: 'Self Help',
      imageUrl: 'https://i.ibb.co/fDhsNm2/self-helpjpeg.jpg',
      id: 2,
      linkUrl: 'shop/self-help',
    },
    {
      title: 'Business',
      imageUrl: 'https://i.ibb.co/GJ21sxr/business.jpg',
      id: 3,
      linkUrl: 'shop/business',
    },
    {
      title: 'Non-Fiction',
      imageUrl: 'https://i.ibb.co/vxXLxjk/best-non-fiction-books.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/non-fiction',
    },
    {
      title: 'Top Picks Of The Month',
      imageUrl: 'https://i.ibb.co/DM3mb2z/top-picks-of-the-month.jpg',
      id: 5,
      size: 'large',
      linkUrl: 'shop/top-picks-of-the-month',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
