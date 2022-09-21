const data = require("../data.json");
const getRecipe = (req, res) => {
  const id = req.params.id;
  const recipe = data.items.find((recipe) => {
    return recipe.sys.id === id;
  });
  res.json(recipe);
};

const getRecipes = async (req, res) => {
  /* try {
        const { rows } = await pool.query("SELECT * FROM  Recipes;");
        res.json(rows);
    } catch (error) {
        res.status(500).send("something went wrong");
    }*/
  res.json(data.items);
};

const createRecipes = async (req, res) => {};

module.exports = {
  getRecipes,
  getRecipe,
};