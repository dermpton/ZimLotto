const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    passwordHash: { type: String, required: true},
    ticketsPurchased: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'}],
    balance: {type: Number, default: 0 },
    DateCreated: {type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
