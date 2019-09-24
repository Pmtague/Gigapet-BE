const router = require("express").Router();

const Kids = require('../kids/kids-model.js');
const Users= require('../users/users-model.js');

router.post('/:id/new-kid', (req, res) => {
	let newKid = req.body;
	const { id } = req.params;

	Users.findById(id)
		.then(user => {
			if (user) {
				Kids.add(newKid, id)
					.then(kid => {
						res.status(201).json(kid);
					})
			} else {
				res.status(404).json({ message: 'Could not find user' })
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: "Could not add kid" });
		});
});

router.get('/:id/kids', (req, res) => {
	const { id } = req.params;

	Users.findById(id)
		.then(user => {
			if (user) {
				Kids.find()
					.then(kids => {
						res.json(kids)
					})
			} else {
				res.status(404).json({ message: 'Could not find user' })
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: "Could not find kids" });
		});
})

module.exports = router;