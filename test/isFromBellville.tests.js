const assert = require("assert");
const isFromBellville = require("../isFromBellville");

describe("isFromBellville", function() {
  it("return true for Bellville", function() {
    assert.equal(isFromBellville("CY"), true);
  });

  it("if not for Bellville returns false", function() {
    assert.equal(isFromBellville("CJ"), false);
  });
});

