// @ts-nocheck
import React from "react";
import MyComponent from "../components";
import styles from "./index.less";
export default function Index(props) {
  return (
    <div className={styles["box"]}>
      <MyComponent {...props} />
    </div>
  );
}
