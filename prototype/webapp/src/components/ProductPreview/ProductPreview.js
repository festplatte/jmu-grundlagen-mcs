import React from "react";
import "./ProductPreview.scss";
import Grid from "@material-ui/core/Grid";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

class ProductPreview extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func
  };
  render() {
    const { product } = this.props;
    return (
      <div className="product-preview">
        <h3>{product.title}</h3>
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <img
              src={process.env.PUBLIC_URL + "/produktbilder/" + product.image}
              alt="Produktbild"
              width="100%"
            />
          </Grid>
          <Grid item xs={8}>
            <p>{product.description}</p>
            <h2 className="pricetag">
              {product.price
                .toFixed(2)
                .toString()
                .replace(".", ",") + " €"}
            </h2>
            <p>zzgl. Versand ab 4,95 €</p>
            <h3 class="availability">Auf Lager</h3>
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
      </div>
    );
  }
}

export default ProductPreview;
