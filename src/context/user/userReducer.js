export const types = {
  setUserState: "[USER] Set User State",
  setError: "[USER] Set Error",
};

const userReducer = (state, action = {}) => {
  switch (action.type) {
    case types.setUserState:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
