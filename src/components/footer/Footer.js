import React from "react";
import { Link } from "react-router-dom";

import { appRoutes } from "../../routes/Routes";

const Footer = () => {
  return (
    <div>
      <Link to={appRoutes.contacts.path}>Contacts</Link>
    </div>
  );
};

export default Footer;
