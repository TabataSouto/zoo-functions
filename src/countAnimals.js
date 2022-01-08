const { species } = require('../data/zoo_data');

// 1. Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// 2. Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// 3. Recebendo como parâmetro um objeto com a chave specie e sex, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado.

function countAnimals(animal) {
  // retorno parte 1;
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  // retorno parte 2;
  const { specie, sex: sexAnimal } = animal;
  if (Object.keys(animal).length < 2) {
    return species.find(({ name }) =>
      animal.specie.includes(name)).residents.length;
  }
  // retorno parte 3 (referência monitoria com Mario Júnior);
  return species.find(({ name }) =>
    name === specie).residents
    .filter(({ sex }) =>
      sexAnimal === sex).length;
}

module.exports = countAnimals;
