const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
    name: { type: String, trim: true, required: true },
    earned_vote: { type: Number, default: 0 },
});

module.exports = mongoose.model('Candidate', CandidateSchema);