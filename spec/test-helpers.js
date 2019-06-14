var assert = function(actual, expected) {
  if(actual != expected) {
    throw new Error("Failed: " + actual + " is not equal to " + expected)
  } else {
    console.log("Passed!");
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

function FakeNote(id, text) {

  this.getId = function() { return id; };
  this.getNote = function() { return text; };
}