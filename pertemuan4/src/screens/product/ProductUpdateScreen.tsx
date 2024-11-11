import React, { useEffect } from "react";
import { useProductUpdate } from "../../services/product";
import { ProductForm } from "../../components/product";
import { useRouter } from "next/router";
import { Layout } from "@/components/base/Layout";

export const ProductUpdateScreen = () => {
  const router = useRouter();
  const queryId = router.query.id;
  const id = Array.isArray(queryId) ? queryId[0] : queryId ?? "";

  const { errorMessage, executeUpdate, form } = useProductUpdate(id, () =>
    router.push("/")
  );

  useEffect(() => {
    if (errorMessage) {
      alert("Failed to Update product : " + errorMessage);
    }
  }, [errorMessage]);

  return (
    <Layout>
      <h1>Update Product</h1>
      <ProductForm onValid={executeUpdate} form={form} />
    </Layout>
  );
};
