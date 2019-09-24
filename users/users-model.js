const db = require('../database/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove
};

function add(user) {
	return db('users')
		.insert(user, 'id')
		.then(ids => {
			const [id] = ids;
			return findById(id);
		})
		// .catch(err => {
		// 	console.log(err);
		// })
};

function find() {
	return db('users').select('id', 'username')
};

function findBy(filter) {
	console.log("filter", filter)
	return db('users').where(filter);
};

function findById(id) {
	return db('users').where({ id }).first();
};

function remove(id) {
	return db('users')
		.where({ id })
		.del();
};
