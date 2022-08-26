import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ type }) => {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <h1>Authentication App</h1>
        </div>
        {/* <div>
          <h2>{type}</h2>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
