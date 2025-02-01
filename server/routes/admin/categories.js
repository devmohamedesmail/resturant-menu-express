const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Category = require('../../models/Category')




router.get('/categories/page', async (req, res) => {
    const categories = await Category.find();
    
   res.render('admin/pages/categories.ejs',{categories})
})


// Set up multer for storing uploaded images
const storage = multer.diskStorage({
   destination: './public/uploads/',
   filename: (req, file, cb) => {
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   }
});
const upload = multer({ storage: storage });
router.post('/add/category',upload.single('image'),async(req,res)=>{
      try {
      
       const newCategory = new Category(); 
       newCategory.title = req.body.title;
       newCategory.image = req.file.filename;
      
       await newCategory.save();
       res.redirect('/categoriesroutes/categories/page');
      
   } catch (error) {
       res.status(500).json({ success: false, message: "Error saving category.", error: error.message });
   }
})



// Delete category function 
router.get('/categories/delete/:_id',async(req,res)=>{
    const id = req.params._id;  // Get the _id from the URL parameters
    const category = await Category.findOneAndDelete(id)
    res.redirect('/categoriesroutes/categories/page');
 })
module.exports = router;