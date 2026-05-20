import { useEffect, useState } from "react";
import type { PostType } from "../types/post.types";
import Post from "./Post";
import fetchPosts from "../utility/fetchPosts";
export default function PostContainer() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Array<PostType>>([
    { title: "dsadad", id: 1, url: "dadjksj" },
  ]);
  useEffect(() => {
    if (page === 500) setPage(1);
    fetchPosts({ page, posts, setPosts, setPage });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post title={post.title} id={post.id} url={post.url} />
      ))}
    </div>
  );
}
