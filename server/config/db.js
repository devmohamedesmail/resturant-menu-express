const mongoose = require('mongoose');


const connectDB = async () =>{
    try {
        mongoose.set('strictQuery',false);
        const  connect = await mongoose.connect('mongodb+srv://devmohamedesmail:Mm19921125@nodejsprojects.0ok81.mongodb.net/resturant-menu');
        console.log(`connection Successfully ${connect.connection.host}`)
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = connectDB;