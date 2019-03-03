import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import SignInForm from "./SignInForm";

const styles = theme => ({
  contentSection: {
    margin: theme.spacing.unit * 2
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  summary: {
    textAlign: "right"
  }
});

class GuestOrLoggedIn extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onGuest: PropTypes.func.isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item md={7}>
          Haben Sie bereits ein Kundenkonto? Dann können Sie sich einloggen oder
          hier eines erstellen.
          <br />
          <SignInForm onSignIn={this.props.onSignIn} />
        </Grid>
        <Grid item md={5}>
          <Button
            className={classes.button}
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/register"
          >
            Kundenkonto erstellen <ChevronRight className={classes.rightIcon} />
          </Button>
          <br />
          <Button
            className={classes.button}
            fullWidth
            variant="contained"
            onClick={this.props.onGuest}
          >
            als Gast bestellen <ChevronRight className={classes.rightIcon} />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuestOrLoggedIn);
