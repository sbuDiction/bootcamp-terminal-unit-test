module.exports = function(loc, reg) {
  if (loc.endsWith(reg)) {
    return true;
  } else {
    return false;
  }
};
