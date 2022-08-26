import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Hello");
    navigate("/admin");
  };

  const handleLogout = () => {
    window.location.reload(false);
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
