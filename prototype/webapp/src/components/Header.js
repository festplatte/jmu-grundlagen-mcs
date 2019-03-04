import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Person from "@material-ui/icons/Person";
import PersonOutline from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Home from "@material-ui/icons/Home";
import { Link, withRouter } from "react-router-dom";
import { logOut } from "../redux/actions/authActions";
import { Menu, MenuItem, Hidden } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    isMenuOpen: false
  };

  onSearch = () => {
    console.log("onSearch called");
    this.props.history.push("/search");
  };

  handleMenu = e => {
    this.setState({
      menuAnchor: this.state.menuAnchor ? null : e.currentTarget
    });
  };

  handleLogout = e => {
    this.props.logOut();
    this.handleMenu(e);
  };

  render() {
    const { classes } = this.props;
    const menuOpen = Boolean(this.state.menuAnchor);

    return (
      <header>
        <CssBaseline />
        <AppBar color="default" position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <Link to="/">
              <Hidden smDown>
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.toolbarTitle}
                >
                  ALTERNATE
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <Home />
              </Hidden>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Suche…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={this.onSearch}
              />
            </div>
            <div className={classes.grow} />
            <Button component={Link} to="/product">
              Demo Produktseite
            </Button>
            <Button component={Link} to="/cart">
              <Badge badgeContent={this.props.cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
              <Hidden smDown>Warenkorb</Hidden>
            </Button>
            {this.props.user ? (
              <>
                <Button
                  color="primary"
                  variant="outlined"
                  aria-owns="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                >
                  <Person />
                  <Hidden smDown>Mein Account</Hidden>
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.menuAnchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={menuOpen}
                  onClose={this.handleMenu}
                >
                  <MenuItem
                    component={Link}
                    to="/orders"
                    onClick={this.handleMenu}
                  >
                    Meine Bestellungen
                  </MenuItem>
                  <MenuItem onClick={this.handleLogout}>Abmelden</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                component={Link}
                to="/signin"
                color="primary"
                variant="outlined"
              >
                <PersonOutline />
                <Hidden smDown>Anmelden</Hidden>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, cart: state.cart.cart }),
  { logOut }
)(withRouter(withStyles(styles)(Header)));
