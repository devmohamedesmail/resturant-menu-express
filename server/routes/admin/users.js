const express = require('express')
const router = express.Router();
const User = require('../../models/User');

router.post('/register/user', async (req, res) => {

    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        } else {
            // Create new user
            const newUser = new User({ name, email, password });
            await newUser.save();

            res.status(201).json({ message: "User created successfully" });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }

})




router.post('/login/user', async (req, res) => {

    try {
        const {  email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email,password });
        if (existingUser) {
           
            if (existingUser.role === 'admin') {
               res.render('admin/index')
               
            } else {
                res.render('admin/404')
            }
        } else {
            

            res.status(201).json({ message: "User not exist" });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }

})


// redirect to resgiter page

router.get('/auth/register', (req, res) => {
    res.render('admin/auth/register')
})
router.get('/auth/login', (req, res) => {
    res.render('admin/auth/login')
})






// logout function 
router.get('/logout/user', (req, res) => {
    // Assuming you're using sessions for authentication
    req.session.destroy(err => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).json({ message: "Could not log out, please try again" });
        }

        // Clear the session cookie
        res.clearCookie('connect.sid'); // 'connect.sid' is the default name for the session cookie

        // Redirect to login page or send a success message
        res.redirect('/auth/login');
    });
});







module.exports = router