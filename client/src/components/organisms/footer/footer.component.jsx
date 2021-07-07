import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

import CartIcon from '../../atoms/cart-icon/cart-icon.component';
import CartDropdown from '../../molecules/cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { signOutStart } from '../../../redux/user/user.actions';
import {styles} from './footer.styles';
import { ReactComponent as Logo } from '../../../assets/Book.svg';

const headersData = [
  {
    label: "SHOP",
    href: "/shop",
  },
  {
    label: "CONTACT",
    href: "/contact-us",
  }
];

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

  const displayDesktop = () => {
    return (
      <Box></Box>
    );
  };

  const displayMobile = () => {
    return (
      <div>FOOTER MOBILE</div>
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
