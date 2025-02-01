const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MealSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    category_id:{
        type:String,
        require:true,
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



module.exports = mongoose.model('Meal',MealSchema);