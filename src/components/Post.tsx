import type { PostType } from "../types/post.types";

export default function Post({ title, url, ref }: PostType) {
  return (
    <div className="post" ref={ref}>
      <div className="postTitle">{title}</div>
      <div className="postURL">{url}</div>
    </div>
  );
}
