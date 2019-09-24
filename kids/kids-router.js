const router = require("express").Router();

const Kids = require('../kids/kids-model.js');
const Users= require('../users/users-model.js');

router.post("/:id/new-kid", (req, res) => {
	let newKid = req.body;
	let id = req.params.id;

	Kids.addKids(id, newKid)
	  .then(kid => {
	    res.status(201).json(kid);
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({ message:  'Could not add new kid'});
	  });
});

router.get('/:id/kids', (req, res) => {
	const { id } = req.params;
	console.log("Get kids", req.params)
	Kids
		.findKidsByUsersId(id)
		.then(kids => {
			res.status(200).json(kids)
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: "Could not find kids" });
		});
})

module.exports = router;