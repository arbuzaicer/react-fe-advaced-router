import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthHostSelector,
  getAuthTokenSelector,
} from "../../store/reducers/auth.reducer";

import styles from "./home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAuthTokenSelector);
  const host = useSelector(getAuthHostSelector);

  const getCurrentAirQuality = useCallback(async () => {
    const request = await axios.get("/current/airquality", {
      params: { lon: "30.523333", lat: "50.450001" },
    });
  }, []);

  return (
    <div className={styles["container"]}>
      hello from home page
      <button onClick={getCurrentAirQuality}>Get Current Air Quality</button>
    </div>
  );
};

export default HomePage;
