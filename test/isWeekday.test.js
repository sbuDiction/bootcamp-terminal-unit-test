const assert = require("assert");
const isWeekday = require("../isWeekday");

describe("isWeekday", function() {
  it("should return true if the day is Monday", function() {
    assert.equal(isWeekday("Monday"), true);
  });

  it("should return false if not the day of the week", function() {
    assert.equal(isWeekday("Saturday"), false);
  });
});
