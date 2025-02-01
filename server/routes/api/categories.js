const express = require('express');
const Category = require('../../models/Category')
const Meal = require('../../models/Meal')
const Offer = require('../../models/Offer')
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

module.exports = router;



