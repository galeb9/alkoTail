const express = require('express');
const { getCocktail } = require('../controllers/cocktailController');

const router = express.Router();

router.get('/cocktails/:name', getCocktail);

module.exports = router;
