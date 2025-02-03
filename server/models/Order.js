const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    table: {
        type: String,
        require: true,
    },
    order:[
        {
            title: String,
            price: Number,
            quantity: Number,
            image: String
        }
    ],
    seen:{
        type:Boolean,
        default:false,
    },

    status:{
        type:String,
        enum: ['prepare', 'completed', 'canceled'],
        default: 'prepare',
    },

    createAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model("Order", OrderSchema);