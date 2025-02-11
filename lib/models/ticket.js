const mongoose = require('mongoose');

const LotteryTicketSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    numbers: { type: [Number], required: true },
    drawDate:{ type: Date, required: true },
    isWinner: { type: Boolean, default: false }
});

module.exports = mongoose.model('Ticket', LotteryTicketSchema);