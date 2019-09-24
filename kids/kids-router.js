const router = require("express").Router();

const Kids = require('../kids/kids-model.js');

router.post('/new', (req, res) => {
	let newKid = req.body;
	console.log(newKid)

	Kids.add(newKid)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: "Could not add kid" });
		});
});