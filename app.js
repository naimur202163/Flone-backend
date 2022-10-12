const express = require("express");
const app = express();
const cookieParser=require("cookie-parser");

app.use(cookieParser())
app.use(express.json());


// Route Imports
const product=require('./routes/productRoute');
const user=require('./routes/userRoute');

// Api Versions
app.use('/api/v1',product);
app.use('/api/v1',user);


module.exports = app;
