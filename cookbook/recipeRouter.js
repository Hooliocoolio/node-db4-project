const express = require('express');
const recipes = require('./recipeModel')
const router = express.Router();


//-----------------------------------------------------------------------------
// GETS ALL RECIPES
//-----------------------------------------------------------------------------
router.get('/recipes', (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json({
                Error: "Could not retrieve your recipes."
            })
        })
    })

//-----------------------------------------------------------------------------
// GETS ALL INGREDIENTS
//-----------------------------------------------------------------------------
router.get('/ingredients', (req, res) => {
    recipes.getIngredients(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(error => {
            res.status(500).json({
                Error: "Could not retrieve your ingredients."
            })
        })
    })

//-----------------------------------------------------------------------------
// GETS ALL STEPS
//-----------------------------------------------------------------------------
router.get('/steps', (req, res ) => {
    recipes.getSteps(req.params.id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(error => {
            res.status(500).json({
                Error: "Could not retrieve your steps."
            })
        })
    })

//-----------------------------------------------------------------------------
// GETS ALL INGREDIENTS FOR RECIPE ID
//-----------------------------------------------------------------------------
router.get('/ri/:id', (req, res) => {
    recipes.getRI(req.params.id)
        .then(recipe_ingredients => {
            res.status(200).json(recipe_ingredients)
        })
        .catch(error => {
            res.status(500).json({
                Error: "Could not get your recipe ingredients"
            })
        })
    })

module.exports = router;