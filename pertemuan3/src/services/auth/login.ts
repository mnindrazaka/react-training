import { useContext, useEffect, useState } from "react";
import { LoginBody, LoginResponse } from "./types";
import { TokenContext } from "../../Token";

export const login = (loginBody: LoginBody) => {
  return fetch("http://192.168.1.35:8080/auth/login", {
    method: "POST",
    body: JSON.stringify(loginBody),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => data as LoginResponse);
};

const initialValue: LoginBody = {
  email: "",
  password: "",
};

export const useLogin = (onSuccess?: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loginBody, setLoginBody] = useState<LoginBody>(initialValue);
  const { setToken } = useContext(TokenContext);

  useEffect(() => {
    if (isLoading) {
      login(loginBody)
        .then(({ data }) => {
          setToken(data.token);
          setLoginBody(initialValue);
          onSuccess && onSuccess();
          setErrorMessage(undefined);
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  const executeLogin = () => {
    setErrorMessage(undefined);
    setIsLoading(true);
  };

  const setFieldValue = (name: keyof LoginBody, value: string) => {
    setLoginBody({ ...loginBody, [name]: value });
  };

  return { isLoading, executeLogin, errorMessage, setFieldValue, loginBody };
};
