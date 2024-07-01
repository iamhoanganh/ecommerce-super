const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        // unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    percentDiscount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array
    },
    ratings: [
        {
            star: { type: Number },
            postedBy: { type: mongoose.Types.ObjectId, ref: 'User' },
            comment: { type: String },
            updatedAt: { type: Date }
        }
    ],
    varriants: {
        color: { type: Array },
        size: { type: Array },
        sexual: { type: Array,
            default: "nam"
         },
        origin: { type: Array },
        material: { type: Array },
    }
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Product', productSchema);