import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header/header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../config/firebase/firebaseConfig.js";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCartVisible } from "../../reselect-selectors/cart/cart-selectors";
import { selectCurrentUser } from "../../reselect-selectors/user/user-selectors";

const Header = ({ currentUser, cartVisible }) => {
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
        <CartIcon></CartIcon>
      </div>
      {cartVisible ? <CartDropdown></CartDropdown> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisible: selectCartVisible
});

export default connect(
  mapStateToProps,
  null
)(Header);
