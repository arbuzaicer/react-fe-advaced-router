import { AUTH_LOGOUT_TYPE } from "../actions/auth.actions";
import {
  DECREMENT_TYPE,
  INCREMENT_TYPE,
  LOADING,
  SET_USER,
} from "../actions/counter.actions";

const initialState = {
  count: 0,
  users: null,
  isLoading: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TYPE: {
      return { ...state, count: state.count + 1, users: action.payload };
    }

    case DECREMENT_TYPE: {
      return { ...state, count: state.count - 1 };
    }

    case AUTH_LOGOUT_TYPE: {
      return state;
    }

    case SET_USER: {
      return { ...state, users: action.payload };
    }

    case LOADING: {
      return { ...state, isLoading: action.payload };
    }

    default: {
      return state;
    }
  }
};

export const getCountSelector = (state) => state.counter.count;

export default counterReducer;
