module.exports = function(regNu, reg) {
  var list = regNu.split(",");
  var town = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].startsWith("CL")) {
      town.push(list[i]);
    }
  }
  return town.length;
};
var regNu = "CL 124,CY 567,CL 345, CJ 456,CL 341";
var reg = "CL";
