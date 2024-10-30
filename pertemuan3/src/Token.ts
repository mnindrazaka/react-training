import { createContext, useEffect, useState } from "react";

export const useToken = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return { token, setToken };
};

export type TokenContextValue = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const TokenContext = createContext<TokenContextValue>({
  token: null,
  setToken: () => {},
});
