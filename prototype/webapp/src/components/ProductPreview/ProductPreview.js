import React from "react";
import "./ProductPreview.scss";

class ProductPreview extends React.Component {
  render() {
    return (
      <div className="product-preview">
        <img src={process.env.PUBLIC_URL + "/produktbilder/" + this.props.image} height="64"></img>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ProductPreview;
