const express = require('express')
const router = express.Router();



router.get('/', (req, res) => {
    res.render('front/index')
    // res.send("Fdsf")
})



module.exports = router;