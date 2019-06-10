describe("Note list model", function() {
  var noteList = new NoteList();

  it("can add a note to the note list", function() {
    var note = new Note("new note");
    noteList.addNote(note);

    assert(noteList.notes.length, 1);
  });
});
