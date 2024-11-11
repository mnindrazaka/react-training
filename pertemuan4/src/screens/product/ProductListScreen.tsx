import React, { useEffect } from "react";
import {
  ProductListResponse,
  useProductDelete,
  useProductList,
} from "@/services/product";
import { EmptyView, ErrorView } from "@/components/base";
import { ProductPreviewCard } from "@/components/product";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Layout } from "@/components/base/Layout";

export type ProductListScreenProps = {
  productListResponse?: ProductListResponse;
};

export const ProductListScreen = ({
  productListResponse,
}: ProductListScreenProps) => {
  const { products, isLoading, errorMessage, refetch, keyword, setKeyword } =
    useProductList({ productListResponse });

  const {
    errorMessage: errorMessageDelete,
    executeDelete,
    isLoading: isDeleting,
    productId: deletedProductId,
  } = useProductDelete(() => refetch());

  const router = useRouter();

  useEffect(() => {
    if (errorMessageDelete) {
      alert("failed to delete product : " + errorMessageDelete);
    }
  }, [errorMessageDelete]);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <div style={{ display: "flex", gap: 15 }}>
          <Input
            type="text"
            placeholder="Search Product Name"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <Button onClick={() => router.push("/products/create")}>
            Create
          </Button>
        </div>

        {isLoading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <Skeleton style={{ width: "100%", height: 100 }} />
            <Skeleton style={{ width: "100%", height: 100 }} />
            <Skeleton style={{ width: "100%", height: 100 }} />
            <Skeleton style={{ width: "100%", height: 100 }} />
            <Skeleton style={{ width: "100%", height: 100 }} />
          </div>
        ) : errorMessage ? (
          <ErrorView message={errorMessage} onRetry={refetch} />
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductPreviewCard
              key={product.productId}
              name={product.productName}
              price={product.price}
              onDeleteClick={() => executeDelete(product.productId)}
              onEditClick={() => router.push(`/products/${product.productId}`)}
              isDeleting={isDeleting && product.productId === deletedProductId}
            />
          ))
        ) : (
          <EmptyView title="Products is Empty" />
        )}
      </div>
    </Layout>
  );
};
