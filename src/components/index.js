// @ts-nocheck
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./index.less";
import { Select } from "antd";

const { Option } = Select;

export default (props) => {
  const handleJump = () => {
    console.log("props,", props);
    alert("kkk");
    // props.history.push("/about");
  };

  const onChange = (v) => {
    console.log("v==", v);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className={styles.title}>我是app1-react子应用</h1>
      <Link to="/about">go about</Link>
      <div onClick={handleJump}>跳转详情页</div>
      <Select onChange={onChange} defaultValue="1" style={{ width: 160 }}>
        <Option value="1">选项一</Option>
        <Option value="2">选项二</Option>
      </Select>
    </div>
  );
};
