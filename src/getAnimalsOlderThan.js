const data = require('../data/zoo_data');

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const findSpecies = species
    .filter((specie) => specie.name === animal)[0]
    .residents.every((val) => val.age >= age);

  return findSpecies;
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
