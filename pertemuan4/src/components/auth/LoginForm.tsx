import React from "react";
import { Button } from "../ui/button";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { FieldInput } from "../base/FieldInput";
import { Form } from "../ui/form";

export type LoginFormProps<FormValues extends FieldValues, Response> = {
  form: UseFormReturn<FormValues>;
  onValid: (values: FormValues) => Promise<Response>;
};

export const LoginForm = <FormValues extends FieldValues, Response>({
  form,
  onValid,
}: LoginFormProps<FormValues, Response>) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
      >
        <FieldInput name="email" label="Email" placeholder="Email" />
        <FieldInput
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
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
