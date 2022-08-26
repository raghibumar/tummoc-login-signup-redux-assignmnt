import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import styles from "./Register.module.css";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mob: "",
    password: "",
  });
  // console.log(data);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mob, password, isAdmin } = data;
    let phone = Number(mob);

    axios
      .post("https://login-signup-using-redux.herokuapp.com/api/register", {
        name,
        email,
        phone,
        password,
      })
      .then((res) => navigate("/login"))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.register}>
          <div className={styles.upDiv}>
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="enter email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter phone number"
              onChange={(e) => setData({ ...data, mob: e.target.value })}
            />
            <br />
            <br />
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <br />
            <br />

            <div className={styles.butnDiv}>
              <input
                type="submit"
                placeholder="Submit"
                className={styles.submit}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
