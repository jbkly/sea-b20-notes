'use strict'
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Note = require('../models/note');
var NoteView = require('../views/note-view');
var NoteFormView = require('../views/note-form-view');
var NotesCollection = require('../collections/notes-collection');
var NotesCollectionView = require('../views/notes-collection-view');

module.exports = Backbone.Router.extend({
  routes: {
    "notes": "index",
    "notes/new": "create",
    "notes/:id": "singleNote"
  },

  index: function() {
    this.notes = new NotesCollection();
    this.notes.fetch();
    var self = this;
    var notesView = new NotesCollectionView({collection: self.notes});
    console.log(this.notes);
    $('#content').html(notesView.el);
  },

  create: function() {
    var template = require('../templates/note-form.hbs');
    var newNote = new Note();
    var formView = new NoteFormView({model: newNote});
    $('#content').html(formView.el);
  },

  singleNote: function(id) {
    console.log(id);
  }
});
