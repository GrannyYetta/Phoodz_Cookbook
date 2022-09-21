const { Router } = require("express");
const express = require("express");
//const { getRecipes, createRecipes } = require("../controllers/Home");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
    res.send("How are u?");
});

//homeRouter.route("/").get(getRecipes).post(createRecipes);
//     res.send("how are u??");
// });

module.exports = {
    homeRouter,
};
