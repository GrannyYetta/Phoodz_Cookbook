const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/recipes", (req, res) => {
  res.json(data.items);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;

  const recipe = data.items.find((recipe) => {
    return recipe.sys.id === id;
  });

  res.json(recipe);
});

app.listen(port, () => {
  console.log(`server working on http://localhost:${port}`);
});
