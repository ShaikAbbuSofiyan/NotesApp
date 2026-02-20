const noteModel = require('../models/note.model');

async function createNote(req, res) {
    const { heading, content } = req.body;
    if (!heading || !content) {
        return res.status(400).json({ message: 'Heading and content are required' });
    }

    const user = req.user;
    
    const newNote = await noteModel.create({
        heading,
        content,
        user: user._id
    });

    res.status(201).json(newNote);
}

async function editNote(req, res) {

}

async function deleteNote(req, res) {

}

module.exports = {
    createNote,
    editNote,
    deleteNote
};