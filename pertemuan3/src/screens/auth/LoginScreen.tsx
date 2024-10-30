import React, { useContext, useEffect } from "react";
import { useLogin } from "../../services/auth";
import { LoginForm } from "../../components/auth";
import { RouterContext } from "../../Router";
import { TokenContext } from "../../Token";

export const LoginScreen = () => {
  const { setPath } = useContext(RouterContext);

  const { isLoading, errorMessage, executeLogin, setFieldValue, loginBody } =
    useLogin(() => setPath("/profile"));

  useEffect(() => {
    if (errorMessage) {
      alert("Failed to login : " + errorMessage);
    }
  }, [errorMessage]);

  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (token) {
      setPath("/profile");
    }
  }, [token]);

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        isLoading={isLoading}
        onChange={setFieldValue}
        onSubmit={executeLogin}
        values={loginBody}
      />
    </div>
  );
};
