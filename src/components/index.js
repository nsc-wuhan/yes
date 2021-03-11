// @ts-nocheck
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./index.less";

export default (props) => {
  const handleJump = () => {
    console.log("props,", props);
    props.history.push("/about");
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className={styles.title}>我是app1-react子应用</h1>
      <Link to="/about">go about</Link>
      <p>
        <div onClick={handleJump}>跳转详情页</div>
      </p>
    </div>
  );
};
