const data = require('../data/zoo_data');

// caso o parametro seja vazio retornar [];
// ao receber um id como parâmetro, retorna o array da espécie;
// ao receber mais de um id, retorna array das espécies;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  // como o retorno final é um array, é preciso declarar um array vazio para armazenar o resultado;
  const findSpecies = [];

  // o forEach serve para percorrer todos os ids declarados no parametro ao chamar a função, e ao fazer isso, é atribuido o resultado dentro do nosso array vazio;
  ids.forEach((id) => {
    findSpecies.push(species.find((specie) => id === specie.id));
  });
  return findSpecies;
}

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
