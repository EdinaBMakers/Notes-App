(function(exports) { 
  var idCounter = 0;

  function Note(text) {
    this._id = ++idCounter;
    this._text = text;
  };

  Note.prototype.getId = function() {
    return this._id;
  };

  Note.prototype.getText = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);