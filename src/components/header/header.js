import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header/header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          {" "}
          SHOP{" "}
        </Link>
        <Link to="/shop" className="option">
          {" "}
          CONTACT{" "}
        </Link>
        <Link to="/shop" className="option">
          {" "}
          LOGIN{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
