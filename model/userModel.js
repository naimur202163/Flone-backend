const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter the Name"],

    },
    email:{
        type:String,
        required:[true,"Please Enter the Email"]
    },
    contact:{
        type:Number,
        required:[
            true,"Please Enter the Number"
        ]
    },


});

module.exports=mongoose.model("Users",userSchema)