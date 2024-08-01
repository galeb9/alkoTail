const express = require("express");
const bodyParser = require("body-parser");
// const connectDB = require('./config/database');
const cors = require("cors");
const cocktailRoutes = require("./routes/cocktailRoutes");

require("dotenv").config();

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

// Routes
// app.use('/api', userRoutes);
app.use("/api", cocktailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} -> http://localhost:${PORT}/api`)
);
