import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header/header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../config/firebase/firebaseConfig.js";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            {" "}
            SIGNOUT{" "}
          </div>
        ) : (
          <Link to="/signin" className="option">
            {" "}
            LOGIN{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Header);
