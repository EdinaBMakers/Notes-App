var assert = function(actual, expected) {
  if(actual != expected) {
    throw new Error("Fail: " + actual + " is not equal to " + expected)
  } else {
    console.log("Test passing! " + actual + " is equal to " + expected)
  }
};

var describe = function(describe, fn) {
  console.log(describe);
  fn();
};

describe("it creates a new note", function(){
  var noteModel = new NoteModel("new note");
  assert(noteModel.text, "new note");
});

describe("it returns a note", function(){
  var noteModel = new NoteModel("new note");
  assert(noteModel.getNote(), "new note");
});
