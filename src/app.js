import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import "antd/dist/antd.css";
function render(props) {
  const { container } = props;
  ReactDOM.render(
    <Router {...props} />,
    container
      ? container.querySelector("#home-root")
      : document.querySelector("#home-root")
  );
}

// ReactDOM.render(<Router />, document.getElementById("root"));

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  // console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  props.toggleMenu({ menuStatus: true });
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#home-root")
      : document.querySelector("#home-root")
  );
}
