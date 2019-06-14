describe("Note controller", function() {
  it("displays notes on the page", function() {
    var firstNoteId = 1;
    var firstNoteText = "First Note";
    var secondNoteId = 2;
    var secondNoteText = "Second Note";
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);

    noteList.addNote(new FakeNote(firstNoteId, firstNoteText));
    noteList.addNote(new FakeNote(secondNoteId, secondNoteText));
    
    noteController.displayNotes();

    assert(
      document.getElementById('app').textContent, 
      `<ul><li><div><a href='http://localhost:8080#notes/${firstNoteId}'>${firstNoteText}</a></div></li>` +
      `<li><div><a href='http://localhost:8080#notes/${secondNoteId}'>${secondNoteText}</a></div></li></ul>`);
  });
});