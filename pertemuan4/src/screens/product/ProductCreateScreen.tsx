import React, { useEffect } from "react";
import { useProductCreate } from "../../services/product";
import { ProductForm } from "../../components/product";
import { useRouter } from "next/router";
import { Layout } from "@/components/base/Layout";

export const ProductCreateScreen = () => {
  const router = useRouter();
  const { errorMessage, executeCreate, form } = useProductCreate(() =>
    router.push("/")
  );

  useEffect(() => {
    if (errorMessage) {
      alert("Failed to create product : " + errorMessage);
    }
  }, [errorMessage]);

  return (
    <Layout>
      <h1>Create Product</h1>
      <ProductForm form={form} onValid={executeCreate} />
    </Layout>
  );
};
