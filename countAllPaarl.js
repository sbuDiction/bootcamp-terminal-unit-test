module.exports = function(str) {
  var list = str.split(", ");
  var paarl = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].startsWith("CJ")) {
      paarl.push(list[i]);
    }
  }

  return paarl.length;
};
var strC = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
var list = ["CJ 345 123", "CJ 2345", "CL 123-546", "CK 345", "CJ 123"];
var Paarl = ["CJ 345 123", "CJ 123"];
