const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const Users=require('../model/userModel')
exports.getAllUsers=async(req,res)=>{
        res.send("User Route is wokring")
}




exports.createUsers=catchAsyncErrors(async(req,res,next)=>{
        const users=await Users.create(req.body);

        res.status(201).json({
                success:true,
                users
        })

})