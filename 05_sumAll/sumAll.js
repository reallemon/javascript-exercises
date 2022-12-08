function isValid(number) {
  const isNumber = typeof number === 'number';
  const isPositive = number >= 0;

  return isNumber && isPositive;
}

const sumAll = function(from, to) {
  if (!isValid(from) || !isValid(to)) return 'ERROR';

  const min = Math.min(from, to);
  const max = Math.max(from, to);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
