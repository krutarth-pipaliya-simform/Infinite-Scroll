import axios from "axios";
import type { PostType } from "../types/post.types";
import type { SetStateAction } from "react";

export default function fetchPosts({
  page,
  setPosts,
  setPage,
}: {
  page: number;
  setPosts: (value: SetStateAction<PostType[]>) => void;
  setPage: (value: SetStateAction<number>) => void;
}) {
  if (page === 500) setPage(1);
  axios
    .get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
    .then((res) => {
      setPosts((prev) => [...prev, ...res.data]);
    });
}
