const { employees, species } = require('../data/zoo_data');

// como encontrar o id do parâmetro com o objeto?
// como encontrar a primeira espécie de animal gerenciado pelo funcionário;
// como retornar um array com nome, sexo e idade do animal mais velho dessa espécie.

function getOldestFromFirstSpecies(id) {
  // achar em employess a primeira espécie no qual ele é responsável;
  const filterEmplyeeResp = employees
    .find(({ id: idEmp }) => id.includes(idEmp))
    .responsibleFor;

  // encontrar a espécie e retornar o mais velho;
  const filterSpecie = species
    .find(({ id: idSpe }) => filterEmplyeeResp.includes(idSpe)).residents
    .sort((a, b) => b.age - a.age)[0];

  return Object.values(filterSpecie);
}

module.exports = getOldestFromFirstSpecies;
