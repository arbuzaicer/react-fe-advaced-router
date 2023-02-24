import authReducer from "./auth.reducer";
import counterReducer from "./counter.reducer";

const rootReducer = {
  auth: authReducer,
  counter: counterReducer,
};

export default rootReducer;
