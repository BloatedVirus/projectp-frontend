import React from "react";
import { NavLink } from "react-router-dom";
import style from "./customlink.module.css";

const CustomLink = (props) => {
  return (
    <NavLink
      className={style.link}
      {...props}>
      {props.children}
    </NavLink>
  );
};

export default CustomLink;