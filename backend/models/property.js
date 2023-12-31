const mongoose = require('mongoose');
const property = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'default.jpg'
    },
    address : {
        type: String,
      //  required: true
    },
    type:{
        // enum : ['Villa house', 'Apartment', 'penthouse'],
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    bedrooms : {
        type: Number,
        required: true
    },
    bathrooms : {
        type: Number,
        required: true
    },
    parking : {
        type: String,
        //required: true
    },
    area : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        // required: true
    },

    // location : {
    //     type: String,
    //     required: true
    // },

} );

module.exports = mongoose.model('Property', property);