const initialState = {
  cartVisible: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_VISIBILITY":
      return {
        cartVisible: !state.cartVisible
      };
    case "HIDE_CART":
      return {
        cartVisible: false
      };
    default:
      return state;
  }
};

export default cartReducer;
