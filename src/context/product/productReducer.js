export const types = {
  setProductState: "[PRODUCT] Set Product State",
  setError: "[PRODUCT] Set Error",
};

const productReducer = (state, action = {}) => {
  switch (action.type) {
    case types.setProductState:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
