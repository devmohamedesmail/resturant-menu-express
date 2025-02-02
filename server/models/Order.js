const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    table: {
        type: String,
        require: true,
    },
    order:{

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