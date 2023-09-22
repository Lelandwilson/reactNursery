import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";

const SharedNav = (props) => {

  return (
    <> 
      <StyledNavbar onShowCart={props.onShowCart} />
      <Outlet />
    </>
  );
};
export default SharedNav;
