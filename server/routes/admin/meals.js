const express = require('express');
const router = express.Router();
const Meal = require('../../models/Meal')
const Category = require('../../models/Category')
const multer = require('multer');
const path = require('path');

router.get('/meals/page',async (req,res)=>{
    const categories = await Category.find();
    const meals = await Meal.find()
    res.render('admin/pages/meals.ejs',{categories,meals})
})



// add new meal to database
const storage = multer.diskStorage({
   destination: './public/uploads/',
   filename: (req, file, cb) => {
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   }
});


const upload = multer({ storage: storage });


router.post('/add/meal',upload.single('image') , async(req,res)=>{
    const meal = new Meal();
    meal.title = req.body.title;
    meal.category_id = req.body.category_id;
    meal.image = req.file.filename;
    meal.price = req.body.price;
    await meal.save();
    res.redirect('/mealsroutes/meals/page')
})



router.get('/meal/delete/:_id', async (req,res)=>{
    const id  = req.params._id;
    await Meal.findByIdAndDelete(id);
    res.redirect('/mealsroutes/meals/page')
})




module.exports = router