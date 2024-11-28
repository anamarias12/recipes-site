const Recipes=require("../models/recipe")

const getRecipes=async(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}

const getThreeRecipes = async (req, res) => {
    const recipes = await Recipes.find().sort({ rating: -1 }).limit(3);
    res.json(recipes);
};

const getRecipe=async(req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe=async(req,res)=>{
    console.log(req.user)
    const {title,description,rating,creator,createdAt}=req.body 

    if(!title || !description || !creator)
    {
        res.json({message:"Required fields can't be empty"})
    }

    const newRecipe=await Recipes.create({
        title,description,rating,creator,createdAt,
        createdBy:req.user.id
    })
   return res.json(newRecipe)
}

const editRecipe=async(req,res)=>{
    const {title,description,rating,creator,createdAt}=req.body 
    let recipe=await Recipes.findById(req.params.id)

    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
            res.json({title,description,rating,creator,createdAt})
        }
    }
    catch(err){
        return res.status(404).json({message:err})
    }
    
}
const deleteRecipe=async(req,res)=>{
    try{
        await Recipes.deleteOne({_id:req.params.id})
        res.json({status:"ok"})
    }
    catch(err){
        return res.status(400).json({message:"error"})
    }
}

module.exports={getRecipes,getThreeRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}