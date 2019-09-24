const db = require('../database/db-config.js');

module.exports = {
	add,
	find,
	findById,
	remove
};

function add(kid) {
	return db('kids')
		.insert(kid, 'id')
		.then(ids => {
			const [ id ] = ids;
			return findById(id);
		})
};

function find() {
	return db('kids').select('id', 'name')
};

function findById(id) {
	return db('kids').where({ id }).first();
};

function remove(id) {
	return db('kids')
		.where({ id })
		.del();
};