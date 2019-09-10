module.exports = function(items) {
  var count = 0;
  var newArray = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].sales >= count) {
      count = items[i].sales;
      newArray = items[i].department;
    }
  }
  return newArray;
};

