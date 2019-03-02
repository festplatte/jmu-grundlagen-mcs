import React from "react";
import { connect } from "react-redux";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import { addToCart } from "../redux/actions/cartActions";
import { Button } from "@material-ui/core";

const products = [{ title: "P1", description: "Ein Smartphone", tags: "", price: "", image: "phone-a.svg" }, { title: "P2", description: "Ein Smartphone", tags: "", price: "", image: "phone-b.svg" }, { title: "P3", description: "Eine Grafikkarte", tags: "", price: "", image: "gpu-a.svg" }, { title: "P4", description: "Eine Grafikkarte", tags: "", price: "", image: "gpu-b.svg" }, { title: "P5", description: "Arbeitsspeicher 8 GB DDR4", tags: "", price: "", image: "ram-a.svg" }, { title: "P6", description: "Arbeitsspeicher 8 GB DDR4", tags: "", price: "", image: "ram-b.svg" }];

class Product extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Produktseite</h1>
        {products.map((product, i) => (
          <ProductPreview key={i} title={product.title} description={product.description} image={product.image} />
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
