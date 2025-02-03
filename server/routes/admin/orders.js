const express = require('express')
const router = express.Router();
const Order = require("../../models/Order")

router.get('/show/orders', async(req,res)=>{
   const orders = await Order.find().sort({ createAt: -1 });
   res.render('admin/pages/orders.ejs',{orders});
})

module.exports = router