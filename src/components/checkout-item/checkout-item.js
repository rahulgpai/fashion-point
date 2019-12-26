import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from "../../redux/actions/cart/cartActions";

import "../../styles/checkout-item/checkout-item.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
}) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
