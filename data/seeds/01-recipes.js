exports.seed = function(knex) {

  return knex('recipes').insert([
    { name: 'cup of water' },
    { name: 'bowl of soup' },
    { name: 'bowl of pasta' },
  ]);

};
