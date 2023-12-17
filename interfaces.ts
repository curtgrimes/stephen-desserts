interface xyz {
  x: number;
  y: number;
  z: number;
}
interface DessertModel {
  path: string;
  scale: number;
  rotation: xyz;
  allowedUserRotation?: "horizontal-only" | "horizontal-and-vertical";
}
export interface Dessert {
  name: string;
  slug: string;
  description: string;
  model: DessertModel;
  refrigerationRecommended: boolean;
  stephensFavorite: boolean;
  curtsFavorite: boolean;
  recipe?: string;
}
