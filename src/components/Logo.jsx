import React from "react";
import LogoImage from "../assets/PContent.png";

function Logo({ width = "100px", height = "50px" }) {
  return <img src={LogoImage} style={{ width, height }} alt="logo" />;
}

export default Logo;
