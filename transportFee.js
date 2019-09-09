module.exports = function(price) {
  switch (price) {
    case "morning":
      return "R20";
    case "afternoon":
      return "R10";
    case "nightshift":
      return "free";
  }
};
