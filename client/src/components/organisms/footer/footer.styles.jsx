export const styles = theme => {
  return{
    footer: {
      backgroundColor: "#1F2833",
      padding: '20px 40px',
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    footerLeftWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    footerRightWrapper: {
      justifyContent: 'space-around',
    },
    logoTitle: {
      color: 'white',
      fontWeight: '500',
    },
    bookkartLogo: {
       height: theme.spacing(8),
       width:theme.spacing(10),
       color: 'white',
    },
    socialShareContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '50%',
    },
    iconWrapper: {
      borderWidth: '2px !important',
      borderRadius: '50%',
      '-webkit-transition': 'all ease-in .2s',
      transition: 'all ease-in .2s',
      display: 'inline-block',
      textAlign: 'center',
      height: '40px',
      width: '40px',
      lineHeight: '38px',
      color: '#ffffff',
      backgroundColor: '#EEE2DC',
      '&:hover':{
        backgroundColor: '#EDC7B7',
      },
    },
    icon: {
      height: '32px',
      width: '32px',
      verticalAlign: 'middle',
    },
    socialShareIcon: {
      height:'40px',
      width: '40px',
    },
    footerQuickLinkContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    footerQuickLinkList: {
     color: 'white',
    },
 }
 }