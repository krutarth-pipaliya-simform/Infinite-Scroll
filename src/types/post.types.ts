import type { Ref } from "react";

export type PostType = {
  title: string;
  url: string;
  ref?: Ref<HTMLDivElement>;
};
