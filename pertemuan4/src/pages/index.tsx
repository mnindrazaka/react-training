import { ProductListScreen, ProductListScreenProps } from "@/screens/product";
import { fetchProductList } from "@/services/product";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<
  ProductListScreenProps
> = async () => {
  const productListResponse = await fetchProductList("");
  return { props: { productListResponse } };
};

export default ProductListScreen;
