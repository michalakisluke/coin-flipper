const mongoose = require('mongoose');

const { Schema } = mongoose;

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
    username: {
        type: String,
        required: true
    },
    rating: {
        type: Boolean
    },
    description: {
        type: String,
        trim: true
    }
});

const Decision = mongoose.model('Decision', decisionSchema);

module.exports = Decision;