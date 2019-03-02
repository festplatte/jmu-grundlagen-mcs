import React from "react";
import "./ProductPreview.scss";
import Grid from '@material-ui/core/Grid';

class ProductPreview extends React.Component {
  render() {
    return (
      <div className="product-preview">
        <h3>{this.props.title}</h3>
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <img src={process.env.PUBLIC_URL + "/produktbilder/" + this.props.image} alt="Produktbild" width="100%"></img>
          </Grid>
          <Grid item xs={8}>
            <p>{this.props.description}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProductPreview;
