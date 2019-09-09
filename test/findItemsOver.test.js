const assert = require("assert");
const findItemsOver = require("../findItemsOver");

describe("findItemsOver", function() {
  it("should return items which have high quantity of over 20", function() {
    assert.deepEqual(
      findItemsOver(
        [{ name: "bananas", qty: 19 }, { name: "apples", qty: 37 }],
        20
      ),
      [{ name: "apples", qty: 37 }]
    );
  });
  it("should return nothing if the items are below the quantity  ", function() {
    assert.deepEqual(
      findItemsOver(
        [{ name: "bananas", qty: 19 }, { name: "apples", qty: 10 }],
        20
      ),
      []
    );
  });
});