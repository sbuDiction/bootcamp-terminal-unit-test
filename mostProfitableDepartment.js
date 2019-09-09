module.exports = function(str1) {
  var b = 0;
  var a = [];
  for (var i = 0; i < str1.length; i++) {
    if (str1[i].sales >= b) {
      b = str1[i].sales;
      a = str1[i].department;
    }
  }
  return a;
};

