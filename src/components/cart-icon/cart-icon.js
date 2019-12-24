import React, { Fragment } from "react";
import "../../styles/cart-icon/cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../redux/actions/cart/cartActions";
import { selectCartItemsCount } from "../../reselect-selectors/cart/cart-selectors.js";

const CartIcon = ({ toggleCartVisibility, itemCount }) => {
  console.log(itemCount);

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

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
