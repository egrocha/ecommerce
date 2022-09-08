const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'The username field is required'],
    },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;