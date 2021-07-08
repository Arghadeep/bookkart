export const styles = theme => {
  return{
    header: {
      backgroundColor: "#123C69",
      paddingRight: "79px",
      paddingLeft: "22px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    headerRightContent:{
      display:'flex',
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
      width: '64px',
      height:'48px',
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
    logoContainer: {
      height: '100%',
      width: '70px',
      padding: '25px',
    }
 }
 }