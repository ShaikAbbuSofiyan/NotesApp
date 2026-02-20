const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true});

const noteModel = mongoose.model('Note', noteSchema);

module.exports = noteModel;