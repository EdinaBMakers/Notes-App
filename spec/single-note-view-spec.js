describe("Single note view", function() {

  it("shows a note on a html page", function() {
    var note = new Note("new note");
    var singleNoteView = new SingleNoteView(note);

    assert(singleNoteView.displayHTML(), "<ul><li><div>new note</div></li></ul>")
  });
});