const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET/notes to return notes.html
app.get('/notes', (req, res) => {
    console.info('notes.html is sent.')
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// Wildcard route to direct users to an index.html page
app.get('/', (req, res) => {
    console.info('index.html is sent.')
    res.sendFile(path.join(__dirname, 'public/index.html'))
  });

app.listen(PORT, () =>
  console.log(`This application is listening at http://localhost:${PORT}`)
);