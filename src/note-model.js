function NoteModel(text) {
  this.text = text;
};

NoteModel.prototype.getNote = function() {
  return this.text;
}
