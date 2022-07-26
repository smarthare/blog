import axios from "axios";

import { AuthorsType } from "types/author";
import { PagesType } from "types/page";
import { PostsType } from "types/post";

const API = axios.create({ baseURL: process.env.TENUP_URL });

API.interceptors.request.use((req) => {
  if (localStorage) {
    const token = localStorage.getItem("token");
    if (req.headers !== undefined && token) {
      req.headers.Authentication = `Bearer ${token}`;
    }
  }
  return req;
});

export const getPosts = () =>
  API.get("/wp/v2/posts")
    .then((receipt) => receipt.data as PostsType)
    .catch(console.error);

export const getPages = () =>
  API.get("/wp/v2/pages")
    .then((receipt) => receipt.data as PagesType)
    .catch(console.error);

export const getUsers = () =>
  API.get(`/wp/v2/users`)
    .then((receipt) => receipt.data as AuthorsType)
    .catch(console.error);

export const login = (username: string, password: any) =>
  API.post(`/jwt-auth/v1/token`, { username, password })
    .then((receipt) => receipt.data)
    .catch(console.error);

export const validate = () =>
  API.post("/jwt-auth/v1/token/validate")
    .then((receipt) => receipt.data)
    .catch(console.error);
