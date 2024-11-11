import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ProductCardProps = {
  name: string;
  price: number;
  onDeleteClick: () => void;
  onEditClick: () => void;
  isDeleting?: boolean;
};

export const ProductPreviewCard = (props: ProductCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p> Rp. {props.price.toLocaleString("id")}</p>
            <div style={{ display: "flex", gap: 15 }}>
              <Button onClick={props.onEditClick} variant="secondary">
                Edit
              </Button>
              <Button onClick={props.onDeleteClick} variant="destructive">
                Delete
              </Button>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
