
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "make":"Honda",
          "model":"Accord",
          "vin":"1234hriudsbnflsc98n3",
          "mileage": 123000
        },
        {
          "make":"Toyota",
          "model":"Camry",
          "vin":"doi38dm382ks9924",
          "mileage": 1500
        },
        {
          "make":"Ford",
          "model":"Raptor",
          "vin":"dje282wjdcuwjzi8q2jsiam",
          "mileage": 0
        }
      ]);
    });
};
