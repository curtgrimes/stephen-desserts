// storage instructions like keep cold
// recipe

import * as chanceImport from "chance";
import { Dessert } from "interfaces";
const { Chance } = chanceImport;
const chance = Chance("seed-12345");

const desserts = {
  years: {
    2021: {
      desserts: [
        {
          name: "Chocolate Pretzel Rice Crispy",
          slug: "chocolate-pretzel-rice-crispy",
          description: chance.paragraph({ sentences: 2 }),
          model: {
            path: "/static/models/2021/chocolate-pretzel-rice-crispy.gltf",
            scale: 0.1,
            rotation: {
              x: 0.4,
              y: 3,
              z: 0.4,
            },
          },
          refrigerationRecommended: true,
          stephensFavorite: true,
          recipe: `
## This is my heading

My recipe hello world

## Another heading

Some more text

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| a | b |
| a | b |
          `,
        },
        {
          name: "Death by Chocolate Peppermint Cookie",
          slug: "death-by-chocolate-peppermint-cookie",
          description: chance.paragraph({ sentences: 2 }),
          model: {
            path: "/static/models/2021/death-by-chocolate-peppermint-cookie.gltf",
            scale: 1,
            rotation: {
              x: 0.4,
              y: 3,
              z: 0.4,
            },
          },
          refrigerationRecommended: false,
          stephensFavorite: false,
        },
      ] as Dessert[],
    },
  },
};

export default desserts;
