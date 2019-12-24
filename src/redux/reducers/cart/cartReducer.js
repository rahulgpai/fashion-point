import cartActionTypes from "../../actiontypes/cart/cartActionTypes";
import { utilsAddItemToCart } from "../../utils/cart/cart-utils";

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
      console.log(state);
      return {
        ...state,
        cartItems: utilsAddItemToCart(cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
