import React from "react";
// import { Link } from "react-router-dom";
// import classNames from "classnames";
// import numeral from "../utils/numeral";
import { withStyles } from "@material-ui/core/styles";
// import { Button, Typography, Divider } from "@material-ui/core";
// import { ChevronLeft, ChevronRight } from "@material-ui/icons";
// import ProductList from "../components/ProductList";

const styles = theme => ({
  contentSection: {
    margin: theme.spacing.unit * 2
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  summary: {
    textAlign: "right"
  }
});

class Orders extends React.Component {
  render() {
    // const { classes } = this.props;

    return (
      <>
        <h1>Meine Bestellungen</h1>
        {/* <div className={classes.contentSection}>
          {this.props.products.map((product, i) => (
            <ProductList
              key={i}
              className={classes.contentSection}
              product={product}
              onRemove={() => this.props.removeFromCart(product)}
              onIncreaseAmount={() => this.props.addToCart(product)}
              onDecreaseAmount={() => this.props.decreaseProductAmount(product)}
            />
          ))}
        </div>
        <Divider variant="middle" />
        <div className={classNames(classes.summary, classes.contentSection)}>
          <Typography variant="body2" paragraph>
            Summe: {numeral(productsSum).format()}
            {shippingCost > 0 ? (
              <>
                <br />
                Versandkosten: {numeral(shippingCost).format()}
              </>
            ) : null}
          </Typography>
          <Typography variant="h5" paragraph>
            Gesamtsumme: {numeral(productsSum + shippingCost).format()}
          </Typography>
          <Typography variant="body1" paragraph>
            inkl. 19 % MwSt.: {numeral(0.19 * productsSum).format()}
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            component={Link}
            to="/"
          >
            <ChevronLeft className={classes.leftIcon} />
            weiter einkaufen
          </Button>
          {this.hasProducts() ? (
            <>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                component={Link}
                to="/checkout"
              >
                zur Kasse <ChevronRight className={classes.rightIcon} />
              </Button>
              <br />
              <Button className={classes.button} variant="contained">
                direkt zu Paypal <ChevronRight className={classes.rightIcon} />
              </Button>
              <br />
              <Button className={classes.button} variant="contained">
                masterpass <ChevronRight className={classes.rightIcon} />
              </Button>
            </>
          ) : null}
        </div> */}
      </>
    );
  }
}

export default withStyles(styles)(Orders);
