const express=require("express")
const {getRecipes,getThreeRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload} = require("../controller/recipe")
const verifyToken = require("../middleware/auth")
const router=express.Router()

router.get("/",getRecipes) //Get all recipes
router.get("/",getThreeRecipes) //Get three recipes
router.get("/:id",getRecipe) //Get recipe by id
router.post("/",verifyToken ,addRecipe) //add recipe
router.put("/:id",editRecipe) //Edit recipe
router.delete("/:id",deleteRecipe) //Delete recipe

module.exports=router