import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ComponentProps } from "react";

export type FieldInputProps<FormValues extends FieldValues> = {
  name: Path<FormValues>;
  label: string;
} & ComponentProps<"input">;

export const FieldInput = <FormValues extends FieldValues>({
  name,
  label,
  ...inputProps
}: FieldInputProps<FormValues>) => {
  const form = useFormContext<FormValues>();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...inputProps} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
