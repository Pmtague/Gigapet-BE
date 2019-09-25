const db = require('../database/db-config.js');

module.exports = {
	addKids,
	findKids,
	findKidById,
	remove
};

function addKids(users_id, newKid) {
	return db('kids as k')
		.join('users as u', 'u.id', 'k.users_id')
		.where('k.users_id', users_id)
		.insert(newKid)
};

function findKids(id) {
	return db('kids as k')
	.join("users as u", "u.id", "k.users_id")
	.where("users_id", id)
	.select('k.id', 'k.name', 'k.users_id')
	.then(kids => {
		return kids
	})
};

function findKidById(id) {
	return db('kids')
		.where({ id })
		.first();
};

function remove(id) {
	return db('kids')
		.where({ id })
		.del();
};