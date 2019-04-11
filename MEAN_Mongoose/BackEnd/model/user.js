const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;
