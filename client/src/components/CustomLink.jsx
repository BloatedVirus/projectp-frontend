import React from "react";
import { NavLink } from "react-router-dom";

const CustomLink = (props) => {
  return (
    <NavLink
      {...props}>
      {props.children}
    </NavLink>
  );
};

export default CustomLink;