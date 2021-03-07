import React from "react";
import { HashRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import MyPage from "./pages";
console.log("window.__POWERED_BY_QIANKUN__", window.__POWERED_BY_QIANKUN__);
const BasicRoute = () => (
  <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/home" : "/"}>
    <Switch>
      <Route exact path="/" component={MyPage} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
