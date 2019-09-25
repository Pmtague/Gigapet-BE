const db = require("../database/db-config.js");

module.exports = {
  addEntry,
  findEntries,
  findEntryById,
  removeEntry,
  updateEntry
};

function addEntry(kids_id, newEntry) {
  return db("entries as e")
    .join("kids as k", "k.id", "e.kids_id")
    .where("e.kids_id", kids_id)
    .insert(newEntry);
}

function findEntries(id) {
    return db('entries as e')
        .join("kids as k", "k.id", "e.kids_id")
        .where("kids_id", id)
        .then(entries => {
            return entries
        })
}

function findEntryById(id) {
  return db('entries')
    .where({ id })
    .first();
};

function removeEntry(id) {
  return db('entries')
    .where({ id })
    .del();
};

function updateEntry(changes, id) {
  return db('entries')
    .where({ id })
    .update(changes);
};
