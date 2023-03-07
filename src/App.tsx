import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NotAuthorizedRoutes from "./routes/NotAuthorizedRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { loginAction } from "./store/actions/auth.actions";
import { getAuthSelector } from "./store/reducers/auth.reducer";
import { getTokenStorageData } from "./utils/functions";

const App = () => {
  const isAuth = useSelector(getAuthSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const authData = getTokenStorageData();

    if (authData) {
      dispatch(loginAction(authData));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAuth ? <PrivateRoutes /> : <NotAuthorizedRoutes />;
};

export default App;
