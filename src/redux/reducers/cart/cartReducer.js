import cartActionTypes from "../../actiontypes/cart/cartActionTypes";
import {
  utilsAddItemToCart,
  utilsRemoveItemFromCart
} from "../../utils/cart/cart-utils";

const initialState = {
  cartVisible: false,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  const { cartVisible, cartItems } = state;
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartVisible: !cartVisible
      };
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: utilsAddItemToCart(cartItems, action.payload)
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: utilsRemoveItemFromCart(cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
