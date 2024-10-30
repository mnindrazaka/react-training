import React, { useContext, useEffect } from "react";
import { useProductUpdate } from "../../services/product";
import { ProductForm } from "../../components/product";
import { RouterContext, useRouter } from "../../Router";

export const ProductUpdateScreen = () => {
  const { params, setPath } = useContext(RouterContext);

  const { isLoading, errorMessage, executeUpdate, setFieldValue, productBody } =
    useProductUpdate(params.productId ?? "", () => setPath("/"));

  useEffect(() => {
    if (errorMessage) {
      alert("Failed to Update product : " + errorMessage);
    }
  }, [errorMessage]);

  return (
    <div>
      <h1>Update Product</h1>
      <ProductForm
        isLoading={isLoading}
        onChange={setFieldValue}
        onSubmit={executeUpdate}
        values={productBody}
      />
    </div>
  );
};
