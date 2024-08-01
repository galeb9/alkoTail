const {
  getCocktailByName,
  getCocktailById,
} = require("../services/cocktailService");

// @desc Get cocktail by name
// @route GET /api/cocktails/:name
// @access Public
const getCocktailWithName = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await getCocktailByName(name);

    if (!data.drinks) {
      return res.status(404).json({ message: "Cocktail not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCocktailWithId = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await getCocktailById(id);

    if (!data.drinks) {
      return res.status(404).json({ message: "Cocktail not found" });
    }

    // must parse the item
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
  getCocktailWithName,
  getCocktailWithId,
};
