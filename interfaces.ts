export interface Dessert {
  name: string;
  slug: string;
  description: string;
  modelPath: string;
  refrigerationRecommended: boolean;
  stephensFavorite: boolean;
  recipe?: string;
}
