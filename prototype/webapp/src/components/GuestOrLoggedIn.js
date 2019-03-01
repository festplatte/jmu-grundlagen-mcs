import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";

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
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item md={8}>
          Haben Sie bereits ein Kundenkonto? Dann können Sie sich einloggen oder
          hier eines erstellen.
          <br />
          TODO import signin form
        </Grid>
        <Grid item md={4}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
          >
            Kundenkonto erstellen <ChevronRight className={classes.rightIcon} />
          </Button>
          <br />
          <Button className={classes.button} variant="contained">
            als Gast bestellen <ChevronRight className={classes.rightIcon} />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuestOrLoggedIn);
