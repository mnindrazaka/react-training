import { useEffect, useState } from "react";
import { ProductListResponse } from "./types";
import { useQuery } from "@tanstack/react-query";

export const fetchProductList = (keyword: string) => {
  return fetch(`http://192.168.1.23:8080/products?keyword=${keyword}`)
    .then((res) => res.json())
    .then((data) => data as ProductListResponse);
};

export const useProductList = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["products", keyword],
    queryFn: () => fetchProductList(keyword),
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refetch();
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [keyword, refetch]);

  return {
    isLoading,
    errorMessage: error?.message,
    products: data?.data ?? [],
    refetch,
    keyword,
    setKeyword,
  };
};
