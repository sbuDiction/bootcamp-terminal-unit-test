module.exports = function(param1, param2) {
  var items = [];
  for (var i = 0; i < param1.length; i++) {
    var cal = param1[i].qty;
    if (cal > param2) {
      items.push(param1[i]);
    }
  }

  return items;
};
