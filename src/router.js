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
const Router = BrowserRouter;
// const Router = MemoryRouter;
const BasicRoute = (props) => {
  const IProps = props;
  console.log("IProps", IProps);
  return (
    <Router basename="/app1">
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <MyPage {...props} {...IProps} />}
        />
        <Route exact path="/about" component={() => <About {...IProps} />} />
      </Switch>
    </Router>
  );
};

export default BasicRoute;
