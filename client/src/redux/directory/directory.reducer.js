const INITIAL_STATE = {
  sections: [
    {
      title: 'Fiction',
      imageUrl: 'directory/fictionjpeg.jpeg',
      id: 1,
      linkUrl: 'shop/fiction',
    },
    {
      title: 'Self Help',
      imageUrl: 'directory/self-helpjpeg.jpeg',
      id: 2,
      linkUrl: 'shop/self-help',
    },
    {
      title: 'Business',
      imageUrl: 'directory/business.jpg',
      id: 3,
      linkUrl: 'shop/business',
    },
    {
      title: 'Non-Fiction',
      imageUrl: 'directory/best-non-fiction-books.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/non-fiction',
    },
    {
      title: 'Top Picks Of The Month',
      imageUrl: 'directory/top-picks-of-the-month.jpg',
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
