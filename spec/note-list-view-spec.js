describe("Note list view", function() {
  it("takes a note list upon instantiation", function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert(noteListView._noteList, noteList)
  });

  it("returns a string of html of the note list if it has one note",
    function(){
    var noteList = new NoteList();
    var noteId = 1;
    var noteText = 'First Note';
    var note = new FakeNote(noteId, noteText);
    noteList.addNote(note);
    var noteListView = new NoteListView(noteList)

    assert(
      noteListView.createHTML(), 
      `<ul><li><div><a href='http://localhost:8080#notes/${noteId}'>${noteText}</a></div></li></ul>`)
  });

  it("returns a string of html of the note list if it has not a note",
    function(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)

    assert(noteListView.createHTML(), "<ul></ul>")
  });

  it("returns a string of html of the note list if it has several notes",
    function(){
    var noteList = new NoteList();
    var firstNote = new FakeNote(1, 'First note which is longer than twenty characters');
    var secondNote = new FakeNote(2, 'Second note');
    noteList.addNote(firstNote);
    noteList.addNote(secondNote);
    var noteListView = new NoteListView(noteList)

    assert(noteListView.createHTML(), 
      "<ul><li><div><a href='http://localhost:8080#notes/1'>First note which is </a></div></li>" +
      "<li><div><a href='http://localhost:8080#notes/2'>Second note</a></div></li></ul>")
  });
});  