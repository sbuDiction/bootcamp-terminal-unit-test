const assert = require("assert");
const countRegNumber = require("../countRegNumber");
describe("countRegNumber", function() {
  it("should return the number of registration numbers in the string", function() {
    assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), 3);
  });
  it("should return only one if the is nothing in the peremeter", function() {
    assert.equal(countRegNumber(""), 1);
  });
});
