import { useEffect, useState } from "react";
import { ProductCreateBody, ProductCreateResponse } from "./types";

export const createProduct = (product: ProductCreateBody) => {
  return fetch("http://192.168.1.23:8080/products/create", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => data as ProductCreateResponse);
};

const initialValue: ProductCreateBody = {
  name: "",
  description: "",
};

export const useProductCreate = (onSuccess?: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [productBody, setProductBody] =
    useState<ProductCreateBody>(initialValue);

  useEffect(() => {
    if (isLoading) {
      createProduct(productBody)
        .then(() => {
          setProductBody(initialValue);
          onSuccess && onSuccess();
          setErrorMessage(undefined);
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  const executeCreate = () => {
    setErrorMessage(undefined);
    setIsLoading(true);
  };

  const setFieldValue = (name: keyof ProductCreateBody, value: string) => {
    setProductBody({ ...productBody, [name]: value });
  };

  return { isLoading, executeCreate, errorMessage, setFieldValue, productBody };
};
