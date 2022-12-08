function round(number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function(farenheit) {
  return round((farenheit - 32) * (5/9));
};

const convertToFahrenheit = function(celcius) {
  return round((celcius * (9/5) + 32));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
