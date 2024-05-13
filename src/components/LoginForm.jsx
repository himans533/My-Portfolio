

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-scroll";

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <Link  smooth duration={500}>
  <div class="LogIn">
  <button onClick={() => loginWithRedirect()}>Log In</button>;
  </div>
  </Link>
  );
};

export default LoginForm;