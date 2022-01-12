const mongoose = require('mongoose');

const { Schema } = mongoose;

const ratingSchema = new Schema({
    rating: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        trim: true
    }
});

const Rating = mongoose.model('Decision', ratingSchema);

module.exports = Rating;