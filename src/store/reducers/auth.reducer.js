import { AUTH_LOGIN_TYPE, AUTH_LOGOUT_TYPE } from "../actions/auth.actions";

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_TYPE: {
      return { ...state, isAuth: true };
    }

    case AUTH_LOGOUT_TYPE: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export const getAuthSelector = (state) => state.auth.isAuth;

export default authReducer;
