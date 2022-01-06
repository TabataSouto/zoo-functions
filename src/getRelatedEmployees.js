const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // caso a pessoa não seha gerente;
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // caso a pessoa seja gerente;
  if (isManager(managerId)) {
    return employees
      .filter(({ managers }) => managers.includes(managerId))
      .reduce((acc, employee) => acc.concat(`${employee.firstName} ${employee.lastName}`), []);
  }
}

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
console.log(getRelatedEmployees(stephanieId));
// [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]

module.exports = { isManager, getRelatedEmployees };
