const db = require("../database/db-config.js")

module.exports = {
    addFood,
    findFoods,
    findFoodById,
    removeFood
}

function addFood(newFood){
    return db('foods')
    .insert(newFood)
}

function findFoods() {

}

function findFoodById() {

}

function removeFood() {

}