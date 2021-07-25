export const styles = theme => {
 return{
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '16px',
    '&div': { 
      '&.slick-active:last-child': {
       marginRight: 0,
      },
    }
  },
  title:{
    height: theme.spacing(8),
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
  }
}
}
