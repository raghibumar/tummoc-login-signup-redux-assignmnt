import React, { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { store } from "../../Redux/store";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((store) => store.token.token)
  if (token !== null) {
    return children;
  }
  return <Navigate to="/register" />;
};
