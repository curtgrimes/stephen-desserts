// storage instructions like keep cold
// recipe

import * as chanceImport from "chance";
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
          refrigerationRecommended: true,
          recipe: `
## This is my heading

My recipe hello world

## Another heading

Some more text

| A Table | Example |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
          `,
        },
        {
          name: "My second dessert",
          slug: "my-second-dessert",
          description: chance.paragraph({ sentences: 2 }),
          refrigerationRecommended: false,
        },
      ],
    },
  },
};

export default desserts;
