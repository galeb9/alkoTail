const express = require("express");
const {
  getCocktailWithName,
  getCocktailWithId,
} = require("../controllers/cocktailController");

const router = express.Router();

router.get("/cocktails/:name", getCocktailWithName);

router.get("/cocktail/:id", getCocktailWithId);

module.exports = router;
