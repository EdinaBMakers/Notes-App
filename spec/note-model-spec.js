describe("Note model", function(){
  var note = new Note("new note");
    it("stores a new note", function(){
    assert(note.text, "new note");
  });

  it("returns the note", function(){
    assert(note.getNote(), "new note");
  });
});