const mongoose = require('mongoose');
const slideshowSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true

    },
    caption : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Slideshow', slideshowSchema);