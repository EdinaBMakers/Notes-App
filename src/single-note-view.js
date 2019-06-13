(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
   }
 
   SingleNoteView.prototype.displayHTML = function() {
     return "<ul><li><div>" + this.note.getNote() + "</div></li></ul>";
   };

  exports.SingleNoteView = SingleNoteView;
})(this);