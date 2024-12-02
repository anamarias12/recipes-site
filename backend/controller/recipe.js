const Recipes=require("../models/recipe")

const getRecipes = async (req, res) => {
    const recipes = await Recipes.find().populate('creator', 'username');
    return res.json(recipes);
};

const getThreeRecipes = async (req, res) => {
    const recipes = await Recipes.find().sort({ rating: -1 }).limit(3);
    res.json(recipes);
};

const getRecipe=async(req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req, res) => {
    const { title, description, rating} = req.body; 
    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required." });
    }
    try {
        const newRecipe = await Recipes.create({
            title,
            description,
            rating,
            creator: req.user.id,
            createdAt: new Date()
        });
        return res.status(201).json(newRecipe);
    } catch (error) {
        return res.status(500).json({ message: "Failed to add recipe.", error: error.message });
    }
};

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