import type { PostType } from "../types/post.types";

export default function Post({ id, title, url }: PostType) {
  return (
    <div className="post" key={id}>
      <div className="postTitle">{title}</div>
      <div className="postURL">{url}</div>
    </div>
  );
}
