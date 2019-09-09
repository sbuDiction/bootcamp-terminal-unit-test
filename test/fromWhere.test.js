const assert = require("assert");
const fromWhere = require("../fromWhere");

describe("fromWhere", function() {
  it('should return "Bellville" If the reg number starts with CY', function() {
    assert.equal(fromWhere("CY"), "Bellville");
  });
  it('should return "Paarl" If the reg number starts with CJ', function() {
    assert.equal(fromWhere("CJ"), "Paarl");
  });
  it('should return "Cape Town" If the reg number starts with CA', function() {
    assert.equal(fromWhere("CJ"), "Paarl");
  });
  it('should return "Some other place!" if the reg number is not on the data base', function() {
    assert.equal(fromWhere("CC"), "Some other place!");
  });
});