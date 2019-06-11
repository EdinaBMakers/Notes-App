describe("Note list model", function() {

  it("can add a note to the note list", function() {
    var noteList = new NoteList();
    var note = new Note("new note");
    noteList.addNote(note);
    assert(noteList.notes.length, 1);
  });

  it("returns all the notes", function() {
    var noteList = new NoteList();
    var note = new Note("new note");
    noteList.addNote(note);
    assert(noteList.list().length, 1);
  });

  it("creates a new note", function() {
    var noteList = new NoteList();
    var note = noteList.create("second note");
    noteList.addNote(note);
    assert(noteList.list()[0].getNote(), "second note")
  });
});
