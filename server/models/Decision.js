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
    rating: [Rating.schema]
});

const Decision = mongoose.model('Decision', decisionSchema);

module.exports = Decision;