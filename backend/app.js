const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const cocktailRoutes = require('./routes/cocktailRoutes');
require('dotenv').config();

const app = express();

// Connect to database
// connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
// app.use('/api', userRoutes);
app.use('/api', cocktailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
