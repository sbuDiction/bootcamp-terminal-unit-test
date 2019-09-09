const assert = require("assert");
const transportFee = require("../transportFee");

describe("transportFee", function() {
  it('should return "R20" if the shift is morning', function() {
    assert.equal(transportFee("morning"), "R20");
  });
  it('shuld return "R10" if the shift is afternoon', function() {
    assert.equal(transportFee("afternoon"), "R10");
  });
  it('should return "free" if the shift is nightshift', function() {
    assert.equal(transportFee("nightshift"), "free");
  });
});