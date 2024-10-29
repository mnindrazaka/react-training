import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
};

const useProductList = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
        .then((res) => res.json())
        .then((res) => {
          setIsLoading(false);
          setProducts(res.products);
        });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return { inputValue, setInputValue, products, isLoading };
};

export const ProductList = () => {
  const { inputValue, setInputValue, isLoading, products } = useProductList();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="search product"
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ol>
          {products.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))}
        </ol>
      )}
    </div>
  );
};
