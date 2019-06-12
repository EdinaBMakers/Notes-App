describe("Note list view", function() {
  it("takes a note list upon instantiation", function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert(noteListView.noteList, noteList)
  });

  it("returns a string of html of the note list if it has one note",
    function(){
    var noteList = new NoteList();
    var firstNote = noteList.create('First note');
    noteList.addNote(firstNote);
    var noteListView = new NoteListView(noteList)

    assert(noteListView.createHtml(), "<ul><li><div>" + firstNote.getNote() + "</div></li></ul>")
  });

  it("returns a string of html of the note list if it has not a note",
    function(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)

    assert(noteListView.createHtml(), "<ul></ul>")
  });

  it("returns a string of html of the note list if it has several notes",
    function(){
    var noteList = new NoteList();
    var firstNote = noteList.create('First note');
    noteList.addNote(firstNote);
    var secondNote = noteList.create('Second note');
    noteList.addNote(secondNote);
    var noteListView = new NoteListView(noteList)

    assert(noteListView.createHtml(), 
      "<ul><li><div>"+ firstNote.getNote() + "</div></li>" +
      "<li><div>" + secondNote.getNote() + "</div></li></ul>")
  });
});  