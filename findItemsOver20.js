module.exports = function(param) {
  var items = [];
  for (var i = 0; i < param.length; i++) {
    var cal = param[i].qty;
    if (cal > 20) {
      items.push(param[i]);
    }
  }

  return items;
};
