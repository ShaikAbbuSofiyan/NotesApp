const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.routes');
const noteRouter = require('./routes/note.routes');

const app = express(); // initializing express app

app.use(express.json());
app.use(express.text());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/notes', noteRouter);

module.exports = app;