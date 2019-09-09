module.exports = function(bill) {
  var phoneBill = bill.split(", ");
  var calls = [];
  var sms = [];
  for (var i = 0; i < phoneBill.length; i++) {
    if (phoneBill[i].startsWith("c")) {
      calls.push(phoneBill[i]);
    } else if (phoneBill[i].startsWith("s")) {
      sms.push(phoneBill[i]);
    }
    var call = 2.75 * calls.length;
    var smss = 0.65 * sms.length;
    var total = call + smss;
  }
  return "R" + total.toFixed(2);
};
