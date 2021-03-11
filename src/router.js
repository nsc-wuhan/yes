// @ts-nocheck
import React from "react";
import {
  HashRouter,
  Route,
  Switch,
  BrowserRouter,
  MemoryRouter,
} from "react-router-dom";
import About from "./components/about";
import MyPage from "./pages";
// const Router = HashRouter;
// const Router = BrowserRouter;
const Router = MemoryRouter;
const BasicRoute = () => (
  <Router basename="/app1">
    <Switch>
      <Route exact path="/" component={(props) => <MyPage {...props} />} />
      <Route exact path="/about" component={() => <About />} />
    </Switch>
  </Router>
);

export default BasicRoute;
