import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../routes/Routes";

import styles from "./home.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const navigateHandler = () => {
    navigate(appRoutes.profile.path, {
      state: {
        value: inputValue,
      },
    });
  };

  return (
    <div className={styles["container"]}>
      hello from home page
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={navigateHandler}>Go to somwhere</button>
    </div>
  );
};

export default HomePage;
