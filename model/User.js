const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

module.exports = User = mongoose.model('users', UserSchema);