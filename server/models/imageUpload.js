const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var imageUpload = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Image', imageUpload);