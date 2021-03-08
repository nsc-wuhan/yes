// @ts-nocheck
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.less";

export default () => {
  useEffect(() => {
    // fetch("/hello?name=kevin&class=101", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "kevin",
    //     sex: 10,
    //   }),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("data", data);
    //   });
  }, []);

  return (
    <div>
      <h1 className={styles.title}>我是app1-react子应用</h1>
      <NavLink to="/about">go about</NavLink>
    </div>
  );
};
