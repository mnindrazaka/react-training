import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

export type FieldTextareaProps<FormValues extends FieldValues> = {
  name: Path<FormValues>;
  label: string;
  placeholder: string;
};

export const FieldTextarea = <FormValues extends FieldValues>({
  name,
  label,
  placeholder,
}: FieldTextareaProps<FormValues>) => {
  const form = useFormContext<FormValues>();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
