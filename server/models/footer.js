const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var footerSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Footer', footerSchema);