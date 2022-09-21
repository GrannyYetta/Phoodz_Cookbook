const { pool } = require("../db");

const getRecipes = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM  Recipes;");
        res.json(rows);
    } catch (error) {
        res.status(500).send("something went wrong");
    }
};

const createRecipes = async (req, res) => {};

module.exports = {
    getRecipes,
    createRecipes,
};
