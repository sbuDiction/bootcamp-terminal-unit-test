const assert = require("assert");
const totalPhoneBill = require("../totalPhoneBill");

describe("totalPhoneBill", function() {
  it("should return the total cost for smss", function() {
    assert.equal(totalPhoneBill("sms, sms, sms"), "R1.95");
  });
  it("should return the total cost for calls", function() {
    assert.equal(totalPhoneBill("call, call"), "R5.50");
  });

  it('should return "R0.00" if there is no input', function() {
    assert.equal(totalPhoneBill(""), "R0.00");
  });
  it("should return the total of the phonebill", function() {
    assert.equal(totalPhoneBill("call, sms, sms, sms, call"), "R7.45");
  });
});
