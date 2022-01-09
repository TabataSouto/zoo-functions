const { employees } = require('../data/zoo_data');

// isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // caso a pessoa não seja gerente;
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // caso a pessoa seja gerente;
  if (isManager(managerId)) {
    return employees
      .filter(({ managers }) => managers.includes(managerId))
      .reduce((acc, { firstName, lastName }) => acc.concat(`${firstName} ${lastName}`), []);
  }
}

module.exports = { isManager, getRelatedEmployees };
