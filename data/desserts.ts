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
          description:
            "It’s the most wonderful time of the year to enjoy a twist on the classic rice crispy treat. Melted marshmallow, blended with chocolate rice crispy cereal and dulce de leche sauce, create a decadent treat topped with chocolate chips and pretzels.",
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
          stephensFavorite: false,
          curtsFavorite: true,
          recipe: `
## INGREDIENTS:

**1 cup** chocolate chips  
**1 cup** pretzels (lightly broken up)  
**5 tbsp** unsalted butter  
**10.5 oz** marshmallows (1 bag)  
**&frac12; cup** dulce de leche sauce  
**8 cups** Cocoa Rice Crispy cereal 

## DIRECTIONS:

1. Spray a 9x13 inch baking pan with baking spray. Sprinkle the cup of chocolate chips and pretzels into the bottom of the pan, spreading to make an even layer.
2. In a very large, microwave safe bowl, melt the butter and bag of marshmallows together for 2 minutes. Remove from the microwave and stir, then microwave for 1 more minute. Stir until smooth.
3. Add the rice crispies to the marshmallow mixture and stir with a spatula until every bit is coated.
4. Stir the dulce de leche sauce into the melted marshmallows.
5. Scrape the mixture into the prepared pan and spread evenly with a greased spatula or with the paper from the used stick of butter. Let cool until firm, 15 to 20 minutes, then cut into desired number of squares.
6. Store in an airtight container on your counter for up to 5 days or place in the refrigerator for up to 2 weeks.

          `,
        },
        {
          name: "Death by Chocolate Peppermint Cookie",
          slug: "death-by-chocolate-peppermint-cookie",
          description:
            "Chocolate lovers rejoice! This chewy double chocolate peppermint cookie will help to make your spirit bright this Christmas. The cool hint of mint will have Jack Frost nipping at your nose, so enjoy this delicious treat by the fire with a warm cup of cocoa.",
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
          stephensFavorite: true,
          curtsFavorite: false,
          recipe: `
## INGREDIENTS:

**2 cups** all-purpose flour  
**&frac12; cup** unsweetened cocoa powder (I used Droste)  
**1 tsp** baking soda    
**&frac12; tsp** salt
**1 cup** unsalted butter, softened  
**1 cup** packed brown sugar  
**&frac12; cup** granulated sugar  
**1 tsp** vanilla extract  
**&frac12; tsp** peppermint extract  
**1** large egg  
**1** egg yolk  
**&frac34; cup** dark chocolate chips  
**&frac12; cup** white chocolate chips  
**1 tsp** coconut oil  



## DIRECTIONS:

1. Preheat oven to 350 degrees F. Line a baking sheet with parchment paper.
2. In a large bowl, whisk together the flour, cocoa powder, baking soda and salt.
3. In the bowl of an electric mixer, cream together butter and sugars until light and fluffy, about 1-2 minutes.
4. Add in vanilla extract, peppermint extract, egg and egg yolk; beat again until well combined smooth and creamy; about 30 seconds longer.
5. Add in dry ingredients and mix on low until just combined and the dough forms. Fold in ¾ cup chocolate chips.
6. Use a cookie scoop to grab about 2 tablespoonful of dough, then roll dough balls and place on cookie sheet, leaving at least 2 inches apart from one another. Flatten with the palm of your hand. 
7. Bake for 10-12 minutes or until edges begins to set and crackle. Remove and allow cookies to cool for 5 minutes on the baking sheet before transferring to a wire rack to finish cooling. Repeat with remaining dough.
8. Once cookies have completely cooled, they are ready for the white chocolate drizzle. Place chocolate chips and coconut oil in a small pot and place over low heat, stirring until chocolate is melted and smooth. You can also melt the chocolate in the microwave by placing the chocolate in a microwave safe bowl and microwave on high in 30 second intervals, stirring in between, until chocolate is melted. Use a small spoon or pastry bag to drizzle the white chocolate all over the cookies diagonally.
9. Place cookies back on cooling rack and allow the chocolate to harden completely. Makes around 24 cookies.
          
          `,
        },
        {
          name: "Chunky Chocolate Peanut Butter Cookie",
          slug: "chunky-chocolate-peanut-butter-cookie",
          description:
            "While the weather outside may be frightful, these chunky chocolate peanut butter cookies are sure to be delightful. With a hint of chocolate in every bite, these peanut butter treats may just have what it takes to become a yuletide cookie treasure.",
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
          stephensFavorite: true,
          curtsFavorite: false,
          recipe: `
## INGREDIENTS:

**1&frac12; cups** all-purpose flour  
**&frac12; tsp** baking soda  
**&frac12; tsp** salt
**&frac12; cup** unsalted butter, softened  
**&frac12; cup** granulated sugar   
**&frac12; cup** packed brown sugar  
**&frac34; cup** creamy peanut butter  
**1** large egg  
**1 tsp** vanilla extract  
**2 cups** semisweet chocolate chips  



## DIRECTIONS:

1. Preheat oven to 375 degrees F. Line a baking sheet with parchment paper.
2. In a bowl, combine together the flour, salt and baking soda, set aide.  
3. In a large bowl, or in the bowl of an electric mixer, cream together the butter, brown sugar and granulated sugar, add the egg, peanut butter and vanilla and mix everything well.  
4. Add the dry ingredients and mix just enough to incorporate all the ingredients together, add in the chocolate chips.  
5. Using a small cookie scoop, drop the dough onto the parchment lined baking sheet and flatten each one with either your fingers or a fork.  
6. Bake for about 9 to 10 minutes or until the edges are lightly golden, let them cool for 5 minutes on a baking sheet and then transfer them to a wire rack to cool completely.  Makes 3 dozen cookies

          `,
        },
        {
          name: "Brown Butter Snickerdoodle Cookie",
          slug: "brown-butter-snickerdoodle-cookie",
          description:
            "Jolly Old St. Nick would love to take a bite out of these snickerdoodles with their crunchy exterior and chewy center. The cinnamon sugar coating and caramel like flavor from the browned butter will be sure to bring you joy this Christmas season.",
          model: {
            path: "/static/models/2021/death-by-chocolate-peppermint-cookie.gltf",
            scale: 1,
            rotation: {
              x: 0.4,
              y: 3,
              z: 0.4,
            },
          },
          refrigerationRecommended: true,
          stephensFavorite: false,
          curtsFavorite: false,
          recipe: `
## INGREDIENTS:

**2&frac12; cups** all-purpose flour  
**1 tsp** baking soda  
**2 tsp** cream of tartar  
**&frac12; tsp** cinnamon  
**&frac14; tsp** salt  
**1 cup** unsalted butter   
**1&frac14; cup** packed dark brown sugar  
**&frac12; cup** granulated sugar  
**1** large egg  
**1** egg yolk  
**1 tsp** vanilla extract  
**1 tbsp** plain greek yogurt

**For rolling mixture:**  
**&frac14; cup** sugar  
**2 tsp** cinnamon  




## DIRECTIONS:

1. First, brown your butter: add butter to a large saucepan and place over medium heat. The butter will begin to crackle, and then eventually foam. Make sure you whisk constantly during this process. After a couple of minutes, the butter will begin to brown and turn a nice golden amber color on the bottom of the saucepan. Continue to whisk and remove from heat as soon as the butter begins to brown and give off a nutty aroma. Immediately transfer the butter to a medium bowl to prevent burning. Set aside to cool for 5-10 minutes or until cool enough to touch.
2. Once brown butter is cool, add all of it to the bowl of an electric mixer, along with the dark brown sugar and granulated sugar. Mix on medium speed for about 1 minute.
3. Next, add in the egg, egg yolk, vanilla, and yogurt and beat on medium speed until well combined, smooth and creamy; about 1-2 minutes.
4. In a separate bowl, whisk together the flour, baking soda, cream of tartar, 1/2 teaspoon cinnamon, and salt in a bowl. Slowly the dry ingredients to the bowl of the electric mixer and beat on medium-low speed just until combined.
5. Cover dough with plastic wrap and chill in the fridge for 2-3 hours or up to overnight for the best results.
6. Once ready to bake, preheat the oven to 350 degrees F. Once dough is chilled measure about 2 tablespoons of dough and roll into a ball. If dough is too hard to roll into a ball, you may need to let it sit out at room temperature for 10-20 minutes while your oven preheats.
7. Meanwhile, mix 1/4 cup sugar and the 2 teaspoons cinnamon in a bowl. Roll dough balls in cinnamon-sugar mixture, then place on a parchment paper lined cookie sheet, 2 inches apart.
8. Bake the cookies 8-12 minutes or until the edges of the cookies begin to turn golden brown. They will look a bit underdone in the middle, but will continue to cook once out of the oven. Bake longer if you like crispier cookies.
9. Cool the cookies on the sheets at least 5 minutes. Remove the cooled cookies from the baking sheets after a few minutes and transfer to a wire rack to cool completely. Repeat with remaining dough. Makes about 24 cookies.

          `,
        },
        {
          name: "Brown Butter Nutella-Stuffed Pumpkin Chocolate Chip Cookie",
          slug: "brown-butter-nutella-stuffed-pumpkin-chocolate-chip-cookie",
          description:
            "‘Tis The Season to indulge in these chewy and delicious brown butter pumpkin chocolate chip cookies with a creamy Nutella center. Take one bite and all you’ll want this Christmas is this decadent treat.",
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
          curtsFavorite: true,
          recipe: `
## INGREDIENTS:

**&frac12; cup** unsalted butter  
**&frac12; cup** packed brown sugar  
**&frac12; cup** granulated sugar  
**1 tsp** vanilla extract  
**1** egg white  
**&frac14; cup** pumpkin puree  
**1&frac12; cups** all-purpose flour  
**&frac34; tsp** baking soda  
**&frac14; tsp** salt  
**1&frac12; tsp** cinnamon  
**&frac14; tsp** ginger  
**pinch** nutmeg  
**pinch** cloves  
**1 cup** semisweet chocolate chips  
**1 small jar** Nutella (you use about 15 teaspoons), chilled    


## DIRECTIONS:

1. First, prepare Nutella: to make it easier to scoop, place jar of Nutella in the fridge for about an hour. Line a plate with plastic wrap and drop 15-20 teaspoons of chilled nutella on the plate and place it in the freezer until ready to stuff the cookie dough.
2. Next, brown your butter: add butter to a large saucepan and place over medium heat. The butter will begin to crackle, and then eventually foam. Make sure you whisk constantly during this process. After a couple of minutes, the butter will begin to brown and turn a nice golden amber color on the bottom of the saucepan. Continue to whisk and remove from heat as soon as the butter begins to brown and give off a nutty aroma. Immediately transfer the butter to a medium bowl to prevent burning. Set aside to cool for 5-10 minutes or until cool enough to touch.
3. Once brown butter is cool, add all of it to the bowl of an electric mixer, along with the sugars. Mix on medium speed until thoroughly blended. Beat in the egg white, vanilla and pumpkin puree until well combined.
4. In a separate medium bowl whisk together flour, baking soda, salt, cinnamon, ginger, nutmeg and cloves. 
5. With electric mixer on low speed, slowly add in flour and mix until just combined. Gently fold in chocolate chips. 
6. Place plastic wrap over bowl and refrigerate dough for one hour so that the flavors meld together and the butter has a chance to solidify a bit. You want the dough to be fairly cold so that that it's easier to work with and stuff with nutella.
7. Once dough is chilled, make your dough balls: measure about 1 1/2 tablespoons of dough and roll into a ball. Flatten the dough ball very thinly into the palm of your hand. Place 1 teaspoon of chilled nutella in the middle and fold dough around it; gently roll into a ball -- it doesn’t have to be perfectly rolled! Make sure that the nutella is not seeping out of the dough. Add more dough if necessary. 
8. Place dough balls on a parchment paper lined cookie sheet, 2 inches apart and flatten with your hand just a tiny bit!
9. Once ready to bake, preheat oven to 350 degrees F. Bake for 11-13 minutes or until cookies are golden brown around the edges. 
10. Cool on baking sheet for 5-10 minutes then remove and transfer to wire rack. Makes about 15 cookies.

          `,
        },
        {
          name: "Soft Banana Bread Cookie",
          slug: "soft-banana-bread-cookie",
          description:
            "One bite of this soft banana bread cookie and your tastebuds will be aglow. You’ll come to adore these small cookie treats topped with a luscious cream cheese frosting during this most wonderful time of the year.",
          model: {
            path: "/static/models/2021/death-by-chocolate-peppermint-cookie.gltf",
            scale: 1,
            rotation: {
              x: 0.4,
              y: 3,
              z: 0.4,
            },
          },
          refrigerationRecommended: true,
          stephensFavorite: true,
          curtsFavorite: false,
          recipe: `
## INGREDIENTS:

**2 tbsp** unsalted butter, melted and slighly cooled  
**&frac12; cup** mashed ripe banana (from 1 medium ripe banana)  
**&frac14; cup** granulated sugar  
**1** large egg, at room temperature  
**1 tsp** vanilla extract  
**1&frac14; cups** packed almond flour  
**&frac14; cup** coconut flour  
**&frac12; tsp** baking soda  
**&frac12; tsp** cinnamon  
**&frac14; tsp** salt  

**For the cream cheese frosting:**  
**&frac12; cup** powdered sugar  
**2 tbsp** cream cheese, at room temperature  
**2 tbsp** unsalted butter, at room temperature  
**&frac12; tsp** vanilla extract  
**&frac12; tsp** almond milk, only if necessary, to thin out frosting  

## DIRECTIONS:

1. In a large bowl, add the melted and cooled butter, mashed banana, sugar, egg and vanilla extract. Mix until well combined and smooth. Next add in almond flour, coconut flour, baking soda, cinnamon and salt. Mix until a soft dough forms. Allow dough to chill in the fridge for at least 5 minutes while you preheat the oven.
2. Preheat oven to 350 degrees F. Line a baking sheet with parchment paper and set aside.
3. Using a small cookie scoop, drop the dough onto the parchment lined baking sheet and flatten each dough ball with the palm of your hand, but still keep the cookies nice and round. They should be about 1/4 inch thick before baking because we still want them to be nice, thick and fluffy. Bake for 9-12 minutes.
4. Remove from oven, allow cookies to firm up on baking sheet for 5-10 minutes, then transfer to a wire rack and allow cookies to cool completely before frosting. Makes about 12-14 cookies.
5. For the frosting: In a medium bowl or bowl of an electric mixer, mix together the powdered sugar, cream cheese, softened butter and vanilla extract. If frosting is too thick, you can add a teaspoon of milk to make it spreadable. Frost the top of each cookie.

          `,
        },
      ] as Dessert[],
    },
  },
};

export default desserts;
