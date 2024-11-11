import { useEffect, useState } from "react";
import { ProductDetailResponse, ProductUpdateBody } from "./types";

export const fetchProductById = (productId: string) => {
  return fetch(`http://192.168.1.23:8080/products/${productId}`)
    .then((res) => res.json())
    .then((data) => data as ProductDetailResponse);
};

export const updateProduct = (product: ProductUpdateBody) => {
  return fetch("http://192.168.1.23:8080/products/update", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => data as ProductUpdateBody);
};

const initialValue: ProductUpdateBody = {
  id: "",
  name: "",
  description: "",
};

export const useProductUpdate = (productId: string, onSuccess?: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [productBody, setProductBody] =
    useState<ProductUpdateBody>(initialValue);

  useEffect(() => {
    fetchProductById(productId).then(({ data }) =>
      setProductBody({
        id: productId,
        name: data.productName,
        description: data.productDescription,
      })
    );
  }, [productId]);

  useEffect(() => {
    if (isLoading) {
      updateProduct(productBody)
        .then(() => {
          setProductBody(initialValue);
          onSuccess && onSuccess();
          setErrorMessage(undefined);
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  const executeUpdate = () => {
    setFieldValue("id", productId);
    setErrorMessage(undefined);
    setIsLoading(true);
  };

  const setFieldValue = (name: keyof ProductUpdateBody, value: string) => {
    setProductBody({ ...productBody, [name]: value });
  };

  return { isLoading, executeUpdate, errorMessage, setFieldValue, productBody };
};
