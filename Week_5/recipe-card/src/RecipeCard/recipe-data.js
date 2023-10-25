// @flow

export type IngredientProps = {
  measure: string,
  name: string,}

export type RecipeProps = {
  title: string,
  imgSrc: string,
  description?: string,
  ingredients: Array<IngredientProps>,
  instructions: Array<string>,
 }

export type RecipeListProps = Array<RecipeProps>

export const RECIPE: RecipeProps = {
  title: 'Ratatouille',
  imgSrc: require('../assets/ratatouilleimg.jpeg'),
  description:
   'This simple yet decadent Ratatouille recipe will usher in childhood memories of watching the movie of the same name! It also tastes good.',
  ingredients: [
    {measure: '3/4 cup', name: 'Melted butter'},
    {measure: '2 tbsp', name: 'Whole milk'},
    {measure: '1', name: 'Egg'},
    {measure: '3/4 cup', name: 'All purpose flour'},
    {measure: '2 tsp', name: 'Baking powder'},
    {measure: '2 tbsp', name: 'Sugar'},
    {measure: '1/2 tsp', name: 'Salt'},
  ],
  instructions: [
    ' Heat 2 tablespoons of the oil in a large Dutch oven or heavy-bottomed pot over medium-high heat until shimmering. Add the eggplant, season generously with salt and pepper, and cook, stirring occasionally, until browned in spots, about 2 minutes. Transfer to a large bowl.',
    'Add 2 tablespoons of the oil to the pot. Add the zucchini, season generously with salt and pepper, and cook, stirring occasionally, until browned in spots, about 2 minutes. Transfer to the bowl with the eggplant. ',
    'Reduce the heat to medium. Add the remaining 1 tablespoon oil and the onion, season with salt and pepper, and cook, stirring occasionally, until softened and just beginning to brown, 6 to 8 minutes. Add the garlic, thyme, and bay leaf and cook until fragrant, about 30 seconds. Add the tomatoes and bell peppers. Add the reserved eggplant and zucchini and gently stir to combine.',
    'Bring to a simmer, then turn down the heat to medium-low. Simmer, stirring occasionally, for at least 20 minutes or up to 1 1/2 hours. A shorter cooking time will leave the vegetables in larger, more distinct pieces; longer cooking times will break the vegetables down into a silky stew.',
    ' Remove the bay leaf and thyme sprigs. Just before serving, stir in the basil. Taste and season with salt and pepper as needed. Serve, sprinkling each serving with more basil and drizzling with more olive oil.',
  ],
}

