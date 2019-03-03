import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { NativeSelect } from "@material-ui/core";

function AddressPage() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Rechnungs- und Lieferadresse
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="email">Email-Adresse</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="anrede">Anrede</InputLabel>
            <NativeSelect id="anrede" name="anrede">
              <option>Frau</option>
              <option>Herr</option>
              <option>divers</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl margin="none" fullWidth>
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
        <Grid item sm={6}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="prename">Vorname</InputLabel>
            <Input id="prename" name="prename" />
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="name">Nachname</InputLabel>
            <Input id="name" name="name" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="address">Straße und Hausnummer</InputLabel>
            <Input id="address" name="address" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="plz">PLZ</InputLabel>
            <Input id="plz" name="plz" />
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="city">Ort</InputLabel>
            <Input id="city" name="city" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl margin="none" fullWidth>
            <InputLabel htmlFor="address-extra">Adresszusatz</InputLabel>
            <Input id="address-extra" name="address-extra" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="country">Land</InputLabel>
            <Input id="country" name="country" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl margin="none" required fullWidth>
            <InputLabel htmlFor="phone">Telefon</InputLabel>
            <Input id="phone" name="phone" />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressPage;
