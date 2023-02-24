import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementAction,
  getUsersRequestAction,
} from "../../store/actions/counter.actions";
import { getCountSelector } from "../../store/reducers/counter.reducer";
import styles from "./home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCountSelector);

  const decrease = () => dispatch(decrementAction());

  return (
    <div className={styles["container"]}>
      hello from home page
      <button onClick={decrease}>-</button>
      {counter}{" "}
      <button onClick={() => dispatch(getUsersRequestAction())}>+</button>
    </div>
  );
};

export default HomePage;
