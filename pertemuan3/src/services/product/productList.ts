import { useEffect, useState } from "react";
import { ProductListResponse, ProductPreview } from "./types";

export const fetchProductList = (keyword: string) => {
  return fetch(`http://192.168.1.35:8080/products?keyword=${keyword}`)
    .then((res) => res.json())
    .then((data) => data as ProductListResponse);
};

export const useProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    if (isLoading) {
      fetchProductList(keyword)
        .then((data) => {
          setProducts(data.data);
          setErrorMessage(undefined);
        })
        .catch((error) => {
          setProducts([]);
          setErrorMessage(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoading, keyword]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [keyword]);

  const refetch = () => {
    setIsLoading(true);
  };

  return { isLoading, errorMessage, products, refetch, keyword, setKeyword };
};
