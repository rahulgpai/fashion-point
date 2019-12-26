import React from "react";
import "../../styles/checkout/checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../reselect-selectors/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span> PRODUCT </span>
      </div>
      <div className="header-block">
        <span> DESCRIPTION </span>
      </div>
      <div className="header-block">
        <span> QUANTITY</span>
      </div>
      <div className="header-block">
        <span> PRICE </span>
      </div>
      <div className="header-block">
        <span>REMOVE</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
    ))}
    <span className="total">Total: ${cartTotal}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
