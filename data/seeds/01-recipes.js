exports.seed = function(knex) {

  return knex('recipes').insert([
    { name: 'cup of water' },
    { name: 'top ramen' },
    { name: 'spaghetti' },
  ]);

};
