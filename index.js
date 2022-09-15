const express = require("express");
const data = require("./package.json");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
