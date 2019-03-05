import React from "react";
import Typography from "@material-ui/core/Typography";
import PaymentForm from "./PaymentForm";

class PaymentPage extends React.Component {
  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Zahlungsdetails
        </Typography>
        <PaymentForm />
        <p>* Pflichtfeld</p>
      </>
    );
  }
}

export default PaymentPage;
