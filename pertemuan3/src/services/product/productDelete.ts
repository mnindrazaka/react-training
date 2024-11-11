import { useEffect, useState } from "react";
import { ProductDeleteResponse } from "./types";

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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [productId, setProductId] = useState<string>();

  useEffect(() => {
    if (isLoading && productId) {
      deleteProduct(productId)
        .then(() => {
          onSuccess && onSuccess(productId);
          setErrorMessage(undefined);
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => {
          setIsLoading(false);
          setProductId(undefined);
        });
    }
  }, [isLoading, productId]);

  const executeDelete = (productId: string) => {
    setErrorMessage(undefined);
    setIsLoading(true);
    setProductId(productId);
  };

  return { isLoading, executeDelete, errorMessage, productId };
};
