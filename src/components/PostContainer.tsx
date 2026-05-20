import { useEffect, useState } from "react";
import type { PostType } from "../types/post.types";
import Post from "./Post";
import axios from "axios";
export default function PostContainer() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Array<PostType>>([
    { title: "dsadad", id: 1, url: "dadjksj" },
  ]);
  useEffect(() => {
    if (page === 500) setPage(1);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`,
      )
      .then((res) => {
        setPosts([...posts, ...res.data]);
        setPage((prev) => prev + 1);
      });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post title={post.title} id={post.id} url={post.url} />
      ))}
    </div>
  );
}
