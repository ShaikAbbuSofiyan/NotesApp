const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

async function registerUser(req, res) {

    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if(user){
        return res.status(400).json({ message: 'User already exists' });
    }

    // hashing the password before saving to database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword
    });
    const token = jwt.sign({
        id: newUser._id,
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    res.status(201).json({ 
        message: 'User registered successfully',
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }
    });
}

async function loginUser(req, res) {
    const {email, password} = req.body;
    const user = await userModel.findOne({ email });
    if(!user){
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    res.status(200).json({
        message: 'User logged in successfully',
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });

}

async function logoutUser(req, res) {
    res.clearCookie('token');
    res.status(200).json({
        message: 'User logged out successfully' 
    });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};