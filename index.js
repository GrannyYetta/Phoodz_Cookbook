const express = require("express");
//const cors = require("cors");
const data = require("./data.json");
const { homeRouter } = require("./routes/recipes");
const { aboutRouter } = require("./routes/About");
const { recipesRouter } = require("./routes/RecipePage");

const app = express();
const port = process.env.PORT || 3001;

//app.use(cors());

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/recipes/:id", recipesRouter);

// app.get("/recipes/:id", (req, res) => {
//     const id = req.params.id;

//     const recipe = data.items.find((recipe) => {
//         return recipe.sys.id === id;
//     });

//     res.json(recipe);
// });

app.listen(port, () => {
    console.log(`server working on http://localhost:${port}`);
});
