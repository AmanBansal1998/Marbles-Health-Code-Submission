// notes.js

let notes = [];  // This will store our notes in memory
let idCounter = 1;  // Simple ID counter

// Create a new note
function createNote(note) {
  const newNote = { id: idCounter++, ...note };
  notes.push(newNote);
  return newNote;
}

// Get all notes
function getNotes() {
  return notes;
}

// Get a note by ID
function getNoteById(id) {
  return notes.find(note => note.id === id);
}

// Update a note by ID
function updateNoteById(id, updatedNote) {
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes[index] = { ...notes[index], ...updatedNote };
    return notes[index];
  }
  return null;
}

// Delete a note by ID
function deleteNoteById(id) {
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    return notes.splice(index, 1)[0];
  }
  return null;
}

module.exports = { createNote, getNotes, getNoteById, updateNoteById, deleteNoteById };
