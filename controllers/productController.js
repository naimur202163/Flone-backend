const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../model/productModel");




exports.getAllProducts = async (req, res) => {
  const product = await Product.find({});
  res.status(200).json({
    success: true,
    product,
  });
};





exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

exports.getSingleProduct=catchAsyncErrors((req,res,next)=>{
    const 
})