export type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};
