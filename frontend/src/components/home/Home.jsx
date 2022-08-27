import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import { fetchAuthSuccess } from "../../Redux/action";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("Hello");
    navigate("/admin");
  };

  const handleLogout = () => {
    // window.location.reload(false);
    dispatch(fetchAuthSuccess(null));
  };

  return (
    <>
      <Navbar type="HomePage" />
      <div className={styles.container}>
        <div className={styles.maindiv}>
          <div className={styles.homeDiv}>
            <h1>Welcome to Homepage</h1>
          </div>
          <div className={styles.btnDiv}>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
};
