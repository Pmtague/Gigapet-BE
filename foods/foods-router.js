const router = require('express').Router();

const Foods = require('./foods-model.js')

router.post("/:id/new-food", (req, res) => {
    let newFood = req.body;
    // let id = req.params.id

    Foods.addFood(newFood)
    .then(food => {
        res.status(201).json(food)
    })
    .catch(err => {
        console.log("new food", err)
        res.status(500).json({ message: "Could not add new food" })
    })
})


module.exports = router;