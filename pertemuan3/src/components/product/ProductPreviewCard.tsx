import React from "react";

export type ProductCardProps = {
  name: string;
  price: number;
  onDeleteClick: () => void;
  onEditClick: () => void;
  isDeleting?: boolean;
};

export const ProductPreviewCard = (props: ProductCardProps) => {
  return (
    <div
      style={{
        border: "solid 1px #dedede",
        padding: 15,
        borderRadius: 8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1>{props.name}</h1>
        <h3>Rp. {props.price.toLocaleString("id")}</h3>
      </div>
      <div style={{ display: "flex", gap: 15 }}>
        <button
          style={{
            backgroundColor: "#edb305",
            color: "white",
            border: "0",
            padding: "15px 30px",
            borderRadius: 12,
          }}
          onClick={props.onEditClick}
        >
          Edit
        </button>
        <button
          style={{
            backgroundColor: "#ff6060",
            color: "white",
            border: "0",
            padding: "15px 30px",
            borderRadius: 12,
          }}
          onClick={props.onDeleteClick}
        >
          {props.isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};
