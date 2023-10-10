import { File } from "buffer";

export interface PostInterface {
  title: string | undefined;
  description: string | undefined;
  body: string | undefined;
  status: string | undefined;
  category: string | undefined;
  tags: string[] | undefined;
  image: string | File | undefined;
}
