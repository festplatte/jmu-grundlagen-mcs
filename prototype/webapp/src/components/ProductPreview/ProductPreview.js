import React from "react";
import "./ProductPreview.scss";

class ProductPreview extends React.Component {
  render() {
    return (
      <div className="product-preview">
        <h3>{this.props.title}</h3>
        <p>Das ist die Produktbeschreibung</p>
      </div>
    );
  }
}

export default ProductPreview;
