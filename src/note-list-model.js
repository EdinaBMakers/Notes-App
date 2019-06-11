(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  NoteList.prototype.list = function() {
    for (var i = 0; i < this.notes.length; ++i) {
      return this.notes[i];
    };
  };

  NoteList.prototype.create = function(text) {
    return new Note(text);
  };

  exports.NoteList = NoteList;
})(this);