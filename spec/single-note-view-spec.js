describe("Single note view", function() {

  it("shows a note on a html page", function() {
    var noteText = "New Note";
    var note = new Note(noteText);
    var singleNoteView = new SingleNoteView(note);

    assert(singleNoteView.createHTML(), `<div>${noteText}</div>`)
  });
});
