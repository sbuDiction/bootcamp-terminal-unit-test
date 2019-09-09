const assert = require("assert");
const findItemsOver20 = require("../findItemsOver20");

describe("findItemsOver20", function() {
  it("should return items over 20", function() {
    assert.deepEqual(
      findItemsOver20([
        { name: "bananas", qty: 27 },
        { name: "apples", qty: 3 }
      ]),
      [{ name: "bananas", qty: 27 }]
    );
  });

  it('should return an empty array"[ ]" if the items are below 20', function() {
    assert.deepEqual(
      findItemsOver20([
        { name: "bananas", qty: 19 },
        { name: "apples", qty: 18 }
      ]),
      []
    );
  });
});
