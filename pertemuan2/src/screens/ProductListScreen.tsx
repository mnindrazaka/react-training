import React from "react";
import { useProductList } from "../services/product";

export const ProductListScreen = () => {
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
