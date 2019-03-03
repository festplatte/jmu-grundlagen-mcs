import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

const styles = theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class ConfirmOrder extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h5" gutterBottom>
          Danke für Ihre Bestellung.
        </Typography>
        <Typography variant="subtitle1">
          Ihre Bestellnummer lautet #2001539. Wir haben Ihnen die Bestätigung
          per Email gesendet und werden uns melden, sobald Ihre Bestellung
          verschickt wurde.
        </Typography>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            className={classes.button}
          >
            zur Startseite
          </Button>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ConfirmOrder);
