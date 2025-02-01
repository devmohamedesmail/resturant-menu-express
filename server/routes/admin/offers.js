const express = require('express');
const router = express.Router();
const Offer = require('../../models/Offer')
const multer = require('multer');
const path = require('path');


router.get('/offers/page',async (req,res)=>{
    const offers = await Offer.find();
    res.render('admin/pages/offers.ejs',{offers})
})



// add oofer
const storage = multer.diskStorage({
   destination: './public/uploads/',
   filename: (req, file, cb) => {
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   }
});


const upload = multer({ storage: storage });



router.post('/add/offer',upload.single('image'), async (req,res)=>{
   try {
    const offer = new Offer();
     offer.title = req.body.title;
     offer.description = req.body.title;
     offer.image = req.file.filename;
     await offer.save();
     res.redirect('/offersroutes/offers/page')
   } catch (error) {
    res.send(error.message)
   }
})




// delete the offer 
router.get('/offer/delete/:_id', async(req,res)=>{
     const id  = req.params._id;
        await Offer.findByIdAndDelete(id);
        res.redirect('/offersroutes/offers/page')
})

module.exports = router;