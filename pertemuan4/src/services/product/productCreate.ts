import { zodResolver } from "@hookform/resolvers/zod";
import { ProductCreateBody, ProductCreateResponse } from "./types";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const createProduct = (product: ProductCreateBody) => {
  return fetch("http://192.168.1.23:8080/products/create", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data: ProductCreateResponse) => {
      if (data.status === "failed") {
        throw new Error(data.message);
      } else {
        return data;
      }
    });
};

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  description: z.string(),
});

export const useProductCreate = (onSuccess?: () => void) => {
  const form = useForm<ProductCreateBody>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { mutateAsync, error } = useMutation({
    mutationFn: createProduct,
    onSuccess,
  });

  const executeCreate = (values: ProductCreateBody) => {
    return mutateAsync(values);
  };

  return {
    executeCreate,
    errorMessage: error?.message,
    form,
  };
};
