(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.displayNotes = function() {
    var list = this.noteListView.createHTML(this.noteList);

    document.getElementById("app").textContent = list;
  };

  exports.NoteController = NoteController;
})(this);