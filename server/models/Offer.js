const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const OffferSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        require:true,

    },
    image:{
        type:String,
        require:true,
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


module.exports = mongoose.model('Offer',OffferSchema)