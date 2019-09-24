const db = require('../database/db-config.js');

module.exports = {
	addKids,
	findKids,
	findKidsByUsersId,
	remove
};

function addKids(users_id, newKid) {
	return db('kids as k')
		.join('users as u', 'u.id', 'k.users_id')
		.where('k.users_id', users_id)
		.insert(newKid)
};

function findKids() {
	return db('kids').select('id', 'name')
};

function findKidsByUsersId(users_id) {
	return db('kids')
		.where({ users_id })
		.first();
};

function remove(id) {
	return db('kids')
		.where({ id })
		.del();
};