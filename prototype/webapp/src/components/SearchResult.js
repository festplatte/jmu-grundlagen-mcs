import React from "react";
import Grid from "@material-ui/core/Grid";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  productLink: {
    textDecoration: "none"
  },
  paper: {
    padding: theme.spacing.unit
  }
});

class SearchResult extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func
  };
  render() {
    const { product, classes } = this.props;
    return (
      <Grid item xs={12}>
        <Paper elevation={1} className={classes.paper}>
          <Grid container spacing={16}>
            <Grid
              item
              sm={2}
              xs={12}
              component={Link}
              to={"/product?id=" + product.id}
            >
              <img
                src={process.env.PUBLIC_URL + "/produktbilder/" + product.image}
                alt="Produktbild"
                width="100%"
              />
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              component={Link}
              to={"/product?id=" + product.id}
              className={classes.productLink}
            >
              <Typography variant="h5" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography variant="h5" gutterBottom className="pricetag">
                {product.price
                  .toFixed(2)
                  .toString()
                  .replace(".", ",") + " €"}
              </Typography>
              <Typography variant="body1" gutterBottom>
                zzgl. Versand ab 4,95 €
              </Typography>
              <Typography variant="h5" gutterBottom className="availability">
                Auf Lager
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.onAddToCart}
              >
                In den Einkaufswagen
                <ArrowRight />
                <ShoppingCart />
              </Button>
              {this.props.onDirectOrder && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.props.onDirectOrder}
                >
                  Direkt bestellen
                  <ArrowRight />
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchResult);
