import React from "react";
import { Link } from "react-router-dom";

import { notAuthorizedRoutes } from "../../routes/NotAuthorizedRoutes";

const SignUpPage = () => {
  return (
    <div>
      <h1>Hello form sing up</h1>
      Already have an account?{" "}
      <Link to={notAuthorizedRoutes.singIn.path}>Sign in</Link>
    </div>
  );
};

export default SignUpPage;
