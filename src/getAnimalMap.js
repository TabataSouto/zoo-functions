const { species } = require('../data/zoo_data');

// função que trás a localização e as espécies dessa localização;
function filterLocation(objOne) {
  return species
    // acc acessa a chave do objeto e adiciona com o push o valor da chave dentro do array;
    .reduce((acc, { location, name }) => {
      if (location === 'NE') acc.NE.push(`${name}`);
      if (location === 'NW') acc.NW.push(`${name}`);
      if (location === 'SE') acc.SE.push(`${name}`);
      if (location === 'SW') acc.SW.push(`${name}`);
      return acc;
    }, { NE: [], NW: [], SE: [], SW: [] });
}

// função que trás a localização e as espécies dessa localização com o nome de cada animal;
function filterNames(objTwo) {
  return species.reduce((acc, { location, name, residents }) => {
    // const para trazer apenas o nome dos residentes (animais);
    const res = residents
      .map((val) => val.name);
    // acc acessa a chave do objeto e adiciona com o push o valor da chave dentro do array;
    if (location === 'NE') acc.NE.push({ [name]: res });
    if (location === 'NW') acc.NW.push({ [name]: res });
    if (location === 'SE') acc.SE.push({ [name]: res });
    if (location === 'SW') acc.SW.push({ [name]: res });
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

// função que trás a localização e as espécies dessa localização com o nome de cada animal ordenado;
function filterOrderName(objThree) {
  return species.reduce((acc, { location, name, residents }) => {
    // const para trazer apenas o nome dos residentes (animais) ordenados;
    const res = residents
      .map((val) => val.name).sort();
    // acc acessa a chave do objeto e adiciona com o push o valor da chave dentro do array;
    if (location === 'NE') acc.NE.push({ [name]: res });
    if (location === 'NW') acc.NW.push({ [name]: res });
    if (location === 'SE') acc.SE.push({ [name]: res });
    if (location === 'SW') acc.SW.push({ [name]: res });
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

// função que trás a localização e as espécies dessa localização com o nome por sexo;
function filterSex(objFour) {
  return species.reduce((acc, { location, name, residents }) => {
    // const para trazer apenas o nome dos residentes (animais) filtrados por sexo;
    const res = residents
      .filter(({ sex }) => sex === objFour.sex)
      .map((val) => val.name);
    // acc acessa a chave do objeto e adiciona com o push o valor da chave dentro do array;
    if (location === 'NE') acc.NE.push({ [name]: res });
    if (location === 'NW') acc.NW.push({ [name]: res });
    if (location === 'SE') acc.SE.push({ [name]: res });
    if (location === 'SW') acc.SW.push({ [name]: res });
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

// função que trás a localização e as espécies dessa localização com o nome por sexo ordenado;
function filterOrderSex(objFour) {
  return species.reduce((acc, { location, name, residents }) => {
    // const para trazer apenas o nome dos residentes (animais) filtrados por sexo ordenado;
    const res = residents
      .filter(({ sex }) => sex === objFour.sex)
      .map((val) => val.name).sort();
    // acc acessa a chave do objeto e adiciona com o push o valor da chave dentro do array;
    if (location === 'NE') acc.NE.push({ [name]: res });
    if (location === 'NW') acc.NW.push({ [name]: res });
    if (location === 'SE') acc.SE.push({ [name]: res });
    if (location === 'SW') acc.SW.push({ [name]: res });
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

// função que retorna os resultandos das funções acima conforme o if para questão de complexidade;
function callIfOfSex(objFive) {
  if (objFive.sex && objFive.sorted) return filterOrderSex(objFive);
  if (objFive.sex) return filterSex(objFive);
  if (objFive.includeNames) return filterNames();
}

// A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.
function getAnimalMap(options) {
  if (!options || !options.includeNames) return filterLocation();
  if (options.sorted && !options.sex) return filterOrderName();
  return callIfOfSex(options);
}

module.exports = getAnimalMap;
