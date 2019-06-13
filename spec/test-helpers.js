var assert = function(actual, expected) {
  if(actual != expected) {
    throw new Error("Failed: " + actual + " is not equal to " + expected)
  } else {
    console.log("Passed! " + actual + " is equal to " + expected)
  }
};

var describe = function(describe, fn) {
  console.log(describe);
  fn();
};

var it = function(message, fn)  {
  describe(" " + message, fn)
}

function FakeElement() {};
  
FakeElement.prototype.textContent = "";

var fakeElement = new FakeElement();

document.getElementById = function(id) { return fakeElement; };