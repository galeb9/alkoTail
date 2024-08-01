const express = require("express");
const {
  getCocktailsWithIngredient,
  getCocktailWithId,
  getIngredients,
  getAllAlcohol,
} = require("../controllers/cocktailController");

const router = express.Router();

router.get("/cocktails/:ingredient", getCocktailsWithIngredient);
router.get("/cocktail/:id", getCocktailWithId);
router.get("/ingredients", getIngredients);
router.get("/alcohol", getAllAlcohol);

module.exports = router;
