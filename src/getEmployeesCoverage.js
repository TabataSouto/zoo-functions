const { employees, species } = require('../data/zoo_data');

// ------------------------ função que filtra o funcionário passado no paramêtro;
// achar apenas o funcionário informado pelo nome, sobrenome ou ID;
function findEmployees(empl) {
  return employees
    .find(({ id: idEmpl, firstName, lastName }) => {
      const { name, id } = empl;
      return firstName.includes(name)
      || lastName.includes(name)
      || idEmpl.includes(id);
    });
}

// ------------------------- função que filtra as espécies no qual o funcionário é responsável;
// retorno da função que encontra o funcionário;
// econtrar a espécie de responsabilidade do funcionário;
function findSpecies(pastSpec) {
  const theEmployess = findEmployees(pastSpec).responsibleFor;
  return species.filter(({ id }) => theEmployess.includes(id));
}

// ------------------------- função que trás o objeto desejado;
function getEmployeesCoverage(emplyee) {
  if (!emplyee) {
    return 'Id passado não é válido';
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

// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
