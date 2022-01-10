const { species } = require('../data/zoo_data');

// caso o parametro seja vazio retornar [];
// ao receber um id como parâmetro, retorna o array da espécie;
// ao receber mais de um id, retorna array das espécies;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids
    // map para percorrer os ids passados no parâmetro na chamada da função;
    .map((idsParam) => species
      // find para encontrar o id passado no parametro dentro do objeto species;
      .find(({ id }) => id === idsParam));
}

module.exports = getSpeciesByIds;
