import cartActionTypes from "../../actiontypes/cart/cartActionTypes";

export const toggleCartVisibility = () => ({
  type: cartActionTypes.TOGGLE_CART_VISIBILITY
});

export const addItemToCart = cartItem => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: cartItem
});

export const removeItemFromCart = cartItem => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: cartItem
});
