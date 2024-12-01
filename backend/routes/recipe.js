const express = require("express");
const { getRecipes, getThreeRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload } = require("../controller/recipe");
const verifyToken = require("../middleware/auth");
const router = express.Router();

router.get("/", getRecipes); // Get all recipes
router.get("/top3", getThreeRecipes); // Get top 3 recipes
router.get("/:id", getRecipe); // Get recipe by id
router.post("/", verifyToken, addRecipe); // Add recipe (requires token)
router.put("/:id", verifyToken, editRecipe); // Edit recipe (requires token)
router.delete("/:id", verifyToken, deleteRecipe); // Delete recipe (requires token)

module.exports = router;