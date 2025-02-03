const express = require('express');
const Category = require('../../models/Category')
const Meal = require('../../models/Meal')
const Offer = require('../../models/Offer')
const Order = require('../../models/Order')
const router = express.Router();

router.get('/show/categories', async(req,res)=>{
   const categories =  await Category.find();
    res.json(categories)
})




router.get('/show/meals', async(req,res)=>{
   const meals =  await Meal.find();
    res.json(meals)
})


router.get('/show/offers', async(req,res)=>{
   const offers =  await Offer.find();
    res.json(offers)
})

router.get('/show/category/meals/:id',async (req,res)=>{
    const id = req.params.id;
    const meals = await Meal.find({ category_id: id });
    res.json(meals)
})



router.post('/add/order',async(req,res)=>{
  
   const order = new Order();
   order.table = req.body.table;
   order.order = req.body.order;
   await order.save();
   res.json(order);

})

module.exports = router;



