import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import apiClient from "../utils/apiClient";
import buildFormJson from "../utils/buildFormJson";
import { Snackbar } from "@material-ui/core";
import StatusSnackbar from "../components/StatusSnackbar";
import { signIn } from "../redux/actions/authActions";

const styles = theme => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    statusbarOpen: false
  };

  signIn = e => {
    e.preventDefault();
    const user = buildFormJson(e.currentTarget);
    apiClient.authenticateUser(user).then(res => {
      if (res.status === 200) {
        this.props.history.push("/");
        this.props.signIn(user);
      } else {
        this.setState({
          statusbarOpen: true
        });
      }
    });
  };

  closeStatusbar = () => {
    this.setState({
      statusbarOpen: false
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Anmelden
        </Typography>
        <Snackbar open={this.state.statusbarOpen} onClose={this.closeStatusbar}>
          <StatusSnackbar
            variant="error"
            message="Falsches Passwort oder Benutzer nicht vorhanden."
            onClose={this.closeStatusbar}
          />
        </Snackbar>
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
      </Paper>
    );
  }
}

export default connect(
  null,
  { signIn: signIn }
)(withRouter(withStyles(styles)(SignIn)));
