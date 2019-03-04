import React from "react";
import { connect } from "react-redux";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import { addToCart } from "../redux/actions/cartActions";
import products from "../produkte";

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Produktseite</h1>
        {products.map((product, i) => (
          <ProductPreview
            key={i}
            product={product}
            onAddToCart={() => this.props.addToCart(product)}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(Product);
