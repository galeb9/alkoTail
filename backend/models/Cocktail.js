const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: String,
  have: Boolean,
});

const cocktailSchema = new mongoose.Schema({
  cocktail_id: Number,
  ingredients: [ingredientSchema],
});

const Cocktail = mongoose.model("Cocktail", cocktailSchema);

module.exports = Cocktail;
