import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Search from "./views/Search";
import Product from "./views/Product";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/product" component={Product} />
  </Switch>
);
