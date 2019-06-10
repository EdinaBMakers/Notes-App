describe("Note list model", function() {
  var noteList = new NoteList();
  var note = new Note("new note");

  it("can add a note to the note list", function() {
    noteList.addNote(note);
    assert(noteList.notes.length, 1);
  });

  it("returns all the notes", function() {
    noteList.addNote(note);
    assert(noteList.list(), note);
  });

  it("creates a new note", function() {
    var noteList = new NoteList();
    var note = noteList.create("second note");
    noteList.addNote(note);
    assert(noteList.list().text, "second note")
  });
});
