import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

function About(props) {
  const jump = () => {
    console.log("props", props);
    // props.history.push("/app2");
    window.history.pushState({}, "", "/#/app2");
  };
  return (
    <div>
      <h1>About Page2</h1>
      <a onClick={() => jump()}>跳转到vue应用</a>
    </div>
  );
}

export default withRouter(About);
