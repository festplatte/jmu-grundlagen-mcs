import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import DateFnsUtils from "@date-io/date-fns";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import deLocale from "date-fns/locale/de";
import Footer from "./components/Footer";
import routes from "./routes";
import store from "./redux/store";

const theme = createMuiTheme();

const styles = {
  "@global": {
    ".layout": {
      width: "auto",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }
  }
};

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
          <Provider store={store}>
            <Router>
              <>
                <Header />
                <main className="layout">{routes}</main>
                <Footer />
              </>
            </Router>
          </Provider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
