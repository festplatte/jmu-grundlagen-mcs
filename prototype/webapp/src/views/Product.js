import React from "react";
import ProductPreview from "../components/ProductPreview/ProductPreview";

const products = [{ title: "P1" }, { title: "P2" }];

class Product extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Produktseite</h1>
        {products.map((product, i) => (
          <ProductPreview key={i} title={product.title} />
        ))}
      </React.Fragment>
    );
  }
}

export default Product;
