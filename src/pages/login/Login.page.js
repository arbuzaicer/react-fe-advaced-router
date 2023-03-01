import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./login.module.css";
import { notAuthorizedRoutes } from "../../routes/NotAuthorizedRoutes";
import { loginAction } from "../../store/actions/auth.actions";
import { setTokenDataToStore } from "../../utils/functions";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const authData = {
      token: "a7477432a5msh121ac36bcab8f65p189851jsn1f6c5b71b87e",
      host: "air-quality.p.rapidapi.com",
    };

    setTokenDataToStore(authData);
    dispatch(loginAction(authData));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello form login page</h1>
      <form className={styles.form}>
        <input
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={submitHandler}>
          Login
        </button>
      </form>
      <p className={styles.signup}>
        Do not have an account?{" "}
        <Link to={notAuthorizedRoutes.signUp.path}>SingUp</Link>
      </p>
    </div>
  );
};

export default LoginPage;
