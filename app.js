const express = require("express");
const app = express();
const cookieParser=require("cookie-parser");

app.use(cookieParser())
app.use(express.json());


// Route Imports
const product=require('./routes/productRoute')

// Api versons
app.use('/api/v1',product)



module.exports = app;
