import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDomain(url: string) {
  let domain = url.replace(/(^\w+:|^)\/\//, "");

  domain = domain.split("/")[0];
  domain = domain.replace("www.", "");

  return domain;
}

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

type Primitive = string | number | boolean;
type FlattenPairs<T> = {
  [K in keyof T]: T[K] extends Primitive ? [K, T[K]] : FlattenPairs<T[K]>;
}[keyof T] &
  [PropertyKey, Primitive];
export type Flatten<T> = { [P in FlattenPairs<T> as P[0]]: P[1] };
