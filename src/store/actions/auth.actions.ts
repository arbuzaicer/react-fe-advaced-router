export const AUTH_LOGIN_TYPE = "login";
export const AUTH_LOGOUT_TYPE = "logout";

export const loginAction = ({
  token,
  host,
}: {
  token: string;
  host: string;
}) => {
  return {
    type: AUTH_LOGIN_TYPE,
    payload: { token, host },
  };
};

export const logoutAction = () => {
  return {
    type: AUTH_LOGOUT_TYPE,
  };
};
