import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import numeral from "../utils/numeral";
import { Link } from "@material-ui/core";

const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

class Review extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
  };

  render() {
    const { classes, products } = this.props;
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Zusammenfassung
        </Typography>
        <List disablePadding>
          {products.map(product => (
            <ListItem className={classes.listItem} key={product.title}>
              <ListItemText
                primary={product.title}
                secondary={product.description}
              />
              <Typography variant="body2">
                {`${product.amount} x ${numeral(product.price).format()}`}
              </Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Versandkosten" />
            <Typography variant="body2">{numeral(4.95).format()}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary="Summe" />
            <Typography variant="subtitle1" className={classes.total}>
              {numeral(
                4.95 + products.reduce((acc, x) => acc + x.price * x.amount, 0)
              ).format()}
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Adresse{" "}
              <Link variant="body1" href="#">
                ändern
              </Link>
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>{addresses.join(", ")}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Zahlungsdetails{" "}
              <Link variant="body1" href="#">
                ändern
              </Link>
            </Typography>
            <Grid container>
              {payments.map(payment => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Review);
