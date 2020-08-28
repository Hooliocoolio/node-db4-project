const database = require('../data/dbconfig');

module.exports = {
    getRecipes,
    getIngredients,
    getSteps,
    getRI,
    getRecipeSteps
}

function getRecipes(){
    return database('recipes')
}

function getIngredients(){
    return database('ingredients')
}

function getSteps(){
    return database('steps')
}

function getRI(recipe_id) {
    return database('recipe_ingredients')
    .select("*")
    .where({ recipe_id })
}

function getRecipeSteps(recipe_id) {
    return database('recipe_steps as rs')
        .join('steps as s', 's.id', 'rs.step_id')
        .join('recipes as r', 'r.id', 'rs.recipe_id')
        .where({ recipe_id })
    
}

// function getIngredients(recipe_id) {
//     return database('recipe_ingredients')
//     .select('name','quantity','unit')
//     .join('ingredients','recipe_ingredients.ingredients_id', '=', 'ingredients.id')
//     .where({ recipe_id })
//     .orderBy('name')
// }

// function getInstructions(recipe_id){
//     return database('recipe_steps')
//     .select('step', 'instructions')
//     .where({ recipe_id })
//     .orderBy('step')
// }