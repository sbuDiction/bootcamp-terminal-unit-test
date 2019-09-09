module.exports = function(isDay) {
  if (isDay.startsWith("S")) {
    return false;
  } else {
    return true;
  }
};
