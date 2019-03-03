import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import apiClient from "../utils/apiClient";
import { Snackbar } from "@material-ui/core";
import StatusSnackbar from "../components/StatusSnackbar";
import { signIn } from "../redux/actions/authActions";
import SignInForm from "../components/SignInForm";

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
  }
});

class SignIn extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    statusbarOpen: false
  };

  signIn = user => {
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
        <SignInForm onSignIn={this.signIn} />
      </Paper>
    );
  }
}

export default connect(
  null,
  { signIn: signIn }
)(withStyles(styles)(SignIn));
