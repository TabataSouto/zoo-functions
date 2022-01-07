const data = require('../data/zoo_data');
// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

function getEmployeeByName(employeeName) {
  const { employees } = data;
  // para trazer objeto vazio caso o parametro não seja preenchido;
  if (!employeeName) { return {}; }
  // find para encontrar o nome passado pelo parâmetro e retornar o resultado;
  const finfEmployee = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return finfEmployee;
}

module.exports = getEmployeeByName;
