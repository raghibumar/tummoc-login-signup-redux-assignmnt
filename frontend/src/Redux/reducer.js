import * as types from "./actionTypes";
const initialState = {
  token: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_AUTH_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
        error: "",
      };
    case types.FETCH_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
