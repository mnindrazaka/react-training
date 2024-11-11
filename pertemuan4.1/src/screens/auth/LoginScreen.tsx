import React, { useEffect } from "react";
import { useLogin } from "@/services/auth";
import { LoginForm } from "@/components/auth";
import { useRouter } from "next/router";
import { Layout } from "@/components/base/Layout";
import { useTokenContext } from "@/Token";

export const LoginScreen = () => {
  const router = useRouter();

  const { errorMessage, executeLogin, form } = useLogin(() =>
    router.push("/profile")
  );

  useEffect(() => {
    if (errorMessage) {
      alert("Failed to login : " + errorMessage);
    }
  }, [errorMessage]);

  const { token } = useTokenContext();
  useEffect(() => {
    if (token) router.replace("/");
  }, [router, token]);

  return (
    <Layout>
      <h1>Login</h1>
      <LoginForm form={form} onValid={executeLogin} />
    </Layout>
  );
};
