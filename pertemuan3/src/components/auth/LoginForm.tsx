import React from "react";

export type LoginFormProps = {
  onChange: (name: "email" | "password", value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  values: {
    email: string;
    password: string;
  };
};

export const LoginForm = (props: LoginFormProps) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => props.onChange("email", event.target.value)}
          value={props.values.email}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          onChange={(event) => props.onChange("password", event.target.value)}
          value={props.values.password}
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
