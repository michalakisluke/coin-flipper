const mongoose = require('mongoose');

const { Schema } = mongoose;
const Rating = require('./Rating');

const decisionSchema = new Schema({
    choiceA: {
        type: String,
        required: true,
        trim: true
    },
    choiceB: {
        type: String,
        required: true,
        trim: true
    },
    finalDecision: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        trim: true
    }
});

const Decision = mongoose.model('Decision', decisionSchema);

module.exports = Decision;