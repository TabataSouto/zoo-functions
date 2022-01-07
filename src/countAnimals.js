const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species
      .map(({ name, residents }) => new Object({name: 0}))
  }
}

console.log(countAnimals());
module.exports = countAnimals;
