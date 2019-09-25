
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('kids').del()
    .then(function () {
      // Inserts seed entries
      return knex('kids').insert([
        {users_id: 1, name: 'Hope', age: '1', weight: '23 lbs'},
        {users_id: 2, name: 'Ami', age: '35', weight: '123 lbs'},
        {users_id: 2, name: 'Neha', age: '32', weight: 'perfect'},
        {users_id: 2, name: 'Rahul', age: '30', weight: '135 lbs'},
        {users_id: 3, name: 'Emily', age: '15', weight: '115 lbs'},
      ]);
    });
};
