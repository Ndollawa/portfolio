//@ts-ignore:
const fetcher = async (...args) => fetch(...args).then((res) => res.json());

const toTitleCase = (value: string) =>
  (value.charAt(0).toUpperCase() + value.substring(1)) as string;

const splitTags = (tags: string): string[] =>
  tags.split(",").map((t) => toTitleCase(t));

const objectToJSON = (obj: any) => Object.fromEntries(obj.entries());

export { fetcher, toTitleCase, splitTags, objectToJSON };
//  Object<T> |
