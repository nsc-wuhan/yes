// @ts-nocheck
import React from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./components/about";
import MyPage from "./pages";
// console.log("window.__POWERED_BY_QIANKUN__", window.__POWERED_BY_QIANKUN__);
const BasicRoute = () => (
  <BrowserRouter basename="/app1">
    <Switch>
      <Route exact path="/" component={MyPage} />
      <Route exact path="/about" component={() => <About />} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
