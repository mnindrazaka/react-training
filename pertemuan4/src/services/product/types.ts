import { Response, ResponseList } from "../base";

export type ProductPreview = {
  productId: string;
  productName: string;
  productImage: string;
  rating: number;
  price: number;
  color: string[][];
  categoryName: string;
  createdAt: string;
};

export type ProductDetail = {
  productId: string;
  productName: string;
  productImage: string[];
  productDescription: string;
  categoryName: string;
  rating: {
    totalPoint: number;
    totalReview: number;
  };
  variant: {
    variantId: string;
    name: string;
    color: string[];
    thumbnail: string;
    image: string[];
    price: 2000;
    stocks: 0;
  }[];
  productSpecification: {
    name: string;
    value: string;
  }[];
  createdAt: string;
};

export type ProductListResponse = ResponseList<ProductPreview>;

export type ProductDetailResponse = Response<ProductDetail>;

export type ProductDeleteResponse = Response<string>;

export type ProductCreateResponse = Response<string>;
export type ProductCreateBody = { name: string; description: string };

export type ProductUpdateResponse = Response<string>;
export type ProductUpdateBody = {
  id: string;
  name: string;
  description: string;
};
