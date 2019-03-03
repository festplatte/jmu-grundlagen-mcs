import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import GuestOrLoggedIn from "../components/GuestOrLoggedIn";
import AddressPage from "../components/AddressPage";
import PaymentPage from "../components/PaymentPage";
import Review from "../components/Review";
import apiClient from "../utils/apiClient";
import { signIn } from "../redux/actions/authActions";
import { Snackbar } from "@material-ui/core";
import StatusSnackbar from "../components/StatusSnackbar";
import ConfirmOrder from "../components/ConfirmOrder";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    paddingTop: 0
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ["Login oder Gast", "Adressen", "Zahlung", "Zusammenfassung"];
const LOGIN_GUEST = 0;
const ADDRESS = 1;
const PAYMENT = 2;
const REVIEW = 3;

class Checkout extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    products: PropTypes.array,
    user: PropTypes.object
  };

  state = {
    activeStep: 0,
    statusbarOpen: false,
    statusbarMsg: null
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleSignIn = user => {
    apiClient.authenticateUser(user).then(res => {
      if (res.status === 200) {
        this.props.signIn(user);
      } else {
        this.setState({
          statusbarOpen: true,
          statusbarMsg: "Falsches Passwort oder Benutzer nicht vorhanden."
        });
      }
    });
  };

  handlePlaceOrder = () => {
    const { user, products } = this.props;
    if (user && user.email) {
      // do api call only for registered users
      const order = { user, products };
      apiClient.placeOrder(order).then(res => {
        if (res.status === 201) {
          this.handleNext();
        } else {
          this.setState({
            statusbarOpen: true,
            statusbarMsg: "Fehler beim Abschicken der Bestellung."
          });
        }
      });
    } else {
      this.handleNext();
    }
  };

  checkLoggedIn = user => {
    if (user && user.email) {
      this.goToStep(REVIEW);
    }
  };

  closeStatusbar = () => {
    this.setState({
      statusbarOpen: false
    });
  };

  goToStep(step) {
    this.setState({
      activeStep: step
    });
  }

  getStepContent = step => {
    switch (step) {
      case LOGIN_GUEST:
        return (
          <GuestOrLoggedIn
            onGuest={this.handleNext}
            onSignIn={this.handleSignIn}
          />
        );
      case ADDRESS:
        return <AddressPage />;
      case PAYMENT:
        return <PaymentPage />;
      case REVIEW:
        return <Review products={this.props.products} />;
      default:
        throw new Error("Unknown step");
    }
  };

  componentDidMount = () => {
    this.checkLoggedIn(this.props.user);
  };

  componentWillReceiveProps = nextProps => {
    this.checkLoggedIn(nextProps.user);
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <Paper className={classes.paper}>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Snackbar open={this.state.statusbarOpen} onClose={this.closeStatusbar}>
          <StatusSnackbar
            variant="error"
            message={this.state.statusbarMsg}
            onClose={this.closeStatusbar}
          />
        </Snackbar>
        {activeStep === steps.length ? (
          <ConfirmOrder />
        ) : (
          <>
            {this.getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep > 1 && (
                <Button onClick={this.handleBack} className={classes.button}>
                  Zurück
                </Button>
              )}
              {activeStep > 0 && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    activeStep === steps.length - 1
                      ? this.handlePlaceOrder
                      : this.handleNext
                  }
                  className={classes.button}
                >
                  {activeStep === steps.length - 1
                    ? "Bestellung abschicken"
                    : "Weiter"}
                </Button>
              )}
            </div>
          </>
        )}
      </Paper>
    );
  }
}

export default connect(
  state => ({
    products: state.cart.cart,
    user: state.auth.user
  }),
  { signIn }
)(withStyles(styles)(Checkout));
