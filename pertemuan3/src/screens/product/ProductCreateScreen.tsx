import React, { useContext, useEffect } from "react";
import { useProductCreate } from "../../services/product";
import { ProductForm } from "../../components/product";
import { RouterContext } from "../../Router";

export const ProductCreateScreen = () => {
  const { setPath } = useContext(RouterContext);

  const { isLoading, errorMessage, executeCreate, setFieldValue, productBody } =
    useProductCreate(() => setPath("/"));

  useEffect(() => {
    if (errorMessage) {
      alert("Failed to create product : " + errorMessage);
    }
  }, [errorMessage]);

  return (
    <div>
      <h1>Create Product</h1>
      <ProductForm
        isLoading={isLoading}
        onChange={setFieldValue}
        onSubmit={executeCreate}
        values={productBody}
      />
    </div>
  );
};
