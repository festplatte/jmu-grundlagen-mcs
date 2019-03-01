import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import buildFormJson from "../utils/buildFormJson";

const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignInForm extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSignIn: PropTypes.func.isRequired
  };

  signIn = e => {
    e.preventDefault();
    const user = buildFormJson(e.currentTarget);
    this.props.onSignIn(user);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form} onSubmit={this.signIn}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email-Adresse</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Passwort</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="angemeldet bleiben"
        />
        <br />
        <Link to="/register">Neues Kundenkonto registrieren</Link>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Anmelden
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignInForm);
