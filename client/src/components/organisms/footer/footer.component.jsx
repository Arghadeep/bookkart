import React, { useState, useEffect } from "react";
import {  Typography, makeStyles,  Link, Box, Grid, List, ListItem, ListItemText, 
          Accordion, AccordionSummary, AccordionDetails  } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import {styles} from './footer.styles';
import BookkartLogo from "../../../styles/svgIcons/Book";
import Call from "../../../styles/svgIcons/Call";
import {ReactComponent as FacebookLogo} from '../../../assets/facebook.svg';
import {ReactComponent as InstagramLogo} from '../../../assets/instagram.svg';
import {ReactComponent as LinkedInLogo} from '../../../assets/linkedin.svg';
import {ReactComponent as TwitterLogo} from '../../../assets/twitter.svg';
import {ReactComponent as YoutubeLogo} from '../../../assets/youtube.svg';

const useStyles = makeStyles(styles);

const Footer = ({ currentUser, hidden, signOutStart }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayMobile = () => {
    return (
      <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      >
      <Grid container spacing={0} className={classes.footerTopWrapper}>
          <Grid item className={classes.logoWrapper}>
             <BookkartLogo className={classes.bookkartLogo} />
             <Typography variant="subtitle1" className={classes.logoTitle}>
                Bookkart Inc.
            </Typography>
          </Grid>
          <Grid item style={{alignSelf: 'flex-end'}}>
              <Link href="tel:65789912" underline="none">
                <Box display={'flex'} flexDirection={'row'}>
                  <Box className={classes.iconWrapper}>
                    <Call className={classes.icon}/>
                  </Box>
                  <Typography variant="h6" style={{padding:'8px',color:'white'}}>
                    65789912
                  </Typography>
                </Box>
              </Link>
          </Grid>
        </Grid>
      <Grid container spacing={2} className={classes.footerBottomWrapper}>
        <div className={classes.footerAccordion}>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.accordionExpandIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Link
                {...{
                  component: RouterLink,
                  to: '/shop',
                  color: "inherit",
                  style: { textDecoration: "none" },
                }}
                >
                  <Typography className={classes.heading}>PRODUCTS</Typography>
                </Link>
            </AccordionSummary>
            <AccordionDetails>
                <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/fiction',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <Typography className={classes.heading}>Fiction</Typography>
                  </Link>
            </AccordionDetails>
            <AccordionDetails>
                  <Link
                    {...{
                      component: RouterLink,
                      to: '/shop/non-fiction',
                      color: "inherit",
                      style: { textDecoration: "none" },
                    }}
                    >
                      <Typography className={classes.heading}>Non Fiction</Typography>
                  </Link>
            </AccordionDetails>
            <AccordionDetails>
                <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/business',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <Typography className={classes.heading}>Business</Typography>
                </Link>
            </AccordionDetails>
            <AccordionDetails>
               <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/self-help',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <Typography className={classes.heading}>Self Help</Typography>
                </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/top-picks-of-the-month',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <Typography className={classes.heading}>Top Picks Of The Month</Typography>
                  </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.footerAccordion}>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.accordionExpandIcon}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            > 
              <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <Typography className={classes.heading}>SUPPORT</Typography>
                  </Link>
            </AccordionSummary>
            <AccordionDetails>
              <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                   <Typography>Call Us</Typography>
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                   <Typography>Chat with Us</Typography>
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                   <Typography>Online Enquiries</Typography>
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                   <Typography>Locate Us</Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
        </div> 
        <Grid item className={classes.footerQuickLinkContainer}>
         <List className={classes.footerQuickLinkList}>
              <ListItem>
                <ListItemText primary="BOOKKART PRIME" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Careers" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Bookie Blogs" />
              </ListItem>
            </List>
         </Grid>
         <Grid item className={classes.socialShareContainer}>
            <Link href="https://www.facebook.com/">
                <FacebookLogo className={classes.socialShareIcon} />
            </Link>
            <Link href="https://www.instagram.com/">
                <InstagramLogo className={classes.socialShareIcon}/>
            </Link>
            <Link href="https://www.linkedin.com/">
                <LinkedInLogo className={classes.socialShareIcon}/>
            </Link>
            <Link href="https://www.youtube.com/">
                <YoutubeLogo className={classes.socialShareIcon}/>
            </Link>
            <Link href="https://www.twitter.com/">
                <TwitterLogo className={classes.socialShareIcon}/>
            </Link>
          </Grid>
      </Grid>
      </Box>
    );
  };

  const displayDesktop = () => {
    return (
      <Box display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      >
        <Grid container spacing={2} className={classes.footerLeftWrapper}>
          <Grid item className={classes.logoWrapper}>
             <BookkartLogo className={classes.bookkartLogo} />
             <Typography variant="subtitle1" className={classes.logoTitle}>
                Bookkart Inc.
            </Typography>
          </Grid>
          <Grid item>
              <Link href="tel:65789912" underline="none">
                <Box display={'flex'} flexDirection={'row'}>
                  <Box className={classes.iconWrapper}>
                    <Call className={classes.icon}/>
                  </Box>
                  <Typography variant="h6" style={{padding:'8px',color:'white'}}>
                    65789912
                  </Typography>
                </Box>
              </Link>
          </Grid>
          <Grid item className={classes.socialShareContainer}>
            <Link href="https://www.facebook.com/">
                <FacebookLogo className={classes.socialShareIcon} />
            </Link>
            <Link href="https://www.instagram.com/">
                <InstagramLogo className={classes.socialShareIcon}/>
            </Link>
            <Link href="https://www.linkedin.com/">
                <LinkedInLogo className={classes.socialShareIcon}/>
            </Link>
            <Link href="https://www.youtube.com/">
                <YoutubeLogo className={classes.socialShareIcon}/>
            </Link>
            <Link href="https://www.twitter.com/">
                <TwitterLogo className={classes.socialShareIcon}/>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.footerRightWrapper}>
         <Grid item className={classes.footerQuickLinkContainer} md={3}>
            <List className={classes.footerQuickLinkList}>
              <ListItem button={true}>
                <Link
                {...{
                  component: RouterLink,
                  to: '/shop',
                  color: "inherit",
                  style: { textDecoration: "none" },
                }}
                >
                  <ListItemText primary="PRODUCTS" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/fiction',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <ListItemText primary="Fiction" />
                  </Link>
              </ListItem>
              <ListItem button>
                  <Link
                    {...{
                      component: RouterLink,
                      to: '/shop/non-fiction',
                      color: "inherit",
                      style: { textDecoration: "none" },
                    }}
                    >
                      <ListItemText primary="Non-Fiction" />
                  </Link>
              </ListItem>
              <ListItem button>
                <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/business',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <ListItemText primary="Business" />
                </Link>
              </ListItem>
              <ListItem button>
               <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/self-help',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <ListItemText primary="Self Help" />
                </Link>
              </ListItem>
              <ListItem button>
              <Link
                  {...{
                    component: RouterLink,
                    to: '/shop/top-picks-of-the-month',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <ListItemText primary="Top Picks Of The Month" />
                  </Link>
              </ListItem>
            </List>
         </Grid>
         <Grid item className={classes.footerQuickLinkContainer}>
         <List className={classes.footerQuickLinkList}>
              <ListItem button={true}>
                <Link
                {...{
                  component: RouterLink,
                  to: '/contact-us',
                  color: "inherit",
                  style: { textDecoration: "none" },
                }}
                >
                  <ListItemText primary="SUPPORT" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <ListItemText primary="Call us" />
                  </Link>
              </ListItem>
              <ListItem button>
                  <Link
                    {...{
                      component: RouterLink,
                      to: '/contact-us',
                      color: "inherit",
                      style: { textDecoration: "none" },
                    }}
                    >
                      <ListItemText primary="Chat with us" />
                  </Link>
              </ListItem>
              <ListItem button>
                <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <ListItemText primary="Online Enquiries" />
                </Link>
              </ListItem>
              <ListItem button>
               <Link
                  {...{
                    component: RouterLink,
                    to: '/contact-us',
                    color: "inherit",
                    style: { textDecoration: "none" },
                  }}
                  >
                    <ListItemText primary="Locate us" />
                </Link>
              </ListItem>
            </List>
         </Grid>
         <Grid item className={classes.footerQuickLinkContainer}>
         <List className={classes.footerQuickLinkList}>
              <ListItem>
                <ListItemText primary="BOOKKART PRIME" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Careers" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Bookie Blogs" />
              </ListItem>
            </List>
         </Grid>
        </Grid>
      </Box>
    );
  };


  return (
    <footer>
      <div className={classes.footer}>
        {mobileView ? displayMobile() : displayDesktop()}
      </div>
    </footer>
  );
}



export default Footer;
