class ApiClient {
  static baseUrl = "http://localhost:3010";

  jwt = null;

  async registerUser(user) {
    return this.handleResponse(
      fetch(`${ApiClient.baseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
    );
  }

  async authenticateUser(user) {
    return fetch(`${ApiClient.baseUrl}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => {
      if (res && res.status === 200) {
        res.text().then(jwt => (this.jwt = jwt));
      }
      return res;
    });
  }

  async placeOrder(order) {
    return fetch(`${ApiClient.baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });
  }

  async getOrders() {
    return fetch(`${ApiClient.baseUrl}/orders`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: this.jwt ? `Bearer ${this.jwt}` : undefined
      }
    });
  }

  handleResponse(response) {
    return response
      .then(res => ({
        response: res,
        hasSuccess: res.status >= 200 && res.status < 300,
        hasError: res.status >= 400,
        errorMsg:
          res.status === 400
            ? "Die Eingabe war nicht korrekt. Bitte überprüfen Sie die Werte."
            : res.status === 500
            ? "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
            : null
      }))
      .catch(err => ({
        response: null,
        hasSuccess: false,
        hasError: true,
        errorMsg: err
      }));
  }
}

export default new ApiClient();
