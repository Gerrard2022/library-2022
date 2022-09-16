const User = require('../models/user');
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
    let errors = { name: '', email: '', password: '' };

    // incorrect username
    if(err.message === 'incorrect username'){
        errors.name = 'Unregistered username';
    }

    // incorrect email
    // if(err.message === 'incorrect email'){
    //     errors.email = 'Please enter a registered email';
    // }

    // incorrect password
    if(err.message === 'incorrect password'){
        errors.password = 'Incorrect password';
    }

// duplicate errors(emails)
    if(err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation errors
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {

            errors[properties.path] = properties.message;

        });
    }
    return errors;
}

// json web token function
const max_age = 3*24*60*60
const createToken = (id) => {
    return jwt.sign({ id }, 'Itachi Uchiha',{
        expiresIn: max_age
    });
}

const signup_get = (req, res) => {
    res.render('signup');
}

const login_get = (req, res) => {
    res.render('login');
}

const signup_post = async (req, res) => {
    const { name, email, password } = req.body;

    try{
        const user = await User.create({ name, email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: max_age * 1000});
        res.status(201).json({ user: user._id });
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(401).json({ errors });
    }

}

const login_post = async (req, res) => {
    const { name, email, password } = req.body;
    
    try{
        const user = await User.login(name, email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: max_age * 1000});
        res.status(200).json({ user: user._id })
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(404).json({ errors });
    }
}

const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/')
}





module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post,
    logout_get
}