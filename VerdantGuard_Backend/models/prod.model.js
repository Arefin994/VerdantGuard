const mongoose = require('mongoose')

const ProdSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Enter' ]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Prod = mongoose.model("Product", ProdSchema);

module.exports = Prod;