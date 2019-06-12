(function(exports) {  
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.createHtml = function() {
    var htmlString = "<ul>";

    for (var i = 0; i < this.noteList.list().length; i++) {
      htmlString += "<li><div>" 
                 + this.noteList.list()[i].getNote() 
                 + "</div></li>";
    };

    htmlString += "</ul>"

    return htmlString;
  };

  exports.NoteListView = NoteListView;
})(this);