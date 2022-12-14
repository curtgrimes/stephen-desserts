import { Dessert } from "interfaces";

export default [
  {
    name: "Dessert 1",
    slug: "dessert-1",
    description: "",
    model: {
      path: "/static/models/2022/dessert1.gltf",
      scale: 1,
      rotation: {
        x: 0.1,
        y: 3.5,
        z: 0.3,
      },
    },
    refrigerationRecommended: false,
    stephensFavorite: false,
    curtsFavorite: false,
    recipe: ``,
  },
  {
    name: "Dessert 2",
    slug: "dessert-2",
    description: "",
    model: {
      path: "/static/models/2022/dessert2.gltf",
      scale: 1,
      rotation: {
        x: 0,
        y: 1.75,
        z: 0,
      },
    },
    refrigerationRecommended: false,
    stephensFavorite: false,
    curtsFavorite: false,
    recipe: ``,
  },
] as Dessert[];
