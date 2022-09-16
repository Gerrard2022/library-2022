const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter a username']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    }
});

// fire a function before doc is saved
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    
    next();
});

// static method to log a user
userSchema.statics.login = async function(name, email, password) {
    // const user = await this.findOne({ email });
    const user = await this.findOne({ name });

    if(user){
            const auth = await bcrypt.compare(password, user.password);
            if(auth){
                return user;
            }
            throw Error('incorrect password');       
    }
    throw Error('incorrect username')
}

const User = mongoose.model('user', userSchema);

module.exports = User;