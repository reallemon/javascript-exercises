const removeFromArray = function(array, ...values) {
  for (let value of values) {
    const idx = array.indexOf(value);
    if (idx >= 0) array.splice(idx, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
