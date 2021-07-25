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
import {styles} from './header.styles';
import { ReactComponent as Logo } from '../../../assets/Book.svg';
import BookkartLogo from '../../../styles/svgIcons/Book'

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

const Header = ({ currentUser, hidden, signOutStart }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

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
      <Toolbar className={classes.toolbar}>
        {BookkartLogoRender}
        <div className={classes.headerRightContent}>
          <div>{getMenuButtons()}
          {currentUser ? (
            <Button
            {...{
              component: RouterLink,
              color: "inherit",
              style: { textDecoration: "none" },
              className: classes.menuButton,
              onClick: signOutStart
            }}
          >
            SIGN OUT
          </Button>
          ) : (
            <Button
            {...{
              component: RouterLink,
              to: "/signin",
              color: "inherit",
              style: { textDecoration: "none" },
              className: classes.menuButton
            }}
          >
            SIGN IN
          </Button>
          )}
          </div>
          <CartIcon />
          {hidden ? null : <CartDropdown />}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        <div style={{display:'flex'}}>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
            {BookkartLogoRender}
        </div>
        <div className={classes.headerRightContent}>
          {currentUser ? (
              <Button
              {...{
                component: RouterLink,
                color: "inherit",
                style: { textDecoration: "none" },
                className: classes.menuButton,
                onClick: signOutStart
              }}
            >
              SIGN OUT
            </Button>
            ) : (
              <Button
              {...{
                component: RouterLink,
                to: "/signin",
                color: "inherit",
                style: { textDecoration: "none" },
                className: classes.menuButton
              }}
            >
              SIGN IN
            </Button>
            )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const BookkartLogoRender = (
    <Link {...{
      component: RouterLink,
      to: "/",
    }}>
      <BookkartLogo className={classes.logo} />
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
