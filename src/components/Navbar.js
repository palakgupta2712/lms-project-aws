import React from "react";
import "../index.css";
import theme from "../theme";
import {
  AppBar,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes/Routes";

const useStyles = makeStyles((theme) => ({
  navItem: {
    letterSpacing: "2.5px",
    marginRight: theme.spacing(2)
  },
  navLink: {
    textDecoration: "none",
    color: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(3)
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                LOGO
              </Typography>
              <Typography className={classes.navItem}>
                <Link to="/home" className={classes.navLink}>
                  Home
                </Link>
              </Typography>
              <Typography className={classes.navItem}>
                <Link to="/explore" className={classes.navLink}>
                  Explore
                </Link>
              </Typography>
              <IconButton color="inherit" className={classes.menuButton}>
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default Navbar;
