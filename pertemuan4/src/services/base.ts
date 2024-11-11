export type Response<Data> = {
  status: "success" | "failed";
  data: Data;
  message: string;
};

export type ResponseList<Item> = Response<Item[]> & {
  paging: {
    totalData: number;
    totalPage: number;
    perPage: number;
    page: number;
  };
};
