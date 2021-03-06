import React from "react";
import "../../styles/cart-icon/cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../redux/actions/cart/cartActions";
import { selectCartItemsCount } from "../../reselect-selectors/cart/cart-selectors.js";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartVisibility, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
