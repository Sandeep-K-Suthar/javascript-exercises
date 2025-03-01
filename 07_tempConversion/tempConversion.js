const convertToCelsius = function(F) {
  let fToC = (F-32)*5/9;
  let roundFToC =Math.round(fToC*10)/10;
  return roundFToC;
};

const convertToFahrenheit = function(C) {
  let cToF = (C+32+9/5);
  let roundFToC=Math.round(cToF*10)/10;
  return roundFToC;
};
convertToCelsius(100);
convertToFahrenheit(0);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
