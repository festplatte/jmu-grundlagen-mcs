import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GuestOrLoggedIn from "../components/GuestOrLoggedIn";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import Review from "../components/Review";
import { Grid, List, ListItem } from "@material-ui/core";

const styles = theme => ({
  // layout: {
  //   width: "auto",
  //   marginLeft: theme.spacing.unit * 2,
  //   marginRight: theme.spacing.unit * 2,
  //   [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
  //     width: 600,
  //     marginLeft: "auto",
  //     marginRight: "auto"
  //   }
  // },
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
    cart: PropTypes.object,
    user: PropTypes.object
  };

  state = {
    activeStep: 0
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

  handleLoggedIn = () => {
    if (this.isLoggedIn()) {
      this.goToStep(REVIEW);
    }
  };

  isLoggedIn = () => {
    return this.props.user && this.props.user.email;
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
            onSignIn={this.handleLoggedIn}
          />
        );
      case ADDRESS:
        return <AddressForm />;
      case PAYMENT:
        return <PaymentForm />;
      case REVIEW:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  componentDidMount = () => {
    // TODO use when implemented
    // this.handleLoggedIn();
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <Grid container spacing={40}>
        <Grid item md={8}>
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Danke für Ihre Bestellung.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep > 1 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Zurück
                      </Button>
                    )}
                    {activeStep > 0 && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Bestellung abschicken"
                          : "Weiter"}
                      </Button>
                    )}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
              Bestellung
            </Typography>
            <List>
              {this.props.products.map((product, i) => (
                <ListItem divider key={i}>
                  {product.title} - {product.price}
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default connect(state => ({
  products: state.cart.cart,
  user: state.auth.user
}))(withStyles(styles)(Checkout));
