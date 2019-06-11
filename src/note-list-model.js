(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  NoteList.prototype.list = function() {
    return this.notes;
  };

  NoteList.prototype.create = function(text) {
    return new Note(text);
  };

  exports.NoteList = NoteList;
})(this);