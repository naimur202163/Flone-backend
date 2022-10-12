const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
        name:{
            type:String,
            require:[true,"Please Enter the Name"],
            trim:true,
        }
})



module.exports=mongoose.model("Product",productSchema)