import React from "react";
import { connect } from "react-redux";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import { addToCart } from "../redux/actions/cartActions";
import products from "../produkte";
import queryString from "query-string";

class Product extends React.Component {
  getProduct() {
    const result = products.find(
      product =>
        parseInt(product.id, 10) ===
        parseInt(queryString.parse(this.props.location.search).id, 10)
    );
    if (result != null) {
      return (
        <ProductPreview
          product={result}
          onAddToCart={() => this.props.addToCart(result)}
        />
      );
    } else {
      return <p>Produkt konnte nicht gefunden werden.</p>;
    }
  }

  render() {
    return (
      <div>
        <h1>Produktseite</h1>
        {this.getProduct()}
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(Product);
