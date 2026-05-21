const convertToCelsius = function(fahrenheit) {
  c = (5/9)*(fahrenheit-32);
  return Math.round(c*10)/10;
};

const convertToFahrenheit = function(celcius) {
  f = (9/5)*celcius+32;
  return Math.round(f*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
