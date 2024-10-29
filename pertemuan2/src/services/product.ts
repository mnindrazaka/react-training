import React from "react";

export type ApiListResponse = {
  total: number;
  skip: number;
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
};

export const fetchProductList = (query: string) => {
  return fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => data as ApiListResponse & { products: Product[] });
};

export const useProductList = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      fetchProductList(inputValue).then((data) => {
        setIsLoading(false);
        setProducts(data.products);
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return { inputValue, setInputValue, products, isLoading };
};
