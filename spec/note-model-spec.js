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

var it = function(message, fn)  {
  describe(" " + message, fn)
}

describe("Note model", function(){
  var noteModel = new NoteModel("new note");
    it("stores a new note", function(){
    assert(noteModel.text, "new note");
  });
    it("returns the note", function(){
    assert(noteModel.getNote(), "new note");
  })
});
