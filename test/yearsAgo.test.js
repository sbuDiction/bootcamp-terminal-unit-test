const assert = require("assert");
const yearsAgo = require("../yearsAgo");

describe("yearsAgo", function() {
  it("should return the total for the  year 1976", function() {
    const year = 1976;
    assert.equal(yearsAgo(year), 43);
  });
  it("should return the total for the year 2000 ", function() {
    const years = 2000;
    assert.equal(yearsAgo(years), 19);
  });
});