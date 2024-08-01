const {
  getCocktailsByingredient,
  getCocktailById,
  getAllIngredients,
} = require("../services/cocktailService");

const nonAlcoholicIngredients = [
  "Tea",
  "Champagne",
  "Lime juice",
  "Watermelon",
  "Carbonated water",
  "Grenadine",
  "Apple juice",
  "Pineapple juice",
  "Lemon juice",
  "Sugar syrup",
  "Milk",
  "Strawberries",
  "Chocolate syrup",
  "Yoghurt",
  "Mango",
  "Ginger",
  "Lime",
  "Cantaloupe",
  "Berries",
  "Grapes",
  "Kiwi",
  "Tomato juice",
  "Cocoa powder",
  "Chocolate",
  "Heavy cream",
  "Orange",
  "Cranberries",
  "Apple cider",
  "Cranberry juice",
  "Grape juice",
  "Peach nectar",
  "Lemon",
  "Lemonade",
  "7-Up",
  "Sprite",
  "Espresso",
  "Water",
  "Sugar",
  "Coffee",
  "Egg",
  "Egg yolk",
];

const getIngredients = async (req, res) => {
  try {
    const data = await getAllIngredients();
    if (!data.drinks) {
      return res.status(404).json({ message: "Cocktail not found" });
    }
    const ingredients = data.drinks.map((drink) => drink.strIngredient1);
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllAlcohol = async (req, res) => {
  try {
    const ingredients = await getAllIngredients();
    if (!ingredients.drinks) {
      return res.status(404).json({ message: "Cocktail not found" });
    }
    const alcohol = ingredients.drinks
      .map((drink) => drink.strIngredient1)
      .filter((ingredient) => !nonAlcoholicIngredients.includes(ingredient));

    res.json(alcohol);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get cocktail by name
// @route GET /api/cocktails/:name
// @access Public
const getCocktailsWithIngredient = async (req, res) => {
  const ingredient = req.params.ingredient;

  try {
    const data = await getCocktailsByingredient(ingredient);

    if (!data.drinks) {
      return res.status(404).json({ message: "Cocktail not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get cocktail details
const getCocktailWithId = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await getCocktailById(id);

    if (!data.drinks) {
      return res.status(404).json({ message: "Cocktail not found" });
    }
    const d = data.drinks[0];
    const {
      idDrink,
      strDrink,
      strDrinkAlternate,
      strCategory,
      strGlass,
      strInstructions,
      strInstructionsES,
      strInstructionsDE,
      strInstructionsFR,
      strInstructionsIT,
      strDrinkThumb,
    } = d;

    const drinkDetails = {
      id: idDrink,
      name: strDrink,
      alternateName: strDrinkAlternate,
      category: strCategory,
      glass: strGlass,
      instructions: {
        en: strInstructions,
        es: strInstructionsES,
        de: strInstructionsDE,
        fr: strInstructionsFR,
        it: strInstructionsIT,
      },
      img: strDrinkThumb,
    };

    drinkDetails.ingredients = Object.entries(d)
      .filter(([key, val]) => key.startsWith("strIngredient") && val)
      .map(([key, val]) => {
        const number = key.match(/\d+/)[0];

        return {
          name: val,
          measure: d[`strMeasure${number}`],
        };
      });

    res.json(drinkDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCocktailsWithIngredient,
  getCocktailWithId,
  getIngredients,
  getAllAlcohol,
};
