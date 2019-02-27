import React from "react";
import { connect } from "react-redux";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import { addToCart } from "../redux/actions/cartActions";
import { Button } from "@material-ui/core";

const products = [{ title: "P1" }, { title: "P2" }];

class Product extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Produktseite</h1>
        {products.map((product, i) => (
          <ProductPreview key={i} title={product.title} />
        ))}
        <Button
          onClick={() => {
            this.props.addToCart({
              id: 1,
              title: "my product",
              price: 105.99,
              amount: 3
            });
          }}
        >
          in den Einkaufswagen
        </Button>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(Product);
