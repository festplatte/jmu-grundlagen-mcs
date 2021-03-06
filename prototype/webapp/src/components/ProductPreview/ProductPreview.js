import React from "react";
import Grid from "@material-ui/core/Grid";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Grade from "@material-ui/icons/Grade";
import GradeOutlined from "@material-ui/icons/GradeOutlined";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import "./ProductPreview.scss";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  iconYellow: {
    color: "#ffdd00"
  },
  iconGray: {
    color: "#bababa"
  }
});

class ProductPreview extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func
  };

  getReviewRating(props, product) {
    const { classes } = props;
    var i;
    var ret;
    for (i = 1; i <= 5; i++) {
      if (i <= product.rating) {
        ret = (
          <>
            {ret}
            <Grade className={classes.iconYellow} />
          </>
        );
      } else {
        ret = (
          <>
            {ret}
            <GradeOutlined className={classes.iconGray} />
          </>
        );
      }
    }
    return ret;
  }

  getFeatureTable(product) {
    var ret;
    product.features.forEach(element => {
      ret = (
        <>
          {ret}
          <TableRow>
            <TableCell align="right">{Object.keys(element)[0]}</TableCell>
            <TableCell align="left">{Object.values(element)[0]}</TableCell>
          </TableRow>
        </>
      );
    });
    return ret;
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-preview">
        <Typography variant="h5" gutterBottom>
          {product.title}
        </Typography>
        <Grid container spacing={16} alignItems="center" justify="center">
          <Grid item sm={4} xs={12}>
            <img
              src={process.env.PUBLIC_URL + "/produktbilder/" + product.image}
              alt="Produktbild"
              width="100%"
            />
          </Grid>
          <Grid item sm={8} xs={12}>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="h4" gutterBottom className="pricetag">
              {product.price
                .toFixed(2)
                .toString()
                .replace(".", ",") + " €"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              zzgl. Versand ab 4,95 €
            </Typography>
            <Typography variant="h5" gutterBottom className="availability">
              Auf Lager
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.onAddToCart}
              >
                In den Einkaufswagen
                <ArrowRight />
                <ShoppingCart />
              </Button>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {this.getReviewRating(this.props, product)} | 1 Bewertung | Jetzt
              bewerten
            </Typography>
          </Grid>
          <Grid item md={6} sm={8} xs={12}>
            <Paper elevation={1}>
              <Table>
                <TableBody>{this.getFeatureTable(product)}</TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductPreview);
