import { useEffect } from "react";
import { ProductDetailResponse, ProductUpdateBody } from "./types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const formSchema = z.object({
  id: z.string(),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  description: z.string(),
});

export const useProductUpdate = (productId: string, onSuccess?: () => void) => {
  const form = useForm<ProductUpdateBody>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { data } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => fetchProductById(productId),
  });

  useEffect(() => {
    if (data && productId) {
      form.setValue("id", productId);
      form.setValue("name", data.data.productName);
      form.setValue("description", data.data.productDescription);
    }
  }, [data, form, productId]);

  const { error, mutateAsync } = useMutation({
    mutationFn: updateProduct,
    onSuccess,
  });

  const executeUpdate = (values: ProductUpdateBody) => {
    return mutateAsync(values);
  };

  return {
    executeUpdate,
    errorMessage: error?.message,
    form,
  };
};
