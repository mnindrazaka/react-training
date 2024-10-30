import React, { useContext, useEffect } from "react";
import {
  fetchProductList,
  useProductDelete,
  useProductList,
} from "../../services/product";
import { EmptyView, ErrorView, LoadingView } from "../../components/base";
import { ProductPreviewCard } from "../../components/product";
import { RouterContext } from "../../Router";

export const ProductListScreen = () => {
  const { products, isLoading, errorMessage, refetch, keyword, setKeyword } =
    useProductList();

  const {
    errorMessage: errorMessageDelete,
    executeDelete,
    isLoading: isDeleting,
    productId: deletedProductId,
  } = useProductDelete(refetch);

  useEffect(() => {
    if (errorMessageDelete) {
      alert("failed to delete product : " + errorMessageDelete);
    }
  }, [errorMessageDelete]);

  const { setPath, setParams } = useContext(RouterContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      <input
        type="text"
        placeholder="Search Product Name"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        style={{ padding: "15px 30px", fontSize: 18 }}
      />
      {isLoading ? (
        <LoadingView />
      ) : errorMessage ? (
        <ErrorView message={errorMessage} onRetry={refetch} />
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductPreviewCard
            key={product.productId}
            name={product.productName}
            price={product.price}
            onDeleteClick={() => executeDelete(product.productId)}
            onEditClick={() => {
              setPath("/update");
              setParams({ productId: product.productId });
            }}
            isDeleting={isDeleting && product.productId === deletedProductId}
          />
        ))
      ) : (
        <EmptyView title="Products is Empty" />
      )}
    </div>
  );
};
