// index.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const { createNote, getNotes, getNoteById, updateNoteById, deleteNoteById } = require('./notes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Swagger setup
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Create a note
app.post('/notes', (req, res) => {
  const note = req.body;
  if (!note.title || !note.content) {
    return res.status(400).send('Title and content are required');
  }
  const newNote = createNote(note);
  res.status(201).json(newNote);
});

// Get all notes
app.get('/notes', (req, res) => {
  res.json(getNotes());
});

// Get a note by ID
app.get('/notes/:id', (req, res) => {
  const note = getNoteById(parseInt(req.params.id, 10));
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
});

// Update a note by ID
app.put('/notes/:id', (req, res) => {
  const updatedNote = updateNoteById(parseInt(req.params.id, 10), req.body);
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).send('Note not found');
  }
});

// Delete a note by ID
app.delete('/notes/:id', (req, res) => {
  const note = deleteNoteById(parseInt(req.params.id, 10));
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
