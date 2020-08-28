
  
exports.seed = function(knex) {

  return knex('ingredients').insert([
    { name: 'water', quantity: 1, unit: "cups"},
    { name: 'rice', quantity: 1, unit: "cups"},
    { name: 'pasta', quantity: 1, unit: "cups" },
  ]);

};
