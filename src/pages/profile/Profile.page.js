import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./profile.module.css";

const ProfilePage = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <div className={styles["container"]}>
      Hello from profile data from state from other route is:{" "}
      {location?.state?.value}
    </div>
  );
};

export default ProfilePage;
