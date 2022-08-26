import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from '../home/Home'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </>
  );
};
