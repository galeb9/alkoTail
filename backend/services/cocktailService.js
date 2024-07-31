const axios = require('axios');

const getCocktailByName = async (name) => {
    try {
        const response = await axios.get(`${process.env.COCKTAIL_API_URI}/search.php?s=${name}`);
        return response.data;
    } catch (err) {
        throw new Error('Error fetching cocktail data');
    }
};

module.exports = {
    getCocktailByName
};