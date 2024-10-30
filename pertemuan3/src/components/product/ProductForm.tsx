import React from "react";

export type ProductFormProps = {
  onChange: (name: "name" | "description", value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  values: {
    name: string;
    description: string;
  };
};

export const ProductForm = (props: ProductFormProps) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => props.onChange("name", event.target.value)}
          value={props.values.name}
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          onChange={(event) =>
            props.onChange("description", event.target.value)
          }
          value={props.values.description}
        />
      </div>
      <div>
        <button disabled={props.isLoading} onClick={props.onSubmit}>
          {props.isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};
