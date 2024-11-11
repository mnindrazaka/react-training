import { useState } from "react";
import { ProductDeleteResponse } from "./types";
import { useMutation } from "@tanstack/react-query";

export const deleteProduct = (productId: string) => {
  return fetch(`http://192.168.1.23:8080/products/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: productId,
    }),
  })
    .then((res) => res.json())
    .then((data) => data as ProductDeleteResponse);
};

export const useProductDelete = (onSuccess?: (productId: string) => void) => {
  const [productId, setProductId] = useState<string>();
  const { isPending, error, mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      if (onSuccess && productId) onSuccess(productId);
    },
  });

  const executeDelete = (productId: string) => {
    setProductId(productId);
    mutate(productId);
  };

  return {
    isLoading: isPending,
    executeDelete,
    errorMessage: error?.message,
    productId,
  };
};
