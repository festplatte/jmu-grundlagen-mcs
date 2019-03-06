import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Snackbar, withStyles } from "@material-ui/core";
import StatusSnackbar from "../components/StatusSnackbar";
import products from "../produkte";
import queryString from "query-string";
import SearchResult from "../components/SearchResult";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Grid from "@material-ui/core/Grid";
import { addToCart } from "../redux/actions/cartActions";
import apiClient from "../utils/apiClient";
import ProductFilter from "../components/ProductFilter";

const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit
  }
});

class Search extends React.Component {
  state = {
    statusbarOpen: false,
    statusbarMsg: null,
    statusbarVariant: null,
    dialogOpen: false,
    product: null
  };

  getSearchResults() {
    const searchquery = queryString
      .parse(this.props.location.search)
      .s.toLowerCase();
    const result = products.filter(product =>
      product.title.toLowerCase().includes(searchquery)
    );
    console.log(result);
    console.log(queryString.parse(this.props.location.search).s);
    if (searchquery !== "" && result.length > 0) {
      return result.map((product, i) => (
        <SearchResult
          key={i}
          product={product}
          onAddToCart={() => this.handleAddToCart(product)}
          onDirectOrder={
            this.props.user && this.props.user.email
              ? () => this.openDialog(product)
              : null
          }
        />
      ));
    } else {
      return (
        <Grid item xs={12}>
          Produkt konnte nicht gefunden werden.
        </Grid>
      );
    }
  }

  handlePlaceOrder = () => {
    const { user } = this.props;
    const products = [{ ...this.state.product, amount: 1 }];
    if (user && user.email) {
      // do api call only for registered users
      const order = { user, products };
      apiClient.placeOrder(order).then(res => {
        if (res.status === 201) {
          this.setState({
            statusbarOpen: true,
            statusbarMsg: "Ihre Bestellung war erfolgreich.",
            statusbarVariant: "success"
          });
        } else {
          this.setState({
            statusbarOpen: true,
            statusbarMsg: "Fehler beim Abschicken der Bestellung.",
            statusbarVariant: "error"
          });
        }
      });
    }
    this.closeDialog();
  };

  handleAddToCart = product => {
    const { classes } = this.props;
    this.props.addToCart(product);
    this.setState({
      statusbarOpen: true,
      statusbarMsg: (
        <>
          Produkt zum Warenkorb hinzugefügt.{" "}
          <Button
            component={Link}
            to="/cart"
            variant="contained"
            className={classes.button}
          >
            zum Warenkorb
          </Button>
        </>
      ),
      statusbarVariant: "success"
    });
  };

  closeStatusbar = () => {
    this.setState({
      statusbarOpen: false
    });
  };

  openDialog = product => {
    this.setState({
      dialogOpen: true,
      product
    });
  };

  closeDialog = () => {
    this.setState({
      dialogOpen: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Suchergebnisse</h1>
        <p>
          Ihre Suche: <b>{queryString.parse(this.props.location.search).s}</b>
        </p>
        <Snackbar open={this.state.statusbarOpen} onClose={this.closeStatusbar}>
          <StatusSnackbar
            variant={this.state.statusbarVariant}
            message={this.state.statusbarMsg}
            onClose={this.closeStatusbar}
          />
        </Snackbar>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.closeDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Bestellung abschicken?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Das von Ihnen gewählte Produkt wird an Ihre Standardadresse
              versendet und die Zahlung über Ihre hinterlegte Zahlungsmethode
              durchgeführt.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Abbrechen
            </Button>
            <Button onClick={this.handlePlaceOrder} color="primary" autoFocus>
              Bestellen
            </Button>
          </DialogActions>
        </Dialog>
        <Grid container spacing={24}>
          <Grid item md={3} xs={12}>
            <ProductFilter />
          </Grid>
          <Grid item md={9} xs={12}>
            <Grid container spacing={24}>
              {this.getSearchResults()}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.auth.user
  }),
  { addToCart }
)(withMobileDialog()(withStyles(styles)(Search)));
