import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Search from "./views/Search";
import Product from "./views/Product";
import Register from "./views/Register";
import SignIn from "./views/SignIn";
import Cart from "./views/Cart";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/product" component={Product} />
    <Route path="/register" component={Register} />
    <Route path="/signin" component={SignIn} />
    <Route path="/cart" component={Cart} />
  </Switch>
);
