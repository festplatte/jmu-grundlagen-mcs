import React from "react";
import { connect } from "react-redux";
import products from "../produkte";
import queryString from "query-string";
import SearchResult from "../components/SearchResult";
import Grid from "@material-ui/core/Grid";
import { addToCart } from "../redux/actions/cartActions";

class Search extends React.Component {
  getSearchResults() {
    const searchquery = queryString
      .parse(this.props.location.search)
      .s.toLowerCase();
    const result = products.filter(product =>
      product.title.toLowerCase().includes(searchquery)
    );
    console.log(result);
    console.log(queryString.parse(this.props.location.search).s);
    if (searchquery !== "" && result.length > 0) {
      return result.map((product, i) => (
        <SearchResult
          key={i}
          product={product}
          onAddToCart={() => this.props.addToCart(product)}
        />
      ));
    } else {
      return <p>Produkt konnte nicht gefunden werden.</p>;
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Suchergebnisse</h1>
        <Grid container spacing={24}>
          {this.getSearchResults()}
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(Search);
