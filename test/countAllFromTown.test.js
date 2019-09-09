const assert = require("assert");
const countAllFromTown = require("../countAllFromTown");
describe("countAllFromTown", function() {
  it("should return number of registration plates from town ", function() {
    const regNu = "CL 124,CY 567,CL 345, CJ 456,CL 341";
    const reg = "CL";
    assert.equal(countAllFromTown(regNu, reg), 3);
  });
  it("should return zero if the are no registration plates in the peremeter ", function() {
    assert.equal(countAllFromTown(""), 0);
  });
});