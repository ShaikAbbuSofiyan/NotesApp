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
    try {
        const { heading, content } = req.body;
        const user = req.user;

        const { id } = req.params; 

        const note = await noteModel.findById(id);

        if (!note) {
            return res.status(400).json({
                message: "Invalid Note"
            });
        }

        const newNote = await noteModel.findByIdAndUpdate(
            id,
            { heading, content },
            { new: true } 
        );

        res.status(200).json({
            message: "Note updated successfully",
            newNote
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function deleteNote(req, res) {
    try {
        const { id } = req.params;

        const deletedNote = await noteModel.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
module.exports = {
    createNote,
    editNote,
    deleteNote
};