const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Category = require('../models/Category')
const Meal = require('../models/Meal')

router.get('/', (req, res) => {
    res.render('admin/index')
})




// Set up multer for storing uploaded images
// const storage = multer.diskStorage({
//    destination: './public/uploads/',
//    filename: (req, file, cb) => {
//        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//    }
// });


// const upload = multer({ storage: storage });










module.exports = router