const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid'); // Helper method for generating unique ids
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

// GET/api/notes
notes.get('/', (req, res) => {
    console.info(`${req.method}/api/notes request received to get notes`);
    readFromFile('./db/db.json').then((data)=>{ // read db.json
        res.json(JSON.parse(data)) // and return all saved notes as JSON
    })
});

// POST/api/notes -- receive new note + save on req.body + add to db.json + return new note to client + give each note a unique id when it's saved (hint: npm package)
notes.post('/', (req, res) => {
    console.info(`${req.method}/api/notes request received to add a note`);
    const {title, text, id} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4() // give each note a unique id
        }
        console.log(newNote);

        readAndAppend(newNote, './db/db.json'); // add to db.json
        res.send('A new note has been added successfully');
    } else {
        res.error('Error: unable to add this note. Please make sure that both the note title and text are not blank.'); // this line of code is actually unnecessary, as the JavaScript code in /public/assets/js/index.js (line 111-117) already dictates that the save button is only displayed when both the note title and text are not empty.
    }
})

// DELETE/api/notes/:id
notes.delete('/:id', (req, res) => {
    console.info(`${req.method}/api/notes request received to delete a note`);
    
    const noteID = req.params.id;
    readFromFile('./db/db.json') // read all notes from db.json
    .then((data) => JSON.parse(data))
    .then((json) => { 
        const result = json.filter((note)=> note.id !== noteID); // remove the note with a given id, i.e., create a new array without the deleted noteID
        writeToFile('./db/db.json', result); // rewrite notes to db.json
        res.json(`Item ${noteID} has been deleted.`);
    })
})

module.exports = notes;