(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.displayNotes = function() {
    var list = this.noteListView.createHTML(this.noteList);

    document.getElementById("app").textContent = list;
  };

  function listenToHashChange() {
    window.addEventListener("hashchange", handleHashChange);
  }

  function handleHashChange() {
    // TODO: handle hash change
  }

  listenToHashChange();

  exports.NoteController = NoteController;
})(this);