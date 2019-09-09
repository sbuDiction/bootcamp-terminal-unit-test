const assert = require("assert");
const regCheck = require("../regCheck");

describe("regCheck", function() {
  it("should return true if the plate registration id for GP", function() {
    assert.equal(regCheck("DV 23 NB GP", "GP"), true);
  });

  it("should return false if registration plate is MP", function() {
    assert.equal(regCheck("DV 23 LP GP", "MP"), false);
  });
});