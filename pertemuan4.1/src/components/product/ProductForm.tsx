import React from "react";
import { Button } from "../ui/button";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Form } from "../ui/form";
import { FieldInput } from "../base/FieldInput";
import { FieldTextarea } from "../base/FieldTextarea";

export type ProductFormProps<FormValues extends FieldValues, Response> = {
  form: UseFormReturn<FormValues>;
  onValid: (values: FormValues) => Promise<Response>;
};

export const ProductForm = <FormValues extends FieldValues, Response>({
  form,
  onValid,
}: ProductFormProps<FormValues, Response>) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
      >
        <FieldInput name="name" label="Name" placeholder="Input Product Name" />
        <FieldTextarea
          name="description"
          label="Description"
          placeholder="Input Product Description"
        />
        <div>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
