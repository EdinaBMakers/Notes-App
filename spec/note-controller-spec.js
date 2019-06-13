describe("Note controller", function() {
  it("shows a note on a html page", function() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    
    noteController.displayNotes();

    assert(document.getElementById('app').textContent, '<ul></ul>');
  });
});