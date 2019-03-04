import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import numeral from "../utils/numeral";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "../utils/moment";

const styles = theme => ({
  card: {
    display: "flex",
    margin: theme.spacing.unit
  },
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  }
});

class OrderListItem extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired
  };

  render() {
    const { classes, order } = this.props;
    const { products } = order;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography component="h2" variant="h5">
            Bestellung {order._id}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            vom {moment(order.date).format()}
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
                  4.95 +
                    products.reduce((acc, x) => acc + x.price * x.amount, 0)
                ).format()}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(OrderListItem);
