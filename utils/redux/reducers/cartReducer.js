import * as types from "../types/cartTypes";

const initState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartReducer = (state = initState, action) => {
  const newProducts = [...state.products];
  switch (action.type) {
    case types.CART_ADD_ACTION:
      newProducts.push(action.payload);
      return {
        ...state,
        products: newProducts,
        quantity: (state.quantity + 1),
        total: state.total + action.payload.price * action.payload.quantity,
      };
    case types.CART_RESET_ACTION:
      return {
        ...initState,
      };
    default:
      return state;
  }
};

export default cartReducer;
