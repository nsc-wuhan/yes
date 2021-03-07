import React, { useEffect } from "react";
import styles from "./index.less";

export default () => {
  useEffect(() => {
    fetch("/hello?name=kevin&class=101", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "kevin",
        sex: 10,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.title}>组件样板</h1>
    </div>
  );
};
