const data = require('../data/zoo_data');

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const findSpecies = species
    // filtar a espécia com o nome passado no parâmetro;
    .filter(({ name }) => name === animal)
    // verificar se todos os animais daquela espécie possui a idade maior ou igual do que é informado no parâmetro;
    .every(({ residents }) =>
      residents[0].age > age);
  return findSpecies;
}

module.exports = getAnimalsOlderThan;
