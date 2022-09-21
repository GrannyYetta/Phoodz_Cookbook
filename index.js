const express = require("express");
const cors = require("cors");
const data = require("./data.json");
const { recipesRouter } = require("./routes/recipes");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use("/recipes", recipesRouter);

app.listen(port, () => {
  console.log(`server working on http://localhost:${port}`);
});
