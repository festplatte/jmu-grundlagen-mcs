import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import categories from "../kategorien";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2
    }
  }
});

class Home extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  getMainCategories(categories, anchorEl) {
    var ret;
    categories.forEach(element => {
      ret = (
        <>
          {ret}
          <Grid item xs={6} sm={3} md={1}>
            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              {Object.keys(element)[0]}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              {this.getSubCategories(Object.values(element)[0])}
            </Menu>
          </Grid>
        </>
      );
    });
    return ret;
  }

  getSubCategories(subcategories) {
    var ret;
    subcategories.forEach(element => {
      //console.log(element);
      ret = (
        <>
          {ret}
          <MenuItem onClick={this.handleClose}>{element}</MenuItem>
        </>
      );
    });
    return ret;
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container spacing={24} alignItems="flex-end">
            {this.getMainCategories(categories, anchorEl)}
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Home);
