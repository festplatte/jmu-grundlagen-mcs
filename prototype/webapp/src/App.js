import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Footer from "./components/Footer";
import routes from "./routes";

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
        <Router>
          <>
            <Header />
            <main className="layout">{routes}</main>
            <Footer />
          </>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