export const RECIPE_LIST: RecipeListProps = [
  {
    title: 'Kaya toast',
    imgSrc: require('../assets/kaya.png'),
    description:
      "This is one of my favorite Singaporean dishes to make. 'Kaya', which means coconut jam in Malay, is sandwiched between toasted bread with slices of cold butter. It's a staple breakfast dish in Singapore and Malaysia, typically served with soft-boiled eggs and coffee.",
    ingredients: [
      {measure: '2 slices', name: 'Bread'},
      {measure: '2 slices', name: 'Cold salted butter'},
      {measure: '2 tbsp', name: 'Kaya jam (Coconut butter)'},
    ],
    instructions: [
      'Cut off the crust of the bread.',
      'Toast the bread to your liking.',
      'Spread the kaya jam on both slices of the bread.',
      'Place a few slices of thin cold butter on one of the toast.',
      'Sandwich the toasts and cut in half.',
    ],
  },
  {
    title: 'Bulgogi',
    imgSrc: require('../assets/bulgogi.jpg'),
    description: 'Marinated Korean BBQ',
    ingredients: [
      {
        name: 'boneless rib eye steak',
        measure: '1 1/2 lb',
      },
      {
        name: 'small pear, peeled and coarsely grated',
        measure: '1/2',
      },
      {
        name: 'reduced sodium soy sauce',
        measure: '1/4 cup',
      },
      {
        name: 'brown sugar',
        measure: '2 tbsp',
      },
      {
        name: 'toasted sesame oil',
        measure: '2 tbsp',
      },
      {
        name: 'garlic, minced',
        measure: '3 cloves',
      },
      {
        name: 'freshly grated ginger',
        measure: '1 tbsp',
      },
      {
        name: 'gochujang, Korean red pepper paste',
        measure: '1 tbsp',
      },
      {
        name: 'vegetable oil, divided',
        measure: '2 tbsp',
      },
      {
        name: 'green onions, thinly sliced',
        measure: '2',
      },
      {
        name: 'toasted sesame seeds',
        measure: '1 tspw2q3',
      },
    ],
    instructions: [
      'Wrap steak in plastic wrap, and place in the freezer for 30 minutes. Unwrap and slice across the grain into 1/4-inch thick slices.',
      'In a medium bowl, combine pear, soy sauce, brown sugar, sesame oil, garlic, ginger and gochujang. In a gallon size Ziploc bag, combine soy sauce mixture and steak; marinate for at least 2 hours to overnight, turning the bag occasionally.',
      'Heat 1 tablespoon vegetable oil in a cast iron grill pan over medium-high heat.* Working in batches, add steak to the grill pan in a single layer and cook, flipping once, until charred and cooked through, about 2-3 minutes per side. Repeat with remaining 1 tablespoon vegetable oil and steak.',
      'Serve immediately, garnished with green onions and sesame seeds, if desired.',
    ],
  },
  {
    title: 'Gulab Jamun Recipe',
    imgSrc: require('../assets/gulabjamun.jpg'),
    description:
      'It is a traditional Indian dessert, known as Gulab Jamun. It is a milk-solid-based sweet. It is soaked in a sugar syrup flavored with cardamom seeds and rosewater.',
    ingredients: [
      {name: 'Milk powder', measure: '1 cup'},
      {name: 'All-purpose flour', measure: '1/4 cup'},
      {name: 'Ghee (clarified butter)', measure: '1/4 cup'},
      {name: 'Milk', measure: '1/4 cup'},
      {name: 'Baking soda', measure: '1/4 tsp'},
      {name: 'Cardamom powder', measure: 'A pinch'},
      {name: 'Oil for deep frying', measure: 'As required'},
    ],
    instructions: [
      'In a mixing bowl, combine milk powder, all-purpose flour, ghee, milk, baking soda, and cardamom powder.',
      'Knead the mixture into a soft dough.',
      'Divide the dough into small portions and shape them into smooth balls.',
      'Heat oil in a pan over medium heat.',
      'Fry the dough balls until they turn golden brown.',
      'Remove the fried balls and drain excess oil on a paper towel.',
      'Prepare sugar syrup by dissolving 1 cup of sugar in 1 cup of water over medium heat.',
      'Boil the syrup until it reaches a one-string consistency.',
      'Drop the fried dough balls into the hot sugar syrup and let them soak for a few hours.',
      'Gulab Jamuns are ready to serve once they absorb the syrup and become soft.',
    ],
  },
  
  {
    title: 'Ratatouille',
    imgSrc: require('../assets/ratatouilleimg.jpeg'),
    description:
     'This simple yet decadent Ratatouille recipe will usher in childhood memories of watching the movie of the same name! It also tastes good.',
    ingredients: [
      {measure: '3/4 cup', name: 'Melted butter'},
      {measure: '2 tbsp', name: 'Whole milk'},
      {measure: '1', name: 'Egg'},
      {measure: '3/4 cup', name: 'All purpose flour'},
      {measure: '2 tsp', name: 'Baking powder'},
      {measure: '2 tbsp', name: 'Sugar'},
      {measure: '1/2 tsp', name: 'Salt'},
    ],
    instructions: [
      ' Heat 2 tablespoons of the oil in a large Dutch oven or heavy-bottomed pot over medium-high heat until shimmering. Add the eggplant, season generously with salt and pepper, and cook, stirring occasionally, until browned in spots, about 2 minutes. Transfer to a large bowl.',
      'Add 2 tablespoons of the oil to the pot. Add the zucchini, season generously with salt and pepper, and cook, stirring occasionally, until browned in spots, about 2 minutes. Transfer to the bowl with the eggplant. ',
      'Reduce the heat to medium. Add the remaining 1 tablespoon oil and the onion, season with salt and pepper, and cook, stirring occasionally, until softened and just beginning to brown, 6 to 8 minutes. Add the garlic, thyme, and bay leaf and cook until fragrant, about 30 seconds. Add the tomatoes and bell peppers. Add the reserved eggplant and zucchini and gently stir to combine.',
      'Bring to a simmer, then turn down the heat to medium-low. Simmer, stirring occasionally, for at least 20 minutes or up to 1 1/2 hours. A shorter cooking time will leave the vegetables in larger, more distinct pieces; longer cooking times will break the vegetables down into a silky stew.',
      ' Remove the bay leaf and thyme sprigs. Just before serving, stir in the basil. Taste and season with salt and pepper as needed. Serve, sprinkling each serving with more basil and drizzling with more olive oil.',
    ],
  }
]
