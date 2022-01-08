const { prices: { child, adult, senior } } = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants
    .reduce((acc, { age }) => {
      if (age < 18) {
        acc.child += 1;
      }
      if (age >= 18 && age < 50) {
        acc.adult += 1;
      }
      if (age >= 50) {
        acc.senior += 1;
      }
      return acc;
    }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }

  const func = countEntrants(entrants);
  const calcNumber = child * func.child
                    + adult * func.adult
                    + senior * func.senior;
  return calcNumber;
}

module.exports = { calculateEntry, countEntrants };
