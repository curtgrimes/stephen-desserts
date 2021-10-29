import desserts from "data/desserts";
import { Dessert } from "interfaces";
import { useRouter } from "next/router";

interface UseDessertsResponse {
  desserts: Dessert[];
  loading: boolean;
}

interface UseDessertResponse {
  dessert: Dessert;
  loading: boolean;
}

export function useDesserts(year: string): UseDessertsResponse {
  return { desserts: desserts.years[year]?.desserts || [], loading: false };
}

export function useDessert(): UseDessertResponse {
  const router = useRouter();

  return {
    dessert: useDesserts(router.query.year as string).desserts.find(
      (dessert: Dessert) => dessert.slug === router.query.dessertSlug
    ),
    loading: !router.isReady,
  };
}
