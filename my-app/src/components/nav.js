import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
import logo from "../assets/logo_1x.png"
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import '../assets/css/nav.css'
import { SocialIcon } from 'react-social-icons'
import Content from "../assets/content.json"
//   import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
      backgroundColor: "#fffd",
      "@media (max-width: 900px)": {
          paddingLeft: 0,
      },
      "@media (max-width: 500px)": {
          left: "0.5rem",
      },
      "@media (min-width: 500px)": {
          left: "1rem",
      },
      // boxShadow:" 0 0 40px hsl(0deg 0% 62% / 26%)",
      zIndex: "500",
      padding: "0 0.5rem",
      position: "fixed",
      top: "1rem",
      width: "96%",
      borderRadius: "1rem",
      // margin: "1rem auto -3rem",
      height: "auto"
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
}));

export default function Header() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

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
      <Toolbar className={toolbar}>
        {innovathonLogo}
        <div style={{
          display:'flex'
        }}>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        

        <div>{innovathonLogo}</div>

        <IconButton
          {...{
            edge: "end",
            color: "black",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    <>
              <div className="icon">
                  <SocialIcon url={Content.Facebook} />
              </div>
              <div className="icon">
                  <SocialIcon url={Content.Discord} />
              </div>
              <div className="icon">
                  <SocialIcon url={Content.Instagram} />
              </div>
            </>
  };

  const innovathonLogo = (
      <img src={logo} alt="logo" class="logoImg"/>
  );

  const getMenuButtons = () => {
    return (
      <>
              <div className="icon">
                  <SocialIcon className="navSocialIcons" target="_blank" url={Content.Whatsapp} />
              </div>
              <div className="icon">
                  <SocialIcon className="navSocialIcons" target="_blank" url={Content.Discord} />
              </div>
              <div className="icon">
                  <SocialIcon className="navSocialIcons" target="_blank" url={Content.Instagram} />
              </div>
          </>
    )
  };

  return (
      <AppBar className={header}>
        {mobileView ? displayDesktop() : displayDesktop()}
      </AppBar>
  );
}