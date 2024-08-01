const axios = require("axios");

const getCocktailsByingredient = async (ingredient) => {
  try {
    const response = await axios.get(
      `${process.env.COCKTAIL_API_URI}/filter.php?i=${encodeURIComponent(
        ingredient
      )}`
    );
    return response.data;
  } catch (err) {
    throw new Error("Error fetching cocktail data");
  }
};

const getCocktailById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.COCKTAIL_API_URI}/lookup.php?i=${id}`
    );

    return response.data;
  } catch (err) {
    throw new Error("Error fetching cocktail detail data");
  }
};

const getAllIngredients = async () => {
  try {
    const response = await axios.get(
      `${process.env.COCKTAIL_API_URI}/list.php?i=list`
    );
    return response.data;
  } catch (err) {
    throw new Error("Error fetching ingredients data");
  }
};

module.exports = {
  getAllIngredients,
  getCocktailsByingredient,
  getCocktailById,
};
