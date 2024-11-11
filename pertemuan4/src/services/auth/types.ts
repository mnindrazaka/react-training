import { Response } from "../base";

export type LoginBody = { email: string; password: string };
export type LoginResponse = Response<{
  token: string;
  name: string;
  email: string;
  image: string;
}>;
