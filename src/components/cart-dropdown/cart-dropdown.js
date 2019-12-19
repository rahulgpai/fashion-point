import React from "react";
import "../../styles/cart-dropdown/cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropdown;
