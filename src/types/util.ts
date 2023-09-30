export type DeepPartial<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]?: T[P] extends Function ? T[P] : DeepPartial<T[P]>;
};
