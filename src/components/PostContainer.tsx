import { useEffect, useRef, useState } from "react";
import type { PostType } from "../types/post.types";
import Post from "./Post";
import fetchPosts from "../utility/fetchPosts";

export default function PostContainer() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Array<PostType>>([
    { title: "dsadad", url: "dadjksj" },
  ]);
  const lastRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchPosts({ page, setPosts, setPage });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (lastRef.current) {
      observer.observe(lastRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [posts]);

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          title={post.title}
          key={index}
          url={post.url}
          ref={index === page * 10 - 1 ? lastRef : undefined}
        />
      ))}
    </div>
  );
}
