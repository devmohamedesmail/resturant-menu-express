// require("dotenv").config();
const express = require('express')
const session = require('express-session');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());



// routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// front routes
app.use('/',require('./server/routes/front'))


// admin routes

app.use('/admin',require('./server/routes/admin'))


// --------------------------- admin routes start -----------------
 app.use('/categoriesroutes',require('./server/routes/admin/categories'));
 app.use('/mealsroutes',require('./server/routes/admin/meals'))
 app.use('/offersroutes',require('./server/routes/admin/offers'))
 app.use('/odersroutes',require('./server/routes/admin/orders'))
 app.use('/usersroutes',require('./server/routes/admin/users'))
// --------------------------- admin routes end -----------------


app.use('/api',require('./server/routes/api/categories'))





const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', './layout/layout.ejs'); 
app.set('view engine', 'ejs');


// public folder
app.use(express.static('public'))
app.use('/uploads', express.static('public/uploads'));





const mongodb = require('./server/config/db')
mongodb()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})