import { LoginBody, LoginResponse } from "./types";
import { useMutation } from "@tanstack/react-query";
import { useTokenContext } from "@/Token";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const login = (loginBody: LoginBody) => {
  return fetch("http://192.168.1.23:8080/auth/login", {
    method: "POST",
    body: JSON.stringify(loginBody),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => data as LoginResponse);
};

export const useLogin = (onSuccess?: () => void) => {
  const form = useForm<LoginBody>({
    resolver: zodResolver(
      z.object({ email: z.string(), password: z.string() })
    ),
    mode: "onChange",
  });

  const { setToken } = useTokenContext();

  const { mutateAsync, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data.data.token);
      if (onSuccess) onSuccess();
    },
  });

  const executeLogin = (values: LoginBody) => {
    return mutateAsync(values);
  };

  return {
    executeLogin,
    errorMessage: error?.message,
    form,
  };
};
