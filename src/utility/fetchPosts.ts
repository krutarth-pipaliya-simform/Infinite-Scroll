import axios from "axios";
import type { PostType } from "../types/post.types";
import type { SetStateAction } from "react";

export default function fetchPosts({
  page,
  posts,
  setPosts,
  setPage,
}: {
  page: number;
  posts: Array<PostType>;
  setPosts: (value: SetStateAction<PostType[]>) => void;
  setPage: (value: SetStateAction<number>) => void;
}) {
  axios
    .get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
    .then((res) => {
      setPosts([...posts, ...res.data]);
      setPage((prev) => prev + 1);
    });
}
