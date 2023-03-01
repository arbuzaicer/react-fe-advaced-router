import axios from "axios";
import React, { useCallback } from "react";
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

  const getQualityHistory = useCallback(async () => {
    const request = await axios.get("/history/airqualityasdjsabvdsa", {
      params: { lon: "-78.638", lat: "35.779" },
    });

    console.log(request);
  }, []);

  const getQualityForecast = useCallback(async () => {
    const request = await axios.get("/forecast/airquality", {
      params: { lat: "35.779", lon: "-78.638", hours: "72" },
    });

    console.log(request);
  }, []);

  const getCurrentAirQuality = useCallback(async () => {
    const request = await axios.get("/current/airquality", {
      params: { lon: "30.523333", lat: "50.450001" },
    });

    console.log(request);
  }, []);

  return (
    <div className={styles["container"]}>
      hello from home page
      <button onClick={getQualityHistory}>Get Quality History</button>
      <button onClick={getQualityForecast}>Get Quality forecast</button>
      <button onClick={getCurrentAirQuality}>Get Current Air Quality</button>
    </div>
  );
};

export default HomePage;
