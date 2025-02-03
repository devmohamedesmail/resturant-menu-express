const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Category = require('../models/Category')
const Meal = require('../models/Meal')

router.get('/', (req, res) => {
    res.render('admin/index')
    
})








module.exports = router