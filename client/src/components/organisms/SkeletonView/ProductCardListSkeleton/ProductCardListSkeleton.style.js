export const styles = (theme) => {
  return {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      height: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
    },
    image: {
      width: '100%',
      height: theme.spacing(50),
      // objectFit: 'contain',
      backgroundPosition: 'center',
      marginBottom: '5px',
    },
    imageContainer: {
      maxWidth: '100%',
      overflow: 'hidden',
    },
    productContainer: {
      padding: '0 40px 20px 40px',
    },
    titleContainer: {
      margin: '0 40px 30px 40px',
    },
  };
};
