import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";
import { fetchToken } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // console.log(data)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.token.token);
  console.log(token);
  useEffect(() => {
    if (token != null) {
      navigate("/");
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(fetchToken(data));
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.upDiv}>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="email"
              placeholder="enter email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br />
            <br />

            <input
              required
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

export default Login;
