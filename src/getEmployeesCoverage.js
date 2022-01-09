const { employees, species } = require('../data/zoo_data');

// ------------------------ função que filtra o funcionário passado no paramêtro;
function findEmployees(empl) {
  // achar apenas o funcionário informado pelo nome, sobrenome ou ID;
  return employees
    .find(({ id: idEmpl, firstName, lastName }) => {
      const { name, id } = empl;
      return firstName.includes(name)
      || lastName.includes(name)
      || idEmpl.includes(id);
    });
}

// ------------------------- função que filtra as espécies no qual o funcionário é responsável;
function findSpecies(pastSpec) {
  // retorno da função que encontra o funcionário;
  const theEmployess = findEmployees(pastSpec).responsibleFor;
  // econtrar a espécie de responsabilidade do funcionário;
  return species.filter(({ id }) => theEmployess.includes(id));
}

// ------------------------- função que trás o objeto desejado;
function getEmployeesCoverage(emplyee) {
  if (!emplyee) {
    return employees.map((employe) => ({
      id: employe.id,
      fullName: `${employe.firstName} ${employe.lastName}`,
      species: findSpecies(employe).map(({ name }) => name),
      locations: findSpecies(employe).map(({ location }) => location),
    }));
  }
  if (!findEmployees(emplyee)) {
    throw new Error('Informações inválidas');
  }
  const { id, firstName, lastName } = findEmployees(emplyee);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: findSpecies(emplyee).map(({ name }) => name),
    locations: findSpecies(emplyee).map(({ location }) => location),
  };
}

module.exports = getEmployeesCoverage;
