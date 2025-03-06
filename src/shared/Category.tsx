export enum Category {
  Algebra,
  Calculus,
  Geometry,
  Statistics,
  Trigonometry,
}

export const stringKeys = Object.keys(Category).filter((v) => isNaN(Number(v)));

export const all = "all";
