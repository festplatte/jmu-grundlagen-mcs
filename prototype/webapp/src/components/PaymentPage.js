import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "material-ui-pickers";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { NativeSelect } from "@material-ui/core";

class PaymentForm extends React.Component {
  state = {
    paymentDate: new Date()
  };

  handleDateChange = date => {
    this.setState({ paymentDate: date });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Zahlungsdetails
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <FormControl margin="none" fullWidth>
              <InputLabel htmlFor="method">Zahlungsmethode</InputLabel>
              <NativeSelect id="method" name="method">
                <option>Mastercard</option>
                <option>Visa</option>
                <option>Paypal</option>
                <option>Überweisung</option>
                <option>Lastschrift</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} />
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Karteninhaber" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Kartennummer"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              views={["year", "month"]}
              label="Gültigkeitsdatum"
              minDate={new Date()}
              value={this.state.paymentDate}
              onChange={this.handleDateChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Drei Ziffern auf der Rückseite"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;
