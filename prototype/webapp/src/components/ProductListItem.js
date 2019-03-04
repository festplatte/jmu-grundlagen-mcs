import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import numeral from "../utils/numeral";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import { Grid, Fab } from "@material-ui/core";
import { ExposurePlus1, ExposureNeg1, Delete } from "@material-ui/icons";

const styles = theme => ({
  card: {
    display: "flex",
    margin: theme.spacing.unit
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    "background-size": "160px 160px",
    "background-repeat": "no-repeat",
    width: 160
  },
  button: {
    margin: theme.spacing.unit
  }
});

class ProductListItem extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
    onRemove: PropTypes.func,
    onIncreaseAmount: PropTypes.func,
    onDecreaseAmount: PropTypes.func
  };

  render() {
    const { classes, product } = this.props;

    return (
      <Card className={classes.card}>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={process.env.PUBLIC_URL + "/produktbilder/" + product.image}
            //image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
            title="Image title"
          />
        </Hidden>
        <div className={classes.cardDetails}>
          <CardContent>
            <Grid container>
              <Grid item sm={6} xs={12}>
                <Typography component="h2" variant="h5">
                  {product.title}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {product.description}
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography variant="h5" align="right" paragraph>
                  {numeral(product.price).format()}
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography variant="h5" align="right" component="span">
                  <Fab
                    size="small"
                    className={classes.button}
                    aria-label="weniger"
                    onClick={this.props.onDecreaseAmount}
                  >
                    <ExposureNeg1 />
                  </Fab>{" "}
                  {product.amount}{" "}
                  <Fab
                    size="small"
                    className={classes.button}
                    aria-label="mehr"
                    onClick={this.props.onIncreaseAmount}
                  >
                    <ExposurePlus1 />
                  </Fab>
                  <br />
                  <Button variant="contained" onClick={this.props.onRemove}>
                    <Delete /> entfernen
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(ProductListItem);
