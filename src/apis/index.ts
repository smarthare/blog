import axios, { AxiosError } from "axios";

import { AuthorsType } from "types/author";
import { PagesType } from "types/page";
import { PostsType } from "types/post";

const API = axios.create({ baseURL: process.env.TENUP_URL });

const handleError = (error: AxiosError) => {
  console.log(error.message);
  logout();
};

export const getPosts = () =>
  API.get("/wp/v2/posts")
    .then((receipt) => receipt.data as PostsType)
    .catch(handleError);

export const getPages = () =>
  API.get("/wp/v2/pages")
    .then((receipt) => receipt.data as PagesType)
    .catch(handleError);

export const getUsers = () =>
  API.get(`/wp/v2/users`)
    .then((receipt) => receipt.data as AuthorsType)
    .catch(handleError);

export const login = (username: string, password: any) =>
  API.post(`/jwt-auth/v1/token`, { username, password })
    .then((receipt) => receipt.data)
    .catch(handleError);

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const validate = () =>
  API.post(
    "/jwt-auth/v1/token/validate",
    {},
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
        Authentication: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  )
    .then((receipt) => receipt.data)
    .catch(handleError);
