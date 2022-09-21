const { Router } = require("express");
const express = require("express");
const { getRecipes, getRecipe } = require("../controllers/recipes");
const recipesRouter = express.Router();

recipesRouter.get("/", getRecipes);
recipesRouter.get("/:id", getRecipe);
//homeRouter.route("/").get(getRecipes).post(createRecipes);
//     res.send("how are u??");
// });

module.exports = {
  recipesRouter,
};
