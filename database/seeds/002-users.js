const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Penny", password: bcrypt.hashSync('tague', 1)},
        {username: "Rashmi", password: bcrypt.hashSync('patel', 1)},
        {username: "Wayne", password: bcrypt.hashSync('brett', 1)},
      ]);
    });
};
