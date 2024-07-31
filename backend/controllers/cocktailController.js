const { getCocktailByName } = require('../services/cocktailService');

// @desc Get cocktail by name
// @route GET /api/cocktails/:name
// @access Public
const getCocktail = async (req, res) => {
    const name = req.params.name;

    try {
        const data = await getCocktailByName(name);
        if (!data.drinks) {
            return res.status(404).json({ message: 'Cocktail not found' });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getCocktail
};
