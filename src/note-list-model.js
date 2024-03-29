(function(exports) {
  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.addNote = function(note) {
    this._notes.push(note);
  };

  NoteList.prototype.list = function() {
    return this._notes;
  };

  NoteList.prototype.create = function(text) {
    return new Note(text);
  };

  exports.NoteList = NoteList;
})(this);