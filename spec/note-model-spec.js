describe("Note model", function(){
  
  it("has a unigue id by default", function() {
    var note = new Note("new note");

    assert(note.getId(), 1);
  });

  it("can return the note text", function(){
    var note = new Note("new note");

    assert(note.getText(), "new note");
  });
});