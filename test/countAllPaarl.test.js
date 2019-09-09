const assert = require("assert")
const countAllPaarl = require("../countAllPaarl");
describe("countAllPaarl", function() {
  it("returns the number of registration numbers in the string for Paarl", function() {
    assert.equal(
      countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"),
      3
    );
  });
  it("should  return zero if the are no registration numbers from paarl", function() {
    assert.equal(countAllPaarl(""), 0);
  });
});