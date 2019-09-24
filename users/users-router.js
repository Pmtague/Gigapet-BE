const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/users', (req, res) => {
	Users.find()
		.then(users => {
			res.json(users)
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: "Could not get users" });
		});
})

module.exports = router;