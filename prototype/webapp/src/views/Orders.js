import React from "react";
import OrderListItem from "../components/OrderListItem";
import apiClient from "../utils/apiClient";

class Orders extends React.Component {
  state = {
    orders: []
  };

  updateOrders = () => {
    apiClient.getOrders().then(res => {
      if (res.status === 200) {
        res.json().then(orders => this.setState({ orders }));
      }
    });
  };

  componentDidMount = () => {
    this.updateOrders();
  };

  componentWillReceiveProps = nextProps => {
    this.updateOrders();
  };

  render() {
    return (
      <>
        <h1>Meine Bestellungen</h1>
        {this.state.orders.map((order, i) => (
          <OrderListItem key={i} order={order} />
        ))}
      </>
    );
  }
}

export default Orders;
