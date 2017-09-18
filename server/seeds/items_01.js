exports.seed = function(knex) {
  return knex('items').del()
    .then(() => {
      return knex('items').insert([{
         name:"aquire dragon",
         complete:false
      },
      {
         name:"learn to fly",
         complete:false
      }]);
   });
};
