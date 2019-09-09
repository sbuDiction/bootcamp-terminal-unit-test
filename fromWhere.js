module.exports = function(car) {
  switch (car) {
    case "CY":
      return "Bellville";
    case "CJ":
      return "Paarl";
    case "CA":
      return "Cape Town";
    default:
      return "Some other place!";
  }
};
