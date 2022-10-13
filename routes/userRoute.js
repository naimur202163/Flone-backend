const express=require('express');
const { getAllUsers, createUsers } = require('../controllers/userController');

const router=express.Router();




router.route('/users').get(getAllUsers).post(createUsers);
module.exports=router