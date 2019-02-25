import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, NativeSelect } from "@material-ui/core";
import { Link } from "react-router-dom";
import buildFormJson from "../utils/buildFormJson";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Register extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  registerUser(e) {
    e.preventDefault();
    const user = buildFormJson(e.currentTarget);
    // TODO extract to external file
    fetch("http://localhost:3010/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Neuanmeldung bei Alternate.de
        </Typography>
        <p>
          Sie haben bereits ein Kundenkonto? Hier können Sie sich{" "}
          <Link to="/signin">einloggen</Link>.
        </p>
        <form className={classes.form} onSubmit={this.registerUser}>
          <Grid container spacing={40}>
            <Grid item md={6} sm={12} xs={12}>
              <h2>Anmeldedaten</h2>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email-Adresse</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Passwort</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <h2>Adresse</h2>
              <Grid container spacing={40}>
                <Grid item xs={6}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="anrede">Anrede</InputLabel>
                    <NativeSelect id="anrede" name="anrede">
                      <option>Frau</option>
                      <option>Herr</option>
                      <option>divers</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="title">Titel</InputLabel>
                    <NativeSelect id="title" name="title">
                      <option>(kein)</option>
                      <option>Dr.</option>
                      <option>Dr. Dr.</option>
                      <option>Prof.</option>
                      <option>Prof. Dr.</option>
                      <option>Prof. Dr. Dr.</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="prename">Vorname</InputLabel>
                <Input id="prename" name="prename" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Nachname</InputLabel>
                <Input id="name" name="name" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="address">Straße und Hausnummer</InputLabel>
                <Input id="address" name="address" />
              </FormControl>
              <Grid container spacing={40}>
                <Grid item xs={4}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="plz">PLZ</InputLabel>
                    <Input id="plz" name="plz" />
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="city">Ort</InputLabel>
                    <Input id="city" name="city" />
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="address-extra">Adresszusatz</InputLabel>
                <Input id="address-extra" name="address-extra" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="country">Land</InputLabel>
                <Input id="country" name="country" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="phone">Telefon</InputLabel>
                <Input id="phone" name="phone" />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Anmelden
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(Register);
