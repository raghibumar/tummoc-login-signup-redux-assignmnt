import * as types from "./actionTypes";
import Axios from "axios";
const fetchAuthRequest = (payload) => {
  return {
    type: types.FETCH_AUTH_REQUEST,
    payload,
  };
};

export const fetchAuthSuccess = (payload) => {
  return {
    type: types.FETCH_AUTH_SUCCESS,
    payload,
  };
};

const fetchAuthFailure = (payload) => {
  return {
    type: types.FETCH_AUTH_FAILURE,
    payload,
  };
};
const fetchToken = (data) => {
  const { email, password } = data;
  console.log(email);
  console.log(password);

  return (dispatch) => {
    dispatch(fetchAuthRequest());
    Axios.post("https://login-signup-using-redux.herokuapp.com/api/login", {
      email: email,
      password: password,
    })
      .then((r) => {
        dispatch(fetchAuthSuccess(r.data.accessToken));
        // console.log(r.data);
      })
      .catch((e) => dispatch(fetchAuthFailure(e.data)));
  };
};

export { fetchToken };
