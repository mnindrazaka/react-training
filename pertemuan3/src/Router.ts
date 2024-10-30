import { createContext, useEffect, useState } from "react";

export const useRouter = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    window.history.pushState(null, "", path);
  }, [path]);

  useEffect(() => {
    // .... update URL query string
  }, [params]);

  return { path, setPath, params, setParams };
};

export type RouterContextValue = {
  path: string;
  setPath: (path: string) => void;
  params: Record<string, string>;
  setParams: (params: Record<string, string>) => void;
};

export const RouterContext = createContext<RouterContextValue>({
  params: {},
  path: "",
  setParams: () => {},
  setPath: () => {},
});
