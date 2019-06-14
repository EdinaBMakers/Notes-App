(function(exports) {  
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.createHTML = function() {
    var htmlString = "<ul>";

    for (var i = 0; i < this._noteList.list().length; i++) {
      htmlString += "<li><div><a href='http://localhost:8080#notes/" 
                 + this._noteList.list()[i].getId() + "'>"
                 + this._noteList.list()[i].getNote().substring(0, 20) 
                 + "</a></div></li>";
    };

    htmlString += "</ul>"

    return htmlString;
  };

  exports.NoteListView = NoteListView;
})(this);