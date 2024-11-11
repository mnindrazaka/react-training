import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

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

export const useTokenContext = () => useContext(TokenContext);

export type TokenProviderProps = {
  children: ReactNode;
};

export const TokenProvider = (props: TokenProviderProps) => {
  const contextValue = useToken();
  return (
    <TokenContext.Provider value={contextValue}>
      {props.children}
    </TokenContext.Provider>
  );
};
