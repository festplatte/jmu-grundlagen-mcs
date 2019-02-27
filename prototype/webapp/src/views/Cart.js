import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { Button } from "@material-ui/core";
import ProductList from "../components/ProductList";

const products = [{ title: "P1" }, { title: "P2" }];

class Cart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Warenkorb</h1>
        {this.props.products.map((product, i) => (
          <ProductList
            key={i}
            product={product}
            onRemove={() => this.props.removeFromCart(product)}
          />
        ))}
        <Button>zur Kasse</Button>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ products: state.cart.cart }),
  { removeFromCart }
)(Cart);
