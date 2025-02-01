const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:false,
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


module.exports = mongoose.model('Category',CategorySchema);