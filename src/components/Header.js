import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "",
    //   border: isActive ? "1px solid rgb(120, 120, 120)" : "",
    };
  };
  return (
    <>
      <nav>
        <NavLink style={getActiveStyle} to="/stopwatch">
          Stop Watch
        </NavLink>{" "}
        <NavLink style={getActiveStyle} to="/timer">
          Timer
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
