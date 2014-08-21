'use strict'
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var NotesRouter = require('./notes/routers/notes-router');
var notesRouter = new NotesRouter();

Backbone.history.start({});
notesRouter.navigate("/notes", {trigger:true});
