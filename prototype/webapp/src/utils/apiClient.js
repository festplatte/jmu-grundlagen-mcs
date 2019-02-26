class ApiClient {
  static baseUrl = "http://localhost:3010";

  jwt = "";

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
