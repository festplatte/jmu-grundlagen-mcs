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
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link, withRouter } from "react-router-dom";
import { logOut } from "../redux/actions/authActions";

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

  onSearch = () => {
    console.log("onSearch called");
    this.props.history.push("/search");
  };

  render() {
    const { classes } = this.props;

    return (
      <header>
        <CssBaseline />
        <AppBar color="default" position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <Link to="/">ALTERNATE</Link>
            </Typography>
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
              Einkaufswagen
            </Button>
            {this.props.user ? (
              <Button
                onClick={this.props.logOut}
                color="primary"
                variant="outlined"
              >
                <Person />
                Abmelden
              </Button>
            ) : (
              <Button
                component={Link}
                to="/signin"
                color="primary"
                variant="outlined"
              >
                <Person />
                Anmelden
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
