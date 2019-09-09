const assert = require("assert");
const greet = require("../greet");

describe("Greet Test", function() {
  it("should return hello with the name passed inside the peremeter ", function() {
    assert.equal("Hello, sbu", greet("sbu"));
  });

  it("should return just Hello if the is no name inside the peremeter", function() {
    assert.equal(greet(""), "Hello, ");
  });
});