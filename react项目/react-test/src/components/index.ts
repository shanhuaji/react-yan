export interface Fn {
  (x: string, y: number): string;
}
export interface Obj {
  str: string;
  num: number;
  fn: (x: string, y: number) => string;
}
