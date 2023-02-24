export const INCREMENT_TYPE = "increment";
export const DECREMENT_TYPE = "decrement";
export const SET_USER = "SET_USER";
export const LOADING = "LOADING";

export const incrementAction = (payload) => {
  return {
    type: INCREMENT_TYPE,
    payload,
  };
};

export const setLoadingAction = (isLoading) => {
  return {
    type: LOADING,
    payload: isLoading,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT_TYPE,
  };
};

export const setUsers = (payload) => {
  return { type: SET_USER, payload };
};

export const getUsersRequestAction = () => async (dispatch) => {
  try {
    dispatch(setLoadingAction(true));
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const resposne = await request.json();

    console.log({ resposne });

    dispatch(setUsers(resposne));
  } finally {
    dispatch(setLoadingAction(false));
  }
};
