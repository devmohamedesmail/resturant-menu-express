const express = require('express')
const router = express.Router();
const Order = require("../../models/Order")

router.get('/show/orders', async(req,res)=>{
   const orders = await Order.find({ status: "prepare" }).sort({ createdAt: -1 });
   res.render('admin/pages/orders.ejs',{orders});
})







router.get('/change/order/status/:_id', async (req,res)=>{
    const id  = req.params._id;
    await Order.findByIdAndUpdate(id,{status:"completed"});
    res.redirect('/odersroutes/show/orders')
})






router.get('/show/completed/orders', async(req,res)=>{
    const orders = await Order.find({ status: "completed" }).sort({ createdAt: -1 });
    res.render('admin/pages/completed-orders.ejs',{orders});
 })


module.exports = router