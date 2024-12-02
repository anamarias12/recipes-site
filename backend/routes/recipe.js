const express = require("express");
const { getRecipes, getThreeRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload } = require("../controller/recipe");
const verifyToken = require("../middleware/auth");
const router = express.Router();

router.get("/", getRecipes);
router.get("/top3", getThreeRecipes);
router.get("/:id", getRecipe);
router.post("/", verifyToken, addRecipe);
router.put("/:id", verifyToken, editRecipe);
router.delete("/:id", verifyToken, deleteRecipe);

module.exports = router;