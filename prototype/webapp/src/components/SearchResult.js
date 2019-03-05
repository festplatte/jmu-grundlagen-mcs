import React from "react";
import Grid from "@material-ui/core/Grid";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { Link, withRouter } from "react-router-dom";

class SearchResult extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func
  };
  render() {
    const { product } = this.props;
    return (
      <Grid item xs={12}>
        <Paper elevation={1}>
          <Grid container spacing={16}>
            <Grid item xs={2} component={Link} to={"/product?id=" + product.id}>
              <img
                src={process.env.PUBLIC_URL + "/produktbilder/" + product.image}
                alt="Produktbild"
                width="100%"
              />
            </Grid>
            <Grid item xs={6} to={"/product?id=" + product.id}>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </Grid>
            <Grid item xs={4}>
              <h2 className="pricetag">
                {product.price
                  .toFixed(2)
                  .toString()
                  .replace(".", ",") + " €"}
              </h2>
              <p>zzgl. Versand ab 4,95 €</p>
              <h3 className="availability">Auf Lager</h3>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.props.onAddToCart}
              >
                In den Einkaufswagen
                <ArrowRight />
                <ShoppingCart />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default SearchResult;
