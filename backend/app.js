const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cocktailRoutes = require("./routes/cocktailRoutes");
require("dotenv").config();

const Cocktail = require("./models/Cocktail");
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200", // Allow only this origin
  })
);

// Connect to database
// connectDB();
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/your-cocktails", async (req, res) => {
  try {
    // Fetch all cocktails from the database
    const cocktails = await Cocktail.find({});

    // Format the response
    const formattedCocktails = cocktails.map((cocktail) => ({
      _id: { $oid: cocktail._id.toString() },
      cocktail_id: { $numberInt: cocktail.cocktail_id.toString() },
      ingredients: cocktail.ingredients.map((ingredient) => ({
        name: ingredient.name,
        have: ingredient.have,
      })),
    }));

    // Send the formatted response
    res.status(200).json(cocktails);
  } catch (err) {
    res.status(500).json({ error: "err.message" });
  }
});

// Routes
// app.use('/api', userRoutes);
app.use("/api", cocktailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} -> http://localhost:${PORT}/api`)
);
