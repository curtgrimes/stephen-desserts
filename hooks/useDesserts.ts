import desserts from "data/desserts";
import { Dessert } from "interfaces";

interface useDessertOptions {
  year: string;
  dessertSlug?: string;
}

export function useDesserts(year: string): Dessert[] {
  return desserts.years[year]?.desserts;
}

export function useDessert({ year, dessertSlug }: useDessertOptions) {
  return useDesserts(year)?.find(
    (dessert: Dessert) => dessert.slug === dessertSlug
  );
}
